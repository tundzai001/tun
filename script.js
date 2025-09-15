// =======================================================
// IMPORT CÁC MODULE - PHIÊN BẢN HOÀN CHỈNH
// =======================================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; 

// Import DỮ LIỆU TĨNH từ file data.js
import { 
    birthdayData, 
    mainPlaylist, 
    dailySongs, 
    dailyLetters, 
    daytimeLetters, 
    celestialData, 
    messages, 
    birthdayMessages, 
    shootingStarMessages,
    flightDayLetter,
    airportData,
    memoriesData 
} from './data.js';

// Import HÀM LẤY DỮ LIỆU THỜI TIẾT
import { getWeatherData } from './weather.js';


// =================================================================
// PHẦN 1: KHAI BÁO BIẾN VÀ DOM ELEMENTS
// =================================================================
const bodyEl = document.body;
const ambientAudio = document.getElementById('ambient-sound');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
let composer;
const galaxy = document.getElementById('galaxy');
const audio = document.getElementById('bg-music');
const overlay = document.getElementById('music-overlay');
const songTitleEl = document.getElementById('song-title');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const loadingScreen = document.getElementById('loading-screen');
const settingsToggleBtn = document.getElementById('settings-toggle-btn');
const settingsPanel = document.getElementById('settings-panel');
const volumeSlider = document.getElementById('volume-slider');
const waveformContainer = document.getElementById('waveform');
const waveformControls = document.getElementById('waveform-controls');
const playPauseBtn = document.getElementById('play-pause-btn');
const infoCard = document.getElementById('planet-info-card');
const infoCardTitle = document.getElementById('info-card-title');
const infoCardFact = document.getElementById('info-card-fact');
const infoCardMessage = document.getElementById('info-card-message');
const closeInfoBtn = document.getElementById('close-info-btn');
const canvas = document.getElementById('webgl-canvas');
const letterContainer = document.getElementById('letter-container');
const weatherWidgetContainer = document.getElementById('weather-widget-container');
const weatherConditionEl = document.getElementById('weather-condition');
const weatherTempEl = document.getElementById('weather-temp');
const weatherAqiEl = document.getElementById('weather-aqi');
const weatherMoonEl = document.getElementById('weather-moon');

let isNightlyPlaylistActive = false;
let mainPlaylistState = { index: 0, time: 0 };
let preloadedNextAudio = null;
let saveStateInterval = null;

const HOME_CAMERA_POSITION = new THREE.Vector3(0, 150, 450);
const HOME_CONTROLS_TARGET = new THREE.Vector3(0, 0, 0);
let activeSatellites = [];
let activePeakRockets = [];
let isAutoRotating = false;
let autoRotateAngle = 0;
const cameraSettings = { autoRotateSpeed: 0.002, verticalArcAmount: 1.5, lookAtHeightOffset: 0.15 };
let spaceship;

const heartSymbols = ["♥", "💖", "💕", "🌟", "✨"];
const textStyles = ['love', 'date', 'special'];
const activeParticles = new Set();
let upNextPlaylist = [];
let upNextIndex = 0;
let isBirthdayMode = false;
let typingInterval = null;
let wavesurfer;
let scene, camera, renderer, controls, ambientLight, sunLight;
let starfield;
const celestialObjects = [];
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let loadingManager;
let textureLoader;
let isAnimatingCamera = false;
let followedObject = null;
let activeAsteroids = [];
let activeComets = [];
let sunEffects = {};
const clock = new THREE.Clock();
let saturnRing;
let asteroidBelt;
let preFocusCameraState = {
    position: new THREE.Vector3(),
    target: new THREE.Vector3()
};

let currentWeatherData = null;
let weatherEffects = { rain: null, snow: null };
let activeWeatherEffect = 'none';
let timeOfDayState = 'day';
let cinematicOrbitSpeed = 0.002; 

// Biến cho hành trình điện ảnh
let isJourneyActive = false;
let isJourneyPaused = false;
let currentJourneySegment = 0;
const journeyPathVisuals = [];
const memoryStars = {};


// =================================================================
// PHẦN 2: CÁC HÀM QUẢN LÝ VÀ HIỆU ỨNG THỜI TIẾT
// =================================================================
function updateWeatherUI(weather) {
    if (!weather) return;
    const conditionText = weather.conditionText.toLowerCase();
    let conditionDisplay = weather.is_day ? "Trời quang" : "Trời quang";
    let conditionEmoji = weather.is_day ? "☀️" : "🌙";

    if (conditionText.includes("rain") || conditionText.includes("shower")) { conditionDisplay = "Đang có mưa"; conditionEmoji = "🌧️"; } 
    else if (conditionText.includes("cloudy")) { conditionDisplay = "Trời nhiều mây"; conditionEmoji = "☁️"; } 
    else if (conditionText.includes("overcast")) { conditionDisplay = "Trời u ám"; conditionEmoji = "🌥️"; } 
    else if (conditionText.includes("mist") || conditionText.includes("fog")) { conditionDisplay = "Có sương mù"; conditionEmoji = "🌫️"; } 
    else if (conditionText.includes("snow")) { conditionDisplay = "Đang có tuyết"; conditionEmoji = "❄️"; } 
    else if (conditionText.includes("thunder")) { conditionDisplay = "Có sấm sét"; conditionEmoji = "⛈️"; }
    
    weatherConditionEl.textContent = `${conditionDisplay} ${conditionEmoji}`;
    weatherTempEl.textContent = `${weather.temperature}°C`;
    weatherAqiEl.textContent = weather.aqi.category;
    weatherMoonEl.textContent = weather.moon.phase;
}

function createProceduralTexture(gradientCallback, size = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = size; canvas.height = size;
    const context = canvas.getContext('2d');
    gradientCallback(context, size);
    return new THREE.CanvasTexture(canvas);
}

function createRainEffect() {
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = Math.random() * 1000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x87ceeb, size: 1.5, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending });
    weatherEffects.rain = new THREE.Points(geometry, material);
    weatherEffects.rain.visible = false;
    scene.add(weatherEffects.rain);
}

function createSnowEffect() {
    const particleCount = 1500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = Math.random() * 1000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0xffffff, size: 2,
        map: createProceduralTexture((ctx, size) => {
            const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = gradient; ctx.fillRect(0, 0, size, size);
        }),
        transparent: true, blending: THREE.AdditiveBlending
    });
    weatherEffects.snow = new THREE.Points(geometry, material);
    weatherEffects.snow.visible = false;
    scene.add(weatherEffects.snow);
}

function updateWeatherParticles(delta) {
    const elapsedTime = clock.getElapsedTime();
    if (activeWeatherEffect === 'rain' && weatherEffects.rain) {
        const positions = weatherEffects.rain.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] -= 250 * delta;
            if (positions[i + 1] < -500) positions[i + 1] = 500;
        }
        weatherEffects.rain.geometry.attributes.position.needsUpdate = true;
    }
    if (activeWeatherEffect === 'snow' && weatherEffects.snow) {
        const positions = weatherEffects.snow.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
            positions[i + 1] -= 20 * delta;
            positions[i] += Math.sin(elapsedTime + i) * 5 * delta;
            if (positions[i + 1] < -500) positions[i + 1] = 500;
        }
        weatherEffects.snow.geometry.attributes.position.needsUpdate = true;
    }
}

function updateUIAmbiance(timeState) {
    bodyEl.classList.remove('state-dawn', 'state-dusk', 'state-night');
    if (timeState !== 'day') {
        bodyEl.classList.add(`state-${timeState}`);
    }
}

function updateUniverseAmbiance(weather, delta) {
    if (!weather) return;

    const localHour = new Date(weather.localtime).getHours();
    let newTimeOfDayState = 'day';
    if (localHour >= 5 && localHour < 10) newTimeOfDayState = 'dawn';
    else if (localHour >= 10 && localHour < 17) newTimeOfDayState = 'day';
    else if (localHour >= 17 && localHour < 21) newTimeOfDayState = 'dusk';
    else newTimeOfDayState = 'night';

    if (newTimeOfDayState !== timeOfDayState) {
        timeOfDayState = newTimeOfDayState;
        updateUIAmbiance(timeOfDayState);
    }
    
    let targetSunIntensity = 1.5;
    const targetAmbientColor = new THREE.Color();
    const targetSunColor = new THREE.Color();
    const targetFogColor = new THREE.Color();

    switch (timeOfDayState) {
        case 'dawn':
            targetSunIntensity = 1.0; targetAmbientColor.set("#ff8c69"); targetSunColor.set("#ffae8b"); targetFogColor.set("#4a2a3a"); break;
        case 'day':
            targetSunIntensity = 1.7; targetAmbientColor.set("#ffffff"); targetSunColor.set("#ffffff"); targetFogColor.set("#050a15"); break;
        case 'dusk':
            targetSunIntensity = 1.2; targetAmbientColor.set("#ff6a00"); targetSunColor.set("#ff8a35"); targetFogColor.set("#3b1e25"); break;
        case 'night':
            targetSunIntensity = 0.3; targetAmbientColor.set("#4a5a8a"); targetSunColor.set("#b5c5ff"); targetFogColor.set("#020207"); break;
    }

    const condition = weather.conditionText.toLowerCase();
    if (condition.includes('cloudy') || condition.includes('overcast') || condition.includes('fog')) { targetSunIntensity *= 0.6; }
    if (weather.is_raining) { targetSunIntensity *= 0.4; }
    
    sunLight.intensity = THREE.MathUtils.lerp(sunLight.intensity, targetSunIntensity, 0.05);
    ambientLight.color.lerp(targetAmbientColor, 0.05);
    sunLight.color.lerp(targetSunColor, 0.05);
    if (scene.fog) scene.fog.color.lerp(targetFogColor, 0.05);

    let newEffect = 'none';
    if (weather.is_raining) newEffect = 'rain';
    else if (weather.is_snowing) newEffect = 'snow';
    if (newEffect !== activeWeatherEffect) {
        activeWeatherEffect = newEffect;
        weatherEffects.rain.visible = (activeWeatherEffect === 'rain');
        weatherEffects.snow.visible = (activeWeatherEffect === 'snow');
    }
    updateWeatherParticles(delta);

    let targetFogDensity = 0.0001;
    if (weather.aqi.category.toLowerCase().includes('unhealthy')) targetFogDensity = 0.0007;
    else if (weather.aqi.category.toLowerCase().includes('moderate')) targetFogDensity = 0.0003;
    if (scene.fog) scene.fog.density = THREE.MathUtils.lerp(scene.fog.density, targetFogDensity, 0.05);
}


// =================================================================
// PHẦN 3: SỰ KIỆN NGÀY BAY ĐẶC BIỆT (LEAFLET.JS)
// =================================================================
let map = null;
let animatedMarker = null;
let animationFrameId = null;
let isFlightInProgress = false;
let isNotificationShown = false;
let isPlanePaused = false;
let flightStartTime = 0;
let timePausedAt = 0;
const FLIGHT_DURATION_MS = 25000;

function setupFlightDayExperience() {
    const flightBtn = document.getElementById('flight-day-btn');
    const flightOverlay = document.getElementById('flight-overlay');
    const flightNotification = document.getElementById('flight-notification');
    const readLetterBtn = document.getElementById('read-flight-letter-btn');
    const letterContainer = document.getElementById('letter-container');
    const musicControls = document.getElementById('waveform-controls');

    flightBtn.classList.remove('hidden');

    const animateMap = (pathPoints) => {
        if (!map || !isFlightInProgress) {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            return;
        }

        if (isPlanePaused) {
            animationFrameId = requestAnimationFrame(() => animateMap(pathPoints));
            return;
        }

        let progress = (Date.now() - flightStartTime) / FLIGHT_DURATION_MS;

        if (progress >= 1.0) {
            progress = 1.0;
            isFlightInProgress = false;
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            setTimeout(() => {
                flightOverlay.classList.remove('visible');
                setTimeout(() => {
                    musicControls?.classList.remove('hidden');
                    flightBtn.style.display = 'block';
                    if (map) { map.remove(); map = null; }
                }, 1500);
            }, 1000);
            return;
        }

        let currentLatLng;
        if (progress < 0.5) {
            const segmentProgress = progress * 2;
            currentLatLng = L.latLng(
                pathPoints[0].lat + (pathPoints[1].lat - pathPoints[0].lat) * segmentProgress,
                pathPoints[0].lng + (pathPoints[1].lng - pathPoints[0].lng) * segmentProgress
            );
        } else {
            const segmentProgress = (progress - 0.5) * 2;
            currentLatLng = L.latLng(
                pathPoints[1].lat + (pathPoints[2].lat - pathPoints[1].lat) * segmentProgress,
                pathPoints[1].lng + (pathPoints[2].lng - pathPoints[1].lng) * segmentProgress
            );
        }
        
        animatedMarker.setLatLng(currentLatLng);
        
        const startZoom = 8;
        const endZoom = 11;
        const currentZoom = startZoom + (endZoom - startZoom) * progress;
        map.setView(currentLatLng, currentZoom, { animate: false });

        if (progress >= 0.5 && !isNotificationShown) {
            isNotificationShown = true;
            flightNotification.classList.remove('hidden');
            isPlanePaused = true;
            timePausedAt = Date.now();
        }
        
        animationFrameId = requestAnimationFrame(() => animateMap(pathPoints));
    };

    const showFlightLetter = () => {
        flightNotification.classList.add('hidden');
        openLetter(flightDayLetter, null, false);
        const closeBtn = letterContainer.querySelector('#close-letter-btn');
        if (closeBtn) {
            closeBtn.onclick = () => {
                letterContainer.classList.add('hidden');
                if (isFlightInProgress) {
                    const pausedDuration = Date.now() - timePausedAt;
                    flightStartTime += pausedDuration;
                    isPlanePaused = false;
                }
            };
        }
    };

    const startFlightSequence = () => {
        if (typeof L === 'undefined' || !airportData || isFlightInProgress) return;

        isFlightInProgress = true;
        isNotificationShown = false;
        isPlanePaused = false;
        timePausedAt = 0;
        flightBtn.style.display = 'none';
        musicControls?.classList.add('hidden');
        flightOverlay.classList.add('visible');

        const originCode = 'HAN', destCode = 'CTU';
        const origin = airportData[originCode], dest = airportData[destCode];

        if (!origin || !dest) { return; }

        if (map) map.remove();
        map = L.map('flight-map').setView(origin.coords, 5);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
        L.circleMarker(origin.coords).addTo(map).bindPopup(`<b>${origin.city} (${originCode})</b>`).openPopup();
        L.circleMarker(dest.coords).addTo(map).bindPopup(`<b>${dest.city} (${destCode})</b>`);

        const latlngs = [
            origin.coords,
            [(origin.coords[0] + dest.coords[0]) / 2 + 1.5, (origin.coords[1] + dest.coords[1]) / 2],
            dest.coords
        ];
        L.polyline(latlngs, {
            color: 'rgba(255, 255, 255, 0.6)', weight: 2, dashArray: '5, 10'
        }).addTo(map);
        
        map.fitBounds(L.polyline(latlngs).getBounds().pad(0.3));
        const pathPoints = latlngs.map(coord => L.latLng(coord[0], coord[1]));
        const planeIcon = L.divIcon({ html: '✈️', className: 'plane-icon', iconSize: [24, 24] });

        setTimeout(() => {
            if (!map) return;
            map.flyTo(origin.coords, 8, { animate: true, duration: 4 });

            setTimeout(() => {
                if (!isFlightInProgress) return;
                
                animatedMarker = L.marker(origin.coords, { icon: planeIcon });
                map.addLayer(animatedMarker);
                
                flightStartTime = Date.now();
                animateMap(pathPoints);

            }, 4000);

        }, 1000);
    };

    flightBtn.addEventListener('click', startFlightSequence);
    readLetterBtn.addEventListener('click', showFlightLetter);
}


// =================================================================
// PHẦN 4: CÁC HÀM TIỆN ÍCH VÀ HIỆU ỨNG NỀN
// =================================================================
let ambientFadeInterval = null;
function controlAmbientSound(shouldPlay) {
    if (ambientFadeInterval) clearInterval(ambientFadeInterval);
    const targetVolume = 0.4;
    if (shouldPlay) {
        ambientAudio.play().catch(e => console.log("Cần tương tác để phát âm thanh nền."));
        ambientFadeInterval = setInterval(() => {
            let newVolume = ambientAudio.volume + 0.05;
            if (newVolume >= targetVolume) { newVolume = targetVolume; clearInterval(ambientFadeInterval); }
            ambientAudio.volume = newVolume;
        }, 50);
    } else {
        ambientFadeInterval = setInterval(() => {
            let newVolume = ambientAudio.volume - 0.05;
            if (newVolume <= 0) { newVolume = 0; clearInterval(ambientFadeInterval); ambientAudio.pause(); }
            ambientAudio.volume = newVolume;
        }, 50);
    }
}


function createPeakRocket() {
    const rocketGroup = new THREE.Group();
    const rocketMat = new THREE.MeshStandardMaterial({ color: 0xbababa, metalness: 0.9, roughness: 0.3 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 10, 16), rocketMat);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.8, 5, 16), rocketMat);
    nose.position.y = 7.5;
    const booster = new THREE.Mesh(new THREE.CylinderGeometry(1, 0.8, 2, 16), rocketMat);
    booster.position.y = -6;
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0); wingShape.lineTo(3, -2); wingShape.lineTo(3, -4); wingShape.lineTo(0, -5);
    const wing = new THREE.Mesh(new THREE.ExtrudeGeometry(wingShape, { depth: 0.2, bevelEnabled: false }), rocketMat);
    wing.position.set(1.2, -2, 0);
    const wing2 = wing.clone(); wing2.rotation.y = Math.PI * 2 / 3;
    const wing3 = wing.clone(); wing3.rotation.y = Math.PI * 4 / 3;
    rocketGroup.add(body, nose, booster, wing, wing2, wing3);
    rocketGroup.rotation.x = Math.PI / 2;
    rocketGroup.scale.setScalar(2.0);
    const trailParticles = [];
    const particleCount = 300;
    const trailGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    trailGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    trailGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const trailMaterial = new THREE.PointsMaterial({ size: 0.8, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const trail = new THREE.Points(trailGeometry, trailMaterial);
    for (let i = 0; i < particleCount; i++) {
        trailParticles.push({
            position: new THREE.Vector3(),
            velocity: new THREE.Vector3(),
            lifetime: 0,
            maxLifetime: Math.random() * 2 + 1
        });
    }
    const spawnRadius = 1300;
    const startX = (Math.random() > 0.5 ? 1 : -1) * spawnRadius;
    const startY = (Math.random() - 0.5) * 500;
    const startZ = (Math.random() - 0.5) * spawnRadius * 2;
    rocketGroup.position.set(startX, startY, startZ);
    rocketGroup.lookAt(0, 0, 0);
    scene.add(rocketGroup, trail);
    const duration = Math.random() * 12 + 8;
    gsap.to(rocketGroup.position, {
        x: -startX, y: -startY, z: -startZ, duration: duration, ease: "power1.in",
        onComplete: () => {
            scene.remove(rocketGroup, trail);
            activePeakRockets = activePeakRockets.filter(r => r.group !== rocketGroup);
        }
    });
    activePeakRockets.push({ group: rocketGroup, trail: trail, particles: trailParticles });
}

function updatePeakRocketTrail(rocket, delta) {
    const positions = rocket.trail.geometry.attributes.position.array;
    const colors = rocket.trail.geometry.attributes.color.array;
    const enginePosition = rocket.group.position.clone().add(new THREE.Vector3(0, -6, 0).applyQuaternion(rocket.group.quaternion));
    rocket.particles.forEach((p, i) => {
        if (p.lifetime <= 0) {
            p.position.copy(enginePosition);
            const spread = 1.5;
            p.velocity.set((Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread, (Math.random() - 0.5) * spread).add(rocket.group.position.clone().sub(p.position).normalize().multiplyScalar(-5));
            p.lifetime = p.maxLifetime;
        }
        p.lifetime -= delta;
        p.position.add(p.velocity.clone().multiplyScalar(delta));
        const lifePercent = p.lifetime / p.maxLifetime;
        const i3 = i * 3;
        positions[i3] = p.position.x;
        positions[i3 + 1] = p.position.y;
        positions[i3 + 2] = p.position.z;
        const color = new THREE.Color();
        if (lifePercent > 0.7) color.setHSL(0.1, 1, 0.5 + (lifePercent - 0.7) * 1.5);
        else color.setHSL(0.05, 1, lifePercent * 0.7);
        colors[i3] = color.r; colors[i3 + 1] = color.g; colors[i3 + 2] = color.b;
    });
    rocket.trail.geometry.attributes.position.needsUpdate = true;
    rocket.trail.geometry.attributes.color.needsUpdate = true;
}

function createFieryAsteroid() {
    const asteroidGroup = new THREE.Group();
    const size = Math.random() * 4 + 2;
    const coreGeometry = new THREE.DodecahedronGeometry(size, 3);
    const uniforms = { uTime: { value: 0.0 } };
    const coreMaterial = new THREE.ShaderMaterial({ uniforms, vertexShader: document.getElementById('vertexShader').textContent, fragmentShader: document.getElementById('fragmentShader').textContent });
    const asteroidCore = new THREE.Mesh(coreGeometry, coreMaterial);
    asteroidGroup.add(asteroidCore);
    const glowTexture = createProceduralTexture((ctx, canvasSize) => {
        const gradient = ctx.createRadialGradient(canvasSize / 2, canvasSize / 2, 0, canvasSize / 2, canvasSize / 2, canvasSize / 2);
        gradient.addColorStop(0, 'rgba(255, 150, 0, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
    });
    const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture, blending: THREE.AdditiveBlending, transparent: true }));
    glowSprite.scale.set(size * 4, size * 4, 1);
    asteroidGroup.add(glowSprite);
    const spawnRadius = 1000;
    const startX = (Math.random() - 0.5) * spawnRadius * 1.5;
    const startY = (Math.random() - 0.5) * 200;
    const startZ = (Math.random() > 0.5 ? 1 : -1) * (spawnRadius * 0.8);
    asteroidGroup.position.set(startX, startY, startZ);
    scene.add(asteroidGroup);
    const duration = Math.random() * 10 + 10;
    gsap.to(asteroidGroup.position, {
        x: -startX, y: -startY * 1.5, z: -startZ,
        duration: duration, ease: "none",
        onComplete: () => {
            scene.remove(asteroidGroup);
            activeAsteroids = activeAsteroids.filter(a => a.group !== asteroidGroup);
        }
    });
    activeAsteroids.push({ group: asteroidGroup, uniforms: uniforms });
}

function createComet() {
    const headGeometry = new THREE.SphereGeometry(2, 32, 32);
    const headMaterial = new THREE.MeshBasicMaterial({ color: 0x87ceeb });
    const cometHead = new THREE.Mesh(headGeometry, headMaterial);
    const particleCount = 1000;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const cometParticleTexture = createProceduralTexture((ctx, size) => {
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0, 'rgba(173, 216, 230, 1)');
        gradient.addColorStop(0.4, 'rgba(135, 206, 250, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 191, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
    });
    const particleMaterial = new THREE.PointsMaterial({ map: cometParticleTexture, size: 2.5, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, sizeAttenuation: true });
    const cometTail = new THREE.Points(particlesGeometry, particleMaterial);
    cometHead.add(cometTail);
    const spawnRadius = 900;
    const startX = (Math.random() > 0.5 ? 1 : -1) * spawnRadius;
    const startY = (Math.random() - 0.5) * 400;
    const startZ = (Math.random() - 0.5) * spawnRadius * 2;
    cometHead.position.set(startX, startY, startZ);
    scene.add(cometHead);
    const duration = Math.random() * 15 + 20;
    gsap.to(cometHead.position, {
        x: -startX, z: -startZ, duration: duration, ease: "power1.in",
        onComplete: () => {
            scene.remove(cometHead);
            activeComets = activeComets.filter(c => c.head !== cometHead);
        }
    });
    activeComets.push({ head: cometHead, tail: cometTail });
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[array[i], array[j]] = [array[j], array[i]]; }
    return array;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';
    document.body.appendChild(star);
    const startX = Math.random() * window.innerWidth * 1.5 - window.innerWidth * 0.25;
    const startY = Math.random() * window.innerHeight * 1.5 - window.innerHeight * 0.25;
    const angle = Math.random() * 360;
    const distance = window.innerWidth * 1.2;
    const endX = startX + Math.cos(angle * Math.PI / 180) * distance;
    const endY = startY + Math.sin(angle * Math.PI / 180) * distance;
    const duration = Math.random() * 3000 + 4000;
    star.style.transform = `translate(${startX}px, ${startY}px) rotate(${angle}deg)`;
    const animation = star.animate(
        [{ transform: `translate(${startX}px, ${startY}px) rotate(${angle}deg)`, opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 0, offset: 0.9 }, { transform: `translate(${endX}px, ${endY}px) rotate(${angle}deg)`, opacity: 0 }],
        { duration: duration, easing: 'linear' }
    );
    const onStarCaught = (e) => {
        e.stopPropagation();
        const messageEl = document.createElement('div');
        messageEl.className = 'star-message';
        messageEl.textContent = getRandomItem(shootingStarMessages);
        messageEl.style.left = `${e.clientX}px`; messageEl.style.top = `${e.clientY}px`;
        document.body.appendChild(messageEl);
        setTimeout(() => messageEl.remove(), 2500);
        animation.cancel(); star.remove();
    };
    star.addEventListener('click', onStarCaught, { once: true });
    animation.onfinish = () => star.remove();
}

function createTextParticle() {
    const isHighEndDevice = !window.matchMedia("(max-width: 768px)").matches;
    const config = { maxParticles: isHighEndDevice ? 70 : 30 };
    if (!galaxy || activeParticles.size >= config.maxParticles) return;
    let messagesToUse = isBirthdayMode ? [...birthdayMessages] : [...messages];
    if (currentWeatherData) {
        if (currentWeatherData.temperature < 10) messagesToUse.push("trời lạnh rồi, mặc ấm nhé");
        if (currentWeatherData.is_raining) messagesToUse.push("trời đang mưa, đừng để bị ướt nha");
        if (currentWeatherData.aqi.category.toLowerCase().includes('unhealthy')) messagesToUse.push("không khí không tốt, nhớ đeo khẩu trang");
    }
    const isHeart = isBirthdayMode ? Math.random() > 0.5 : Math.random() > 0.7;
    const particle = document.createElement('div');
    if (isHeart) { particle.className = 'text-particle heart'; particle.textContent = isBirthdayMode ? getRandomItem(["🎉", "🎂", "💖"]) : getRandomItem(heartSymbols); } 
    else { particle.className = `text-particle ${isBirthdayMode ? 'birthday' : getRandomItem(textStyles)}`; particle.textContent = getRandomItem(messagesToUse); }
    const xPos = Math.random() * 100;
    const zPos = (Math.random() - 0.5) * 500;
    const duration = Math.random() * 2 + 3;
    const size = isHighEndDevice ? 12 : 10;
    const variation = isHighEndDevice ? 6 : 5;
    particle.style.left = `${xPos}%`;
    particle.style.fontSize = `${Math.random() * variation + size}px`;
    galaxy.appendChild(particle);
    activeParticles.add(particle);
    const animation = particle.animate(
        [{ transform: `translate3d(0, ${-150}px, ${zPos}px) translateX(-50%)`, opacity: 0 }, { opacity: 0.9, offset: 0.1 }, { opacity: 0.9, offset: 0.9 }, { transform: `translate3d(0, ${window.innerHeight + 150}px, ${zPos}px) translateX(-50%)`, opacity: 0 }],
        { duration: duration * 1000, easing: 'linear' }
    );
    animation.onfinish = () => { particle.remove(); activeParticles.delete(particle); };
}

function setupGyroControls() {
    if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
        window.addEventListener('deviceorientation', (event) => {
            const { beta, gamma } = event;
            bodyEl.classList.add('gyro-active');
            bodyEl.style.setProperty('--gyro-rotate-x', `${Math.max(-45, Math.min(45, beta)) * -0.3}deg`);
            bodyEl.style.setProperty('--gyro-rotate-y', `${Math.max(-45, Math.min(45, gamma)) * 0.3}deg`);
        });
    }
}

function setupMouseParallax() {
    if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', (event) => {
            const xPercent = (event.clientX / window.innerWidth - 0.5) * 2;
            bodyEl.style.setProperty('--parallax-x-far', `${xPercent * -5}px`);
            bodyEl.style.setProperty('--parallax-x-mid', `${xPercent * -15}px`);
            bodyEl.style.setProperty('--parallax-x-near', `${xPercent * -25}px`);
        });
    }
}

function checkAndPreloadNightlySong() {
    const now = new Date();
    const hour = now.getHours();
    if (!(hour >= 22 || hour < 8)) return;
    let effectiveDate = new Date(now);
    if (hour >= 0 && hour < 8) effectiveDate.setDate(effectiveDate.getDate() - 1);
    const day = effectiveDate.getDate();
    const dailySongData = dailySongs.find(s => s.day === day);
    if (dailySongData) { const preloader = new Audio(); preloader.src = dailySongData.song.file; }
}
// =================================================================
// PHẦN 5: HỆ THỐNG ÂM NHẠC VÀ GIAO DIỆN NGƯỜI DÙNG (UI)
// =================================================================
function savePlaybackState() {
    if (!wavesurfer?.getMediaElement().src) return;
    const state = { isNightly: isNightlyPlaylistActive, playlist: upNextPlaylist, index: upNextIndex, time: wavesurfer.getCurrentTime(), volume: wavesurfer.getVolume() };
    localStorage.setItem('playbackState', JSON.stringify(state));
}

function loadPlaybackState() {
    const savedState = localStorage.getItem('playbackState');
    if (!savedState) return null;
    try { return JSON.parse(savedState); } catch (e) { return null; }
}

function preloadNextTrack() {
    if (preloadedNextAudio) { preloadedNextAudio.src = ''; preloadedNextAudio = null; }
    if (upNextPlaylist.length === 0) return;
    const nextIndex = (upNextIndex + 1) % upNextPlaylist.length;
    const nextTrack = upNextPlaylist[nextIndex];
    if (nextTrack?.file) {
        preloadedNextAudio = new Audio();
        preloadedNextAudio.src = nextTrack.file;
        preloadedNextAudio.preload = 'auto';
    }
}

function typewriterEffect(elementsToType, onComplete = () => { }) {
    if (typingInterval) clearInterval(typingInterval);
    let elementIndex = 0, charIndex = 0;
    const type = () => {
        if (elementIndex >= elementsToType.length) { if (onComplete) onComplete(); return; }
        const currentItem = elementsToType[elementIndex];
        const fullText = currentItem.text;
        if (fullText.charAt(charIndex) === '<') {
            const closingTagIndex = fullText.indexOf('>', charIndex);
            if (closingTagIndex !== -1) { currentItem.element.innerHTML += fullText.substring(charIndex, closingTagIndex + 1); charIndex = closingTagIndex + 1; }
        }
        if (charIndex < fullText.length) {
            currentItem.element.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            let speed = 50;
            if (fullText.charAt(charIndex - 1).match(/[.!?]/)) speed = 500;
            if (fullText.charAt(charIndex - 1) === ',') speed = 250;
            typingInterval = setTimeout(type, speed);
        } else { elementIndex++; charIndex = 0; setTimeout(type, 500); }
    };
    const skipTyping = () => {
        clearTimeout(typingInterval);
        elementsToType.forEach(item => item.element.innerHTML = item.text);
        letterContainer.removeEventListener('click', skipTyping);
        if (onComplete) onComplete();
    };
    letterContainer.addEventListener('click', skipTyping, { once: true });
    elementsToType.forEach(item => item.element.innerHTML = '');
    type();
}

let fadeInterval = null;
function stopFade() { if (fadeInterval) { clearInterval(fadeInterval); fadeInterval = null; } }

function fadeOut(callback) {
    stopFade();
    if (!wavesurfer) { if (callback) callback(); return; }
    const currentVolume = wavesurfer.getVolume();
    if (currentVolume === 0) { wavesurfer.pause(); if (callback) callback(); return; }
    fadeInterval = setInterval(() => {
        let newVolume = wavesurfer.getVolume() - 0.1;
        if (newVolume <= 0) { newVolume = 0; stopFade(); wavesurfer.pause(); if (callback) callback(); }
        wavesurfer.setVolume(newVolume);
    }, 50);
}

function fadeIn() {
    stopFade();
    if (!wavesurfer) return;
    const targetVolume = parseFloat(volumeSlider.value);
    wavesurfer.setVolume(0);
    wavesurfer.play();
    fadeInterval = setInterval(() => {
        let newVolume = wavesurfer.getVolume() + 0.1;
        if (newVolume >= targetVolume) { newVolume = targetVolume; stopFade(); }
        wavesurfer.setVolume(newVolume);
    }, 50);
}

function playTrack(track, playlist, index, startTime = 0) {
    if (!track?.file) { playNext(); return; }
    upNextPlaylist = playlist; upNextIndex = index;
    if (!wavesurfer) {
        wavesurfer = WaveSurfer.create({ container: waveformContainer, waveColor: 'rgba(200, 200, 200, 0.5)', progressColor: 'var(--theme-color-primary)', height: 50, barWidth: 2, barRadius: 3, cursorWidth: 0, responsive: true, hideScrollbar: true, media: audio, backend: 'MediaElement' });
        wavesurfer.on('finish', playNext);
        wavesurfer.on('audioprocess', () => currentTimeEl.textContent = formatTime(wavesurfer.getCurrentTime()));
        wavesurfer.on('error', (err) => { songTitleEl.textContent = "Bài hát lỗi, tự chuyển..."; setTimeout(playNext, 2000); });
        wavesurfer.on('play', () => { playPauseBtn.textContent = '❚❚'; controlAmbientSound(false); });
        wavesurfer.on('pause', () => { playPauseBtn.textContent = '▶'; controlAmbientSound(true); });
    }
    stopFade();
    wavesurfer.pause();
    songTitleEl.textContent = "Đang tải bài hát...";
    controlAmbientSound(true);
    wavesurfer.load(track.file);
    updateFavoriteButton(track.file);
    wavesurfer.once('ready', () => {
        songTitleEl.textContent = track.title;
        durationEl.textContent = formatTime(wavesurfer.getDuration());
        if (startTime > 0 && startTime < wavesurfer.getDuration()) wavesurfer.seekTo(startTime / wavesurfer.getDuration());
        fadeIn();
        preloadNextTrack();
    });
}

function playNext() {
    if (upNextPlaylist.length === 0) return;
    const nextIndex = (upNextIndex + 1) % upNextPlaylist.length;
    playTrack(upNextPlaylist[nextIndex], upNextPlaylist, nextIndex);
}

function playPrev() {
    if (upNextPlaylist.length === 0) return;
    const prevIndex = (upNextIndex - 1 + upNextPlaylist.length) % upNextPlaylist.length;
    playTrack(upNextPlaylist[prevIndex], upNextPlaylist, prevIndex);
}

function createDailyMix() {
    if (!mainPlaylist?.length) return;
    upNextPlaylist = shuffleArray([...mainPlaylist]);
    upNextIndex = 0;
}

function getFavorites() { return JSON.parse(localStorage.getItem('favoriteSongs')) || []; }
function saveFavorites(favorites) { localStorage.setItem('favoriteSongs', JSON.stringify(favorites)); }

function updateFavoriteButton(file) {
    const favorites = getFavorites();
    favoriteBtn.classList.toggle('favorited', favorites.includes(new URL(file).href));
}

function runBirthdayCheck() {
    if (!birthdayData) return false;
    const now = new Date();
    isBirthdayMode = (now.getDate() === birthdayData.day && now.getMonth() + 1 === birthdayData.month);
    return isBirthdayMode;
}

function activateBirthdayMode() {
    const btn = document.getElementById('special-day-btn');
    btn.classList.remove('hidden');
    const celebrationOverlay = document.getElementById('birthday-celebration');
    setTimeout(() => { celebrationOverlay.style.display = 'flex'; celebrationOverlay.style.opacity = '1'; }, 1000);
    setTimeout(() => { celebrationOverlay.style.opacity = '0'; setTimeout(() => celebrationOverlay.style.display = 'none', 1000); }, 5000);
    btn.addEventListener('click', () => openLetter(birthdayData.letter, birthdayData.song, true));
}

function getLetterForCurrentTime() {
    if (!dailyLetters || !dailySongs || !daytimeLetters) return null;
    const now = new Date();
    const hour = now.getHours();
    let effectiveDate = new Date(now);
    if (hour >= 0 && hour < 8) effectiveDate.setDate(effectiveDate.getDate() - 1);
    const day = effectiveDate.getDate();
    if (hour >= 8 && hour < 22) {
        const daytimeLetterData = daytimeLetters.find(l => l.day === day);
        return daytimeLetterData ? { letter: daytimeLetterData, song: null } : null;
    }
    const dailyLetterData = dailyLetters.find(l => l.day === day);
    const dailySongData = dailySongs.find(s => s.day === day);
    return (dailyLetterData && dailySongData) ? { letter: dailyLetterData, song: dailySongData.song } : null;
}

function checkAndSetupLetterButton() {
    const btn = document.getElementById('special-day-btn');
    const letterInfo = getLetterForCurrentTime();
    if (letterInfo) { btn.classList.remove('hidden'); btn.onclick = () => openLetter(letterInfo.letter, letterInfo.song); }
}

function openLetter(letterData, specialSong = null, isBirthday = false) {
    if (!letterContainer?.classList.contains('hidden')) return;
    const letterContentDiv = letterContainer.querySelector('.letter-content');
    letterContentDiv.innerHTML = '';
    const titleEl = document.createElement('h1');
    const signatureEl = document.createElement('p');
    signatureEl.className = 'signature';
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-letter-btn'; closeBtn.innerHTML = '×';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = letterData.content;
    const pElements = Array.from(tempDiv.querySelectorAll('p'));
    letterContentDiv.append(closeBtn, titleEl, ...pElements, signatureEl);
    const signatureText = isBirthday ? 'Yêu cậu nhất luôn,<br>tun' : (specialSong ? 'Yêu cậu rất nhiều,<br>tun' : 'Luôn bên cạnh cậu,<br>tun');
    const elementsToType = [{ element: titleEl, text: letterData.title }, ...pElements.map(p => ({ element: p, text: p.innerHTML })), { element: signatureEl, text: signatureText }];
    letterContainer.classList.remove('hidden');
    typewriterEffect(elementsToType);
    if (specialSong && !isNightlyPlaylistActive && !isBirthday) {
        mainPlaylistState.index = upNextIndex; mainPlaylistState.time = wavesurfer.getCurrentTime();
        isNightlyPlaylistActive = true;
        const allNightlySongs = dailySongs.map(item => item.song);
        const remainingNightlySongs = allNightlySongs.filter(song => song.file !== specialSong.file);
        const shuffledNightlySongs = shuffleArray(remainingNightlySongs);
        const fullNightlyPlaylist = [specialSong, ...shuffledNightlySongs];
        fadeOut(() => { playTrack(fullNightlyPlaylist[0], fullNightlyPlaylist, 0); });
    } else if (specialSong && isBirthday) { fadeOut(() => playTrack(specialSong, [specialSong], 0)); }
    closeBtn.addEventListener('click', () => { letterContainer.classList.add('hidden'); if (typingInterval) clearTimeout(typingInterval); }, { once: true });
}

function adjustLetterButtonPosition() {
    const btn = document.getElementById('special-day-btn');
    if (btn && waveformControls && !waveformControls.classList.contains('hidden')) btn.style.bottom = `${waveformControls.offsetHeight + 35}px`;
}

function setupUIEventListeners() {
    const startAudio = () => {
        if (!saveStateInterval) saveStateInterval = setInterval(savePlaybackState, 5000);
        const savedState = loadPlaybackState();
        let shouldResumeNightly = false;
        if (savedState) { const letterInfo = getLetterForCurrentTime(); if (savedState.isNightly && letterInfo?.song) shouldResumeNightly = true; }
        if (shouldResumeNightly) {
            isNightlyPlaylistActive = true;
            playTrack(savedState.playlist[savedState.index], savedState.playlist, savedState.index, savedState.time);
        } else {
            isNightlyPlaylistActive = false; createDailyMix();
            let index = 0, time = 0;
            if (savedState && !savedState.isNightly && savedState.playlist[savedState.index]) {
                const foundIndex = upNextPlaylist.findIndex(t => t.file === savedState.playlist[savedState.index].file);
                if (foundIndex !== -1) { index = foundIndex; time = savedState.time; }
            }
            playTrack(upNextPlaylist[index], upNextPlaylist, index, time);
        }
        if (savedState?.volume) { wavesurfer.setVolume(savedState.volume); volumeSlider.value = savedState.volume; }
        overlay.classList.add('hidden-overlay');
        waveformControls.classList.remove('hidden');
        settingsToggleBtn.classList.remove('hidden');
        weatherWidgetContainer.classList.remove('hidden');
    };

    overlay.addEventListener('click', startAudio, { once: true });

    closeInfoBtn.addEventListener('click', resetCameraToDefault);
    nextBtn.addEventListener('click', playNext);
    prevBtn.addEventListener('click', playPrev);
    playPauseBtn.addEventListener('click', () => wavesurfer?.playPause());
    favoriteBtn.addEventListener('click', () => {
        if (!wavesurfer?.getMediaElement().src) return;
        let favorites = getFavorites();
        const currentUrl = new URL(wavesurfer.getMediaElement().src).href;
        if (favorites.includes(currentUrl)) favorites = favorites.filter(song => song !== currentUrl);
        else favorites.push(currentUrl);
        saveFavorites(favorites);
        updateFavoriteButton(currentUrl);
    });
    settingsToggleBtn.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
    volumeSlider.addEventListener('input', e => wavesurfer?.setVolume(e.target.value));
}

// =================================================================
// PHẦN 6: THẾ GIỚI 3D (THREE.JS)
// =================================================================
function setupLoadingManager() {
    loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal;
        progressBar.style.width = `${progress * 100}%`;
        progressText.textContent = `${Math.round(progress * 100)}%`;
    };
    loadingManager.onLoad = () => { setTimeout(() => loadingScreen.classList.add('loaded'), 500); };
}

async function createSpaceship() {
    const loader = new GLTFLoader();
    
    // Sử dụng Promise để xử lý việc tải bất đồng bộ
    const gltf = await loader.loadAsync('models/uss_enterprise.glb'); // <<<--- Đảm bảo đường dẫn chính xác

    const spaceshipModel = gltf.scene; 
    const engineParts = []; // Mảng để lưu trữ tất cả các bộ phận phát sáng của động cơ

    spaceshipModel.traverse(function (child) {
        if (child.isMesh) {
            child.material.metalness = 0.8;
            child.material.roughness = 0.4;

            // Nếu một bộ phận có vật liệu phát sáng, chúng ta coi nó là một phần của động cơ
            if (child.material.emissive && child.material.emissive.getHex() > 0) {
                engineParts.push(child); // Thêm nó vào danh sách động cơ
                // Tăng cường độ sáng mặc định để nó nổi bật hơn
                child.material.emissiveIntensity = 5.0; 
            }
        }
    });

    const spaceshipPivot = new THREE.Object3D();
    spaceshipPivot.add(spaceshipModel);

    // Lưu lại MẢNG các bộ phận động cơ vào userData
    spaceshipPivot.userData.engineParts = engineParts;

    // <<<--- THAY ĐỔI QUAN TRỌNG: Thu nhỏ phi thuyền lại rất nhiều ---
    spaceshipPivot.scale.setScalar(0.01); // Thử giá trị này, bạn có thể chỉnh thành 0.005 nếu vẫn còn to
    
    spaceshipPivot.position.set(0, 0, 350);
    
    return spaceshipPivot;
}

function createStarfield() {
    const starCount = 10000;
    const positions = [], colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < starCount; i++) {
        const vertex = new THREE.Vector3((Math.random() * 2 - 1), (Math.random() * 2 - 1), (Math.random() * 2 - 1)).normalize().multiplyScalar(Math.random() * 500 + 1500);
        positions.push(vertex.x, vertex.y, vertex.z);
        color.setHSL(Math.random() * 0.1 + 0.5, 0.8, Math.random() * 0.5 + 0.5);
        colors.push(color.r, color.g, color.b);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({ size: 1.5, vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, sizeAttenuation: true });
    starfield = new THREE.Points(geometry, material);
    scene.add(starfield);
}

function createSolarSystem(textureLoader) {
    celestialData.forEach(data => {
        const pivot = new THREE.Object3D();
        scene.add(pivot);
        const geometry = new THREE.SphereGeometry(data.size, 64, 64);
        let material;
        if (data.type === 'star') {
            const uniforms = { uTime: { value: 0.0 }, uTexture: { value: textureLoader.load(data.texture) } };
            material = new THREE.ShaderMaterial({ uniforms, vertexShader: document.getElementById('vertexShader').textContent, fragmentShader: document.getElementById('sunFragmentShader').textContent });
            sunEffects.uniforms = uniforms;
        } else material = new THREE.MeshStandardMaterial({ map: textureLoader.load(data.texture), roughness: 0.9, metalness: 0.1 });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = data.orbitRadius;
        mesh.userData = { ...data, isClickable: true };
        pivot.add(mesh);
        if (data.id === 'sun') createSunEffects(mesh);
        celestialObjects.push({ mesh, pivot, orbitSpeed: data.orbitSpeed, spinSpeed: data.spinSpeed, userData: data });
    });
}

function createSunEffects(sunMesh) {
    const sunCoronaTexture = createProceduralTexture((ctx, size) => {
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0.2, 'rgba(255, 215, 0, 0.5)'); gradient.addColorStop(0.5, 'rgba(255, 140, 0, 0.1)'); gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, size, size);
    });
    const coronaMaterial = new THREE.SpriteMaterial({ map: sunCoronaTexture, blending: THREE.AdditiveBlending, transparent: true, opacity: 0.8 });
    const corona = new THREE.Sprite(coronaMaterial);
    const sunSize = sunMesh.geometry.parameters.radius;
    corona.scale.set(sunSize * 4, sunSize * 4, 1);
    sunMesh.add(corona);
    sunEffects.corona = corona;
}

function createProceduralSaturnRing() {
    const particleCount = 20000;
    const positions = [], colors = [], customData = [];
    const innerRadius = 40, outerRadius = 65, thickness = 2;
    const colorInside = new THREE.Color("#A19A87"), colorMiddle = new THREE.Color("#8C826B"), colorOutside = new THREE.Color("#B5AF9D");
    for (let i = 0; i < particleCount; i++) {
        const radius = THREE.MathUtils.randFloat(innerRadius, outerRadius);
        const angle = Math.random() * Math.PI * 2;
        const x = Math.cos(angle) * radius, z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * thickness * (1 - (radius - innerRadius) / (outerRadius - innerRadius));
        positions.push(x, y, z);
        const speed = (Math.random() * 0.1 + 0.05) / radius * 100;
        customData.push(radius, speed, angle, 0);
        const percent = (radius - innerRadius) / (outerRadius - innerRadius);
        let color = percent < 0.3 ? colorInside : (percent < 0.8 ? colorMiddle.clone().lerp(colorInside, (percent - 0.3) / 0.5) : colorOutside);
        colors.push(color.r, color.g, color.b);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('customData', new THREE.Float32BufferAttribute(customData, 4));
    const material = new THREE.ShaderMaterial({
        uniforms: { uTime: { value: 0.0 } },
        vertexShader: ` uniform float uTime; attribute vec4 customData; attribute vec3 color; varying vec3 vColor;
            void main() { vColor = color; vec3 pos = position; float radius = customData.x; float speed = customData.y; float startAngle = customData.z;
                float newAngle = startAngle + (uTime * speed * 0.1); pos.x = radius * cos(newAngle); pos.z = radius * sin(newAngle);
                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0); gl_PointSize = 0.15 * (300.0 / -mvPosition.z); gl_Position = projectionMatrix * mvPosition;
            }`,
        fragmentShader: ` varying vec3 vColor; void main() { gl_FragColor = vec4(vColor, 0.5); }`,
        blending: THREE.AdditiveBlending, transparent: true, depthWrite: false,
    });
    saturnRing = new THREE.Points(geometry, material);
    const saturnObject = celestialObjects.find(obj => obj.userData.id === 'saturn');
    if (saturnObject) saturnObject.mesh.add(saturnRing);
}

function createAsteroidBelt(radius, width, count) {
    const belt = new THREE.Group();
    const geometry = new THREE.DodecahedronGeometry(0.5, 0);
    const material = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 1 });
    for (let i = 0; i < count; i++) {
        const rock = new THREE.Mesh(geometry, material);
        const orbitRadius = radius + (Math.random() - 0.5) * width;
        const orbitAngle = Math.random() * Math.PI * 2;
        const orbitSpeed = (Math.random() * 0.2 + 0.05) * (Math.random() > 0.5 ? 1 : -1);
        const y = (Math.random() - 0.5) * 5;
        rock.userData = { orbitRadius, orbitAngle, orbitSpeed };
        rock.position.set(orbitRadius * Math.cos(orbitAngle), y, orbitRadius * Math.sin(orbitAngle));
        rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
        rock.scale.setScalar(Math.random() * 0.5 + 0.5);
        belt.add(rock);
    }
    scene.add(belt);
    asteroidBelt = belt;
    return asteroidBelt;
}

function createBackgroundNebulae() {
    for (let i = 0; i < 5; i++) {
        const nebulaTexture = createProceduralTexture((ctx, size) => {
            const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
            gradient.addColorStop(0.2, `rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 100) + 50}, 0.1)`);
            gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = gradient; ctx.fillRect(0, 0, size, size);
        }, 512);
        const material = new THREE.SpriteMaterial({ map: nebulaTexture, blending: THREE.AdditiveBlending, transparent: true, opacity: Math.random() * 0.1 + 0.05 });
        const nebula = new THREE.Sprite(material);
        nebula.position.set((Math.random() - 0.5) * 2500, (Math.random() - 0.5) * 500, (Math.random() - 0.5) * 2500);
        const scale = Math.random() * 500 + 400;
        nebula.scale.set(scale, scale, 1);
        scene.add(nebula);
    }
}

function createExploringSatellite() {
    const satelliteGroup = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.9, roughness: 0.1 });
    const panelMat = new THREE.MeshStandardMaterial({ color: 0x003366, metalness: 0.5, emissive: 0x001133 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 2), bodyMat);
    satelliteGroup.add(body);
    const panel1 = new THREE.Mesh(new THREE.PlaneGeometry(5, 2), panelMat);
    panel1.position.x = 3;
    const panel2 = panel1.clone(); panel2.position.x = -3;
    satelliteGroup.add(panel1, panel2);
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3), bodyMat);
    antenna.position.z = 2.5;
    satelliteGroup.add(antenna);
    satelliteGroup.scale.setScalar(2.5);
    const spawnRadius = 1200;
    const startPosition = new THREE.Vector3((Math.random() - 0.5) * spawnRadius * 2, (Math.random() - 0.5) * 400, (Math.random() > 0.5 ? 1 : -1) * spawnRadius);
    satelliteGroup.position.copy(startPosition);
    const targetPlanet = getRandomItem(celestialObjects.filter(obj => obj.userData.type === 'planet'));
    if (!targetPlanet) return;
    const targetPosition = new THREE.Vector3();
    targetPlanet.mesh.getWorldPosition(targetPosition);
    targetPosition.x += (Math.random() - 0.5) * 100;
    targetPosition.y += (Math.random() - 0.5) * 50;
    satelliteGroup.lookAt(targetPosition);
    scene.add(satelliteGroup);
    const duration = Math.random() * 20 + 25;
    gsap.to(satelliteGroup.position, {
        x: targetPosition.x, y: targetPosition.y, z: targetPosition.z,
        duration: duration, ease: "none",
        onComplete: () => {
            scene.remove(satelliteGroup);
            activeSatellites = activeSatellites.filter(s => s !== satelliteGroup);
        }
    });
    activeSatellites.push(satelliteGroup);
}

function animateCamera(targetPosition, targetLookAt, duration = 1.5, onComplete = null) {
    if (isAnimatingCamera) return;
    isAnimatingCamera = true; controls.enabled = false;
    const cameraProxy = { posX: camera.position.x, posY: camera.position.y, posZ: camera.position.z, targetX: controls.target.x, targetY: controls.target.y, targetZ: controls.target.z };
    gsap.to(cameraProxy, {
        duration, ease: "power3.inOut",
        posX: targetPosition.x, posY: targetPosition.y, posZ: targetPosition.z,
        targetX: targetLookAt.x, targetY: targetLookAt.y, targetZ: targetLookAt.z,
        onUpdate: () => {
            camera.position.set(cameraProxy.posX, cameraProxy.posY, cameraProxy.posZ);
            controls.target.set(cameraProxy.targetX, cameraProxy.targetY, cameraProxy.targetZ);
            controls.update();
        },
        onComplete: () => { isAnimatingCamera = false; controls.enabled = true; if (onComplete) onComplete(); }
    });
}

function resetCameraToDefault() {
    // Ngăn chặn nếu camera đang di chuyển hoặc không có đối tượng nào được theo dõi
    if (isAnimatingCamera || !followedObject) return;

    // Tắt các trạng thái đặc biệt
    isAutoRotating = false; 
    infoCard.classList.add('hidden'); 
    
    // Đánh dấu rằng không còn theo dõi đối tượng nào nữa
    followedObject = null;

    // Gọi hàm animateCamera để quay về vị trí đã lưu trong preFocusCameraState
    animateCamera(preFocusCameraState.position, preFocusCameraState.target, 2.0, () => {
        // Khôi phục lại các cài đặt camera mặc định sau khi quay về
        controls.minDistance = 20; 
        controls.maxDistance = 1200; 
        controls.enablePan = true;
        // Đảm bảo target của controls cũng được cập nhật chính xác
        controls.target.copy(preFocusCameraState.target);
    });
}

function setupCameraLight() {
    // Tạo một đèn SpotLight giống như đèn pha
    const cameraLight = new THREE.SpotLight(
        0xffffff, // Màu trắng
        0.8,      // Cường độ vừa phải, không quá gắt
        600,      // Khoảng cách chiếu sáng
        Math.PI / 8, // Góc chiếu (hình nón)
        0.5       // Độ mờ của biên đèn
    );
    
    // Gắn đèn vào làm "con" của camera. Đèn sẽ luôn đi theo camera.
    camera.add(cameraLight);
    
    // Đặt đèn vào cùng vị trí với camera bên trong hệ tọa độ của camera
    cameraLight.position.set(0, 0, 0);
    
    // Đảm bảo đèn cũng được thêm vào scene cùng với camera
    scene.add(camera); 
}

function showPlanetInfo(clickedMesh) {
    if (isAnimatingCamera || !clickedMesh?.userData) return;

    isAutoRotating = false;
    const data = clickedMesh.userData;
    const cameraScript = data.camera;
    if (!cameraScript) {
        console.error("Hành tinh này thiếu kịch bản camera!");
        return;
    }
    followedObject = clickedMesh;
    controls.enablePan = false;

    // <<<--- QUAN TRỌNG: LƯU LẠI TRẠNG THÁI CAMERA HIỆN TẠI ---
    preFocusCameraState.position.copy(camera.position);
    preFocusCameraState.target.copy(controls.target);
    // <<<----------------------------------------------------

    const planetPosition = new THREE.Vector3();
    clickedMesh.getWorldPosition(planetPosition);
    const cameraTargetPosition = planetPosition.clone().add(cameraScript.offset);
    const lookAtTargetPosition = planetPosition.clone().add(cameraScript.lookAtOffset);

    cinematicOrbitSpeed = cameraScript.orbitSpeed;

    animateCamera(cameraTargetPosition, lookAtTargetPosition, 2.0, () => {
        controls.minDistance = 0;
        controls.maxDistance = 10000;
        
        const startAngleVec = new THREE.Vector3().subVectors(camera.position, lookAtTargetPosition);
        autoRotateAngle = Math.atan2(startAngleVec.z, startAngleVec.x);
        isAutoRotating = true;
    });

    infoCardTitle.textContent = data.name || 'Unknown';
    infoCardFact.textContent = data.fact || '';
    infoCardMessage.textContent = data.message || '';
    infoCard.classList.remove('hidden');
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}

function createMemoryStars() {
    const starGeometry = new THREE.SphereGeometry(15, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({
        color: 0xffe48a,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false
    });

    memoriesData.forEach(memory => {
        const star = new THREE.Mesh(starGeometry, starMaterial.clone());
        star.userData = { isMemoryButton: true, memoryData: memory };
        star.visible = false;
        
        let targetObject = null;
        if (memory.journeySegment === 0) {
            targetObject = celestialObjects.find(obj => obj.userData.id === 'earth');
        } else if (memory.journeySegment === 1) {
            targetObject = celestialObjects.find(obj => obj.userData.id === 'saturn');
        }

        if (targetObject) {
            // <<<--- SỬA LỖI QUAN TRỌNG NHẤT ---
            // 1. Lấy bán kính của hành tinh từ dữ liệu
            const planetRadius = targetObject.userData.size;
            
            // 2. Gắn ngôi sao làm "con" trực tiếp của khối MESH hành tinh
            targetObject.mesh.add(star);
            
            // 3. Đặt vị trí của ngôi sao ngay phía trên "Bắc Cực" của hành tinh
            // Vị trí này là tương đối so với tâm của hành tinh
            star.position.set(0, planetRadius + 40, 0); 
        } else {
            // Với các trạm dừng không có hành tinh, đặt nó trực tiếp vào không gian
            star.position.set(-600, 100, -600);
            scene.add(star);
        }
        
        memoryStars[memory.journeySegment] = star;
    });
}

function onClick(event) {
    const userLetterContainer = document.getElementById('user-letter-container');

    // Ngăn chặn tất cả các click nếu có bất kỳ lớp phủ nào đang mở
    if (!overlay.classList.contains('hidden-overlay') || 
        !letterContainer.classList.contains('hidden') || 
        (userLetterContainer && !userLetterContainer.classList.contains('hidden')) || 
        isAnimatingCamera) {
        return;
    }

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    // Xác định các đối tượng có thể click
    const clickableStars = isJourneyPaused ? Object.values(memoryStars) : [];
    const clickablePlanets = !isJourneyActive ? celestialObjects.map(obj => obj.mesh).filter(mesh => mesh.userData?.isClickable) : [];
    
    const clickableObjects = [...clickableStars, ...clickablePlanets];

    const intersects = raycaster.intersectObjects(clickableObjects, false);

    if (intersects.length > 0) {
        const clickedObject = intersects[0].object;

        if (clickedObject.userData.isMemoryButton) {
            // Chỉ xử lý click vào ngôi sao khi chuyến đi đang tạm dừng
            if (isJourneyPaused) {
                showMemory(clickedObject.userData.memoryData);
            }
        } 
        else if (clickedObject.userData.isClickable) {
            // Chỉ xử lý click vào hành tinh khi chuyến đi KHÔNG hoạt động
            if (!isJourneyActive && infoCard.classList.contains('hidden')) {
                showPlanetInfo(clickedObject);
            }
        }
    }
}

// =======================================================
// PHẦN 7: LOGIC HÀNH TRÌNH ĐIỆN ẢNH
// =======================================================

function createJourneyPathVisualizer(startVec, endVec) {
    clearJourneyPathVisuals();
    journeyPathVisuals.forEach(visual => scene.remove(visual));
    journeyPathVisuals.length = 0;

    const curve = new THREE.CatmullRomCurve3([startVec, endVec]);
    const points = curve.getPoints(100);
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    
    const material = new THREE.LineBasicMaterial({
        color: 0x4ecdc4,
        linewidth: 2,
        transparent: true,
        opacity: 0.5
    });

    const curveObject = new THREE.Line(geometry, material);
    scene.add(curveObject);
    journeyPathVisuals.push(curveObject);

    gsap.to(material, { opacity: 0, duration: 5, delay: 5, onComplete: () => scene.remove(curveObject) });
}

function clearJourneyPathVisuals() {
    journeyPathVisuals.forEach(visual => scene.remove(visual));
    journeyPathVisuals.length = 0;
}
function updateSpaceshipEffects() {
    if (!spaceship) return;

    // Áp dụng hiệu ứng cho động cơ khi đang bay
    if (isJourneyActive && !isJourneyPaused) {
        // 1. Kiểm tra xem mảng engineParts có tồn tại và có phần tử không
        if (spaceship.userData.engineParts && spaceship.userData.engineParts.length > 0) {
            const pulse = Math.sin(clock.getElapsedTime() * 8) * 0.5 + 0.5; // Dao động 0-1
            
            // 2. Lặp qua TẤT CẢ các bộ phận động cơ đã tìm thấy và áp dụng hiệu ứng
            spaceship.userData.engineParts.forEach(part => {
                part.material.emissiveIntensity = 5.0 + pulse * 4.0; // Tăng cường độ sáng theo nhịp
            });
        }
    }

    // Hiệu ứng bay lơ lửng tại chỗ khi đang tạm dừng
    if (isJourneyPaused) {
        spaceship.position.y += Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
    }
}

function startNextJourneySegment(segmentIndex) {
    if (segmentIndex >= memoriesData.length) {
        endJourney();
        return;
    }

    currentJourneySegment = segmentIndex;
    isJourneyPaused = false;
    Object.values(memoryStars).forEach(star => star.visible = false);

    const memory = memoriesData[segmentIndex];
    let targetObject = null;
    let fallbackPosition = null;

    if (memory.journeySegment === 0) {
        targetObject = celestialObjects.find(obj => obj.userData.id === 'earth');
    } else if (memory.journeySegment === 1) {
        targetObject = celestialObjects.find(obj => obj.userData.id === 'saturn');
    } else {
        fallbackPosition = new THREE.Vector3(-600, 100, -600);
    }
    
    const startPosition = spaceship.position.clone();
    const tweenProxy = { progress: 0 };

    gsap.to(tweenProxy, {
        progress: 1,
        duration: 20,
        ease: "power1.inOut",
        onUpdate: () => {
            // --- CẬP NHẬT VỊ TRÍ (Không thay đổi) ---
            const currentTargetPosition = new THREE.Vector3();
            if (targetObject) {
                targetObject.mesh.getWorldPosition(currentTargetPosition);
            } else {
                currentTargetPosition.copy(fallbackPosition);
            }
            spaceship.position.lerpVectors(startPosition, currentTargetPosition, tweenProxy.progress);
            
            // --- LOGIC XOAY TÀU HOÀN TOÀN MỚI ---
            // 1. Vector chỉ hướng từ tàu đến mục tiêu
            const direction = new THREE.Vector3().subVectors(currentTargetPosition, spaceship.position).normalize();

            // 2. Vector "phía trước" mặc định của mô hình. Dựa trên hình ảnh, đó là trục +X.
            const modelForward = new THREE.Vector3(1, 0, 0); 
            
            // 3. Tính toán phép quay (quaternion) cần thiết để hướng "phía trước" của mô hình
            // thẳng theo vector chỉ hướng.
            const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(modelForward, direction);

            // 4. Dùng slerp để xoay phi thuyền một cách mượt mà về phía hướng quay mục tiêu.
            // Con số 0.1 là tốc độ xoay, giúp nó có cảm giác tự nhiên.
            spaceship.quaternion.slerp(targetQuaternion, 0.1);
        },
        onComplete: () => {
            isJourneyPaused = true;
            showMemoryStar(segmentIndex);
        }
    });
}

function startJourney() {
    isJourneyActive = true;
    controls.enabled = false;
    
    document.getElementById('start-journey-btn').classList.add('hidden');
    document.getElementById('open-letter-form-btn').classList.add('hidden');
    
    spaceship.position.set(150, 50, 300); // Vị trí xuất phát

    // <<<--- THÊM MỚI: Xoay tàu đúng hướng ngay từ đầu ---
    // Tìm vị trí của Trái Đất (điểm đến đầu tiên)
    const firstTargetObject = celestialObjects.find(obj => obj.userData.id === 'earth');
    if (firstTargetObject) {
        const firstTargetPosition = new THREE.Vector3();
        firstTargetObject.mesh.getWorldPosition(firstTargetPosition);
        spaceship.lookAt(firstTargetPosition); // Xoay tàu nhìn vào đó ngay lập tức
    }
    // <<<----------------------------------------------
    
    // Bắt đầu chặng đầu tiên
    startNextJourneySegment(0);
}

function endJourney() {
    isJourneyActive = false;
    controls.enabled = true;
    isJourneyPaused = false;
    
    document.getElementById('start-journey-btn').classList.remove('hidden');
    document.getElementById('open-letter-form-btn').classList.remove('hidden');
    
    gsap.to(spaceship.position, { x: 0, y: 0, z: 350, duration: 5, ease: "power2.out" });
    clearJourneyPathVisuals();
}

function showMemoryStar(segmentIndex) {
    const star = memoryStars[segmentIndex];
    if (star) {
        star.visible = true;
        star.scale.set(0, 0, 0);
        gsap.to(star.scale, { x: 1, y: 1, z: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" });
    }
}

function showMemory(memory) {
    if (!letterContainer?.classList.contains('hidden')) return;

    const letterContentDiv = letterContainer.querySelector('.letter-content');
    letterContentDiv.innerHTML = ''; 

    const titleEl = document.createElement('h1');
    titleEl.textContent = memory.title;
    const imageEl = document.createElement('img');
    imageEl.src = memory.image;
    imageEl.className = 'memory-image';
    const contentEl = document.createElement('p');
    contentEl.textContent = memory.content;
    const continueBtn = document.createElement('button');
    continueBtn.textContent = 'Tiếp tục hành trình';
    continueBtn.className = 'continue-journey-btn';

    letterContentDiv.append(titleEl, imageEl, contentEl, continueBtn);
    letterContainer.classList.remove('hidden');

    continueBtn.addEventListener('click', () => {
        letterContainer.classList.add('hidden');
        startNextJourneySegment(currentJourneySegment + 1);
    }, { once: true });
}

function setupJourneyButton() {
    const btn = document.getElementById('start-journey-btn');
    if (btn) btn.addEventListener('click', startJourney);
}
function setupUserLetterForm() {
    const openBtn = document.getElementById('open-letter-form-btn');
    const closeBtn = document.getElementById('close-user-letter-btn');
    const sendBtn = document.getElementById('send-user-letter-btn');
    const container = document.getElementById('user-letter-container');
    const textarea = document.getElementById('user-letter-textarea');

    if (!openBtn || !container || !sendBtn || !textarea) return;

    openBtn.addEventListener('click', () => {
        container.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        container.classList.add('hidden');
    });

    sendBtn.addEventListener('click', async () => {
        const letterContent = textarea.value.trim();
        if (letterContent === '') {
            alert('Cậu chưa viết gì cả!');
            return;
        }

        sendBtn.disabled = true;
        sendBtn.textContent = 'Đang gửi...';

        const webhookUrl = 'https://hook.us2.make.com/njm3r71sllwmkeiutvjjg3js5kzs9li2'; 

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ letter: letterContent }), 
            });

            if (response.ok) {
                textarea.value = '';
                alert('Tớ đã nhận được lời nhắn của cậu rồi! Cảm ơn cậu nhiều <3');
                container.classList.add('hidden');
            } else {
                throw new Error('Có lỗi xảy ra khi gửi.');
            }
        } catch (error) {
            alert('Gửi không thành công. Cậu thử lại sau nhé.');
            console.error('Error sending letter:', error);
        } finally {
            sendBtn.disabled = false;
            sendBtn.textContent = 'Gửi đi 💖';
        }
    });
}

// =======================================================
// PHẦN 8: VÒNG LẶP CHÍNH VÀ KHỞI TẠO
// =======================================================
function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    const delta = clock.getDelta();

    if (currentWeatherData) updateUniverseAmbiance(currentWeatherData, delta);

    celestialObjects.forEach(obj => {
        if (obj.pivot) obj.pivot.rotation.y += (obj.orbitSpeed || 0) * 0.3 * delta;
        obj.mesh.rotation.y += (obj.spinSpeed || 0) * delta;
    });
    
    if (saturnRing) saturnRing.material.uniforms.uTime.value = elapsedTime;
    if (asteroidBelt) asteroidBelt.children.forEach(rock => {
        rock.userData.orbitAngle += rock.userData.orbitSpeed * delta;
        rock.position.x = rock.userData.orbitRadius * Math.cos(rock.userData.orbitAngle);
        rock.position.z = rock.userData.orbitRadius * Math.sin(rock.userData.orbitAngle);
        rock.rotation.y += 0.5 * delta;
    });

    if (isAutoRotating && followedObject) {
        const planetData = followedObject.userData;
        const lookAtOffset = planetData.camera.lookAtOffset;
        const planetPosition = new THREE.Vector3();
        followedObject.getWorldPosition(planetPosition);
        const lookAtTargetPosition = planetPosition.clone().add(lookAtOffset);
        const distance = camera.position.distanceTo(lookAtTargetPosition);
        autoRotateAngle += cinematicOrbitSpeed; 
        const newX = lookAtTargetPosition.x + distance * Math.cos(autoRotateAngle);
        const newZ = lookAtTargetPosition.z + distance * Math.sin(autoRotateAngle);
        const relativeCamY = camera.position.y - lookAtTargetPosition.y;
        camera.position.x = newX;
        camera.position.z = newZ;
        camera.position.y = lookAtTargetPosition.y + relativeCamY;
        camera.lookAt(lookAtTargetPosition);
        controls.target.copy(lookAtTargetPosition);
    }

    if (isJourneyActive && spaceship) {
        const cameraOffset = new THREE.Vector3(0, 50, 150); 
        cameraOffset.applyQuaternion(spaceship.quaternion);
        const targetCameraPosition = spaceship.position.clone().add(cameraOffset);
        camera.position.lerp(targetCameraPosition, 0.05);
        camera.lookAt(spaceship.position);
    }
    
    updateSpaceshipEffects();

    if (sunEffects.uniforms) sunEffects.uniforms.uTime.value = elapsedTime;
    activeAsteroids.forEach(a => { if (a.uniforms) a.uniforms.uTime.value = elapsedTime; a.group.rotation.y += 0.005 * delta * 60; a.group.rotation.x += 0.002 * delta * 60; });
    activeComets.forEach(c => {
        const particles = c.tail.geometry.attributes.position.array;
        for (let i = 0; i < particles.length; i += 3) {
            particles[i + 2] -= Math.random() * 0.5;
            if (particles[i + 2] < -50) { particles[i] = (Math.random() - 0.5) * 2; particles[i + 1] = (Math.random() - 0.5) * 2; particles[i + 2] = Math.random() * 5; }
        }
        c.tail.geometry.attributes.position.needsUpdate = true;
    });
    activePeakRockets.forEach(rocket => updatePeakRocketTrail(rocket, delta));
    if (starfield) starfield.rotation.y -= 0.00005;
    
    const sunObj = celestialObjects.find(obj => obj.userData.id === 'sun');
    if (sunLight && sunObj) sunLight.position.copy(sunObj.mesh.position);
    
    if (!isJourneyActive && !isAnimatingCamera && controls.enabled) {
        controls.update();
    }
    
    composer.render();
}

async function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 4000);
    camera.position.set(0, 150, 400);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // <<<--- NÂNG CẤP HỆ THỐNG ÁNH SÁNG ---
    // 1. Tăng cường Ánh sáng Môi trường (Ambient Light)
    // Ánh sáng này đảm bảo không có phần nào của tàu bị tối đen hoàn toàn.
    ambientLight = new THREE.AmbientLight(0xffffff, 1.2); 
    scene.add(ambientLight);

    // 2. Tăng cường Ánh sáng Mặt Trời (Point Light)
    // Ánh sáng này tạo ra các vùng sáng và bóng đổ chính.
    sunLight = new THREE.PointLight(0xffffff, 2.0, 4000); 
    scene.add(sunLight);
    
    // 3. Thêm một đèn Hemisphere Light
    // Đèn này giả lập ánh sáng phản chiếu từ vũ trụ, làm cho tàu có chiều sâu hơn.
    const hemisphereLight = new THREE.HemisphereLight(0x6080ff, 0x303050, 1.0);
    scene.add(hemisphereLight);
    // <<<-------------------------------------

    scene.fog = new THREE.FogExp2(0x050a15, 0.0001);

    spaceship = await createSpaceship();
    scene.add(spaceship);
    
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.05;
    controls.minDistance = 20; controls.maxDistance = 1200;
    
    setupLoadingManager();
    textureLoader = new THREE.TextureLoader(loadingManager);
    
    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0; bloomPass.strength = 0.6; bloomPass.radius = 0.5;
    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    controls.addEventListener('start', () => { isAutoRotating = false; });
    createStarfield();
    createSolarSystem(textureLoader);
    createMemoryStars();
    createRainEffect();
    createSnowEffect();
    createBackgroundNebulae();
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onClick);
    animate();
}

let lastParticleTime = 0;
function mainLoop(timestamp) {
    const isHighEndDevice = !window.matchMedia("(max-width: 768px)").matches;
    const config = { particleInterval: isHighEndDevice ? 150 : 300 };
    if (timestamp - lastParticleTime > config.particleInterval) createTextParticle();
    lastParticleTime = timestamp;
    requestAnimationFrame(mainLoop);
}

async function init() {
    try {
        const visitWebhookUrl = 'https://hook.us2.make.com/2vdmmjj1e6rfsguawjb3hjv3nkxfs1ho'; 
        fetch(visitWebhookUrl, { method: 'POST' });
    } catch (e) {
        console.error("Could not send visit notification:", e);
    }
    
    const isHighEndDevice = !window.matchMedia("(max-width: 768px)").matches;
    const config = { shootingStarInterval: isHighEndDevice ? 800 : 1500, asteroidInterval: isHighEndDevice ? 7000 : 12000, cometInterval: isHighEndDevice ? 15000 : 25000 };

    currentWeatherData = await getWeatherData();
    updateWeatherUI(currentWeatherData);
    if (currentWeatherData) {
        const initialHour = new Date(currentWeatherData.localtime).getHours();
        let initialTimeState = 'day';
        if (initialHour >= 5 && initialHour < 10) initialTimeState = 'dawn';
        else if (initialHour >= 17 && initialHour < 21) initialTimeState = 'dusk';
        else if (initialHour >= 21 || initialHour < 5) initialTimeState = 'night';
        timeOfDayState = initialTimeState;
        updateUIAmbiance(timeOfDayState);
    }
    setInterval(async () => {
        currentWeatherData = await getWeatherData();
        updateWeatherUI(currentWeatherData);
    }, 900000);

    runBirthdayCheck();
    setupUIEventListeners();
    await initThreeJS();
    
    // <<<--- KHÔI PHỤC LẠI CÁC HÀM BỊ MẤT ---
    createProceduralSaturnRing();
    createAsteroidBelt(375, 50, 2000);
    // <<<-------------------------------------

    checkAndPreloadNightlySong();
    setInterval(checkAndPreloadNightlySong, 60000);
    setTimeout(() => setInterval(createShootingStar, config.shootingStarInterval), 3000);
    setTimeout(() => { createFieryAsteroid(); setInterval(createFieryAsteroid, config.asteroidInterval); }, 8000);
    setTimeout(() => setInterval(createComet, config.cometInterval), 10000);
    setupGyroControls();
    setupMouseParallax();
    requestAnimationFrame(mainLoop);
    const today = new Date();
    const flightDate = 13; 
    const flightMonth = 9;
    const flightYear = 2025;

    if (today.getDate() === flightDate && today.getMonth() + 1 === flightMonth && today.getFullYear() === flightYear) {
        setTimeout(setupFlightDayExperience, 2000);
    }

    if (isBirthdayMode) {
        activateBirthdayMode();
    } else {
        checkAndSetupLetterButton();
    }

    setTimeout(() => setInterval(createPeakRocket, 9000), 15000);
    setTimeout(() => setInterval(createExploringSatellite, 12000), 5000);
    
    window.addEventListener('beforeunload', savePlaybackState);
    
    setupUserLetterForm();
    setupJourneyButton();
}

init();
