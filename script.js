// =======================================================
// IMPORT CÁC MODULE - PHIÊN BẢN HOÀN CHỈNH
// =======================================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

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
    assetPaths
} from './data.js';

// =================================================================
// PHẦN 1: KHAI BÁO BIẾN VÀ DOM ELEMENTS
// =================================================================
const bodyEl = document.body;
const flyModeBtn = document.getElementById('fly-mode-btn');
const ambientAudio = document.getElementById('ambient-sound');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
let composer;
let isFlyMode = false;
const keyState = {};
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

let preloadedNightlySong = { url: null, audio: null };
const HOME_CAMERA_POSITION = new THREE.Vector3(0, 150, 450); // Hơi xa hơn một chút
const HOME_CONTROLS_TARGET = new THREE.Vector3(0, 0, 0);   //Luôn nhìn vào mặt trời
let activeSatellites = [];
let activePeakRockets = [];
let isAutoRotating = false;
let autoRotateAngle = 0;
const cameraSettings = {
    autoRotateSpeed: 0.002,
    verticalArcAmount: 1.5,
    lookAtHeightOffset: 0.15
};
let spaceship;
const  flyModeOverlay = document.getElementById('fly-mode-overlay');
const flyModeStatus = document.getElementById('fly-mode-status');
const thrustSpeed = 20000.0;
const strafeSpeed = 18000.0;
const mouseSensitivity = 0.002;

const heartSymbols = ["♥", "💖", "💕", "🌟", "✨"];
const textStyles = ['love', 'date', 'special'];
const activeParticles = new Set();
let upNextPlaylist = [];
let upNextIndex = 0;
let isBirthdayMode = false;
let isLetterModeActive = false;
let typingInterval = null;
let wavesurfer;
let scene, camera, renderer, controls;
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
let isPreloadingNextSong = false;
let cameraViewMode = 'thirdPerson';
let cameraOrbitYaw = 0;
let cameraOrbitPitch = 0.2;
const cameraOrbitDistance = 80;
let saturnRing;
let asteroidBelt;

// =================================================================
// PHẦN 3: CÁC HÀM TIỆN ÍCH VÀ HIỆU ỨNG
// =================================================================
let ambientFadeInterval = null;
function controlAmbientSound(shouldPlay) {
    if (ambientFadeInterval) clearInterval(ambientFadeInterval);
    const targetVolume = 0.4;

    if (shouldPlay) {
        ambientAudio.play().catch(e => console.log("Cần tương tác để phát âm thanh nền."));
        ambientFadeInterval = setInterval(() => {
            let newVolume = ambientAudio.volume + 0.05;
            if (newVolume >= targetVolume) {
                newVolume = targetVolume;
                clearInterval(ambientFadeInterval);
            }
            ambientAudio.volume = newVolume;
        }, 50);
    } else {
        ambientFadeInterval = setInterval(() => {
            let newVolume = ambientAudio.volume - 0.05;
            if (newVolume <= 0) {
                newVolume = 0;
                clearInterval(ambientFadeInterval);
                ambientAudio.pause();
            }
            ambientAudio.volume = newVolume;
        }, 50);
    }
}

function createProceduralTexture(gradientCallback, size = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    gradientCallback(context, size);
    return new THREE.CanvasTexture(canvas);
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
            p.velocity.set(
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread,
                (Math.random() - 0.5) * spread
            ).add(rocket.group.position.clone().sub(p.position).normalize().multiplyScalar(-5));
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
        if (lifePercent > 0.7) {
            color.setHSL(0.1, 1, 0.5 + (lifePercent - 0.7) * 1.5);
        } else {
            color.setHSL(0.05, 1, lifePercent * 0.7);
        }
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
    });
    rocket.trail.geometry.attributes.position.needsUpdate = true;
    rocket.trail.geometry.attributes.color.needsUpdate = true;
}

function createFieryAsteroid() {
    const asteroidGroup = new THREE.Group();
    const size = Math.random() * 4 + 2;
    const coreGeometry = new THREE.DodecahedronGeometry(size, 3);
    const uniforms = { uTime: { value: 0.0 } };
    const coreMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent,
    });
    const asteroidCore = new THREE.Mesh(coreGeometry, coreMaterial);
    asteroidGroup.add(asteroidCore);
    const glowTexture = createProceduralTexture((ctx, canvasSize) => {
        const gradient = ctx.createRadialGradient(canvasSize / 2, canvasSize / 2, 0, canvasSize / 2, canvasSize / 2, canvasSize / 2);
        gradient.addColorStop(0, 'rgba(255, 150, 0, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
    });
    const glowSprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: glowTexture,
        blending: THREE.AdditiveBlending,
        transparent: true
    }));
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
    const particleMaterial = new THREE.PointsMaterial({
        map: cometParticleTexture, size: 2.5, blending: THREE.AdditiveBlending,
        transparent: true, depthWrite: false, sizeAttenuation: true
    });
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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
    const messagesToUse = isBirthdayMode ? birthdayMessages : messages;
    const isHeart = isBirthdayMode ? Math.random() > 0.5 : Math.random() > 0.7;
    const particle = document.createElement('div');
    if (isHeart) {
        particle.className = 'text-particle heart';
        particle.textContent = isBirthdayMode ? getRandomItem(["🎉", "🎂", "💖"]) : getRandomItem(heartSymbols);
    } else {
        particle.className = `text-particle ${isBirthdayMode ? 'birthday' : getRandomItem(textStyles)}`;
        particle.textContent = getRandomItem(messagesToUse);
    }
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
    if (now.getHours() < 22) return;
    const dailySongData = dailySongs.find(s => s.day === now.getDate());
    if (dailySongData && dailySongData.song.file !== preloadedNightlySong.url) {
        const audioPreloader = new Audio();
        audioPreloader.src = dailySongData.song.file;
        audioPreloader.preload = 'auto';
        preloadedNightlySong = { url: dailySongData.song.file, audio: audioPreloader };
    }
}

// =================================================================
// PHẦN 4: LOGIC GIAO DIỆN NGƯỜI DÙNG (UI)
// =================================================================
function typewriterEffect(elementsToType, onComplete = () => { }) {
    if (typingInterval) clearInterval(typingInterval);
    let elementIndex = 0; let charIndex = 0;
    const type = () => {
        if (elementIndex >= elementsToType.length) { if (onComplete) onComplete(); return; }
        const currentItem = elementsToType[elementIndex];
        const fullText = currentItem.text;
        if (fullText.charAt(charIndex) === '<') {
            const closingTagIndex = fullText.indexOf('>', charIndex);
            if (closingTagIndex !== -1) {
                currentItem.element.innerHTML += fullText.substring(charIndex, closingTagIndex + 1);
                charIndex = closingTagIndex + 1;
            }
        }
        if (charIndex < fullText.length) {
            currentItem.element.innerHTML += fullText.charAt(charIndex);
            charIndex++;
            let speed = 50;
            if (fullText.charAt(charIndex - 1).match(/[.!?]/)) speed = 500;
            if (fullText.charAt(charIndex - 1) === ',') speed = 250;
            typingInterval = setTimeout(type, speed);
        } else {
            elementIndex++; charIndex = 0;
            setTimeout(type, 500);
        }
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
        if (newVolume <= 0) {
            newVolume = 0; stopFade(); wavesurfer.pause(); if (callback) callback();
        }
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

function playTrack(track, isSpecialLetterTrack = false) {
    isPreloadingNextSong = false;
    if (!track || !track.file) { playNextInMix(); return; }
    if (!wavesurfer) {
        wavesurfer = WaveSurfer.create({
            container: waveformContainer, waveColor: 'rgba(200, 200, 200, 0.5)', progressColor: '#ff6b9d',
            height: 50, barWidth: 2, barRadius: 3, cursorWidth: 0, responsive: true, hideScrollbar: true, media: audio, backend: 'MediaElement'
        });
        wavesurfer.on('finish', () => {
            isLetterModeActive = false;
            if (isBirthdayMode && birthdayData) { playTrack(birthdayData.song); } else { playNextInMix(); }
        });
        wavesurfer.on('audioprocess', () => {
            const currentTime = wavesurfer.getCurrentTime();
            const duration = wavesurfer.getDuration();
            currentTimeEl.textContent = formatTime(currentTime);
            if (duration > 20 && (duration - currentTime) < 20 && !isPreloadingNextSong) {
                isPreloadingNextSong = true;
                const nextTrackIndex = upNextIndex % upNextPlaylist.length;
                const nextTrack = upNextPlaylist[nextTrackIndex];
                if (nextTrack && nextTrack.file) {
                    const preloader = new Audio();
                    preloader.src = nextTrack.file;
                }
            }
        });
        wavesurfer.on('error', (err) => { songTitleEl.textContent = "Bài hát lỗi, tự chuyển bài..."; controlAmbientSound(false); setTimeout(playNextInMix, 2000); });
        wavesurfer.on('play', () => { playPauseBtn.textContent = '❚❚'; controlAmbientSound(false); });
        wavesurfer.on('pause', () => { playPauseBtn.textContent = '▶'; controlAmbientSound(true); });
    }
    stopFade(); wavesurfer.pause();
    songTitleEl.textContent = "Đang tải bài hát...";
    controlAmbientSound(true);
    currentTimeEl.textContent = "0:00"; durationEl.textContent = "0:00";
    wavesurfer.load(track.file);
    updateFavoriteButton(track.file);
    wavesurfer.once('ready', () => {
        songTitleEl.textContent = track.title;
        durationEl.textContent = formatTime(wavesurfer.getDuration());
        if (isSpecialLetterTrack) { fadeIn(); } else { wavesurfer.play(); }
    });
}

function createDailyMix() {
    if (!mainPlaylist || mainPlaylist.length === 0) return;
    upNextPlaylist = shuffleArray([...mainPlaylist]);
    upNextIndex = 0;
}

function playNextInMix() {
    if (upNextPlaylist.length === 0) createDailyMix();
    if (upNextPlaylist.length > 0) {
        playTrack(upNextPlaylist[upNextIndex]);
        upNextIndex = (upNextIndex + 1) % upNextPlaylist.length;
    }
}

function playPrevInMix() {
    if (upNextPlaylist.length === 0) return;
    upNextIndex = (upNextIndex - 2 + upNextPlaylist.length) % upNextPlaylist.length;
    playTrack(upNextPlaylist[upNextIndex]);
    upNextIndex = (upNextIndex + 1) % upNextPlaylist.length;
}

function fadeToSpecialTrack(specialSong) { isLetterModeActive = true; fadeOut(() => playTrack(specialSong, true)); }
function getFavorites() { return JSON.parse(localStorage.getItem('favoriteSongs')) || []; }
function saveFavorites(favorites) { localStorage.setItem('favoriteSongs', JSON.stringify(favorites)); }

function updateFavoriteButton(file) {
    const favorites = getFavorites();
    favoriteBtn.classList.toggle('favorited', favorites.includes(file));
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
    const day = now.getDate();
    if (hour >= 0 && hour < 22) {
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
    if (letterInfo) {
        btn.classList.remove('hidden');
        btn.onclick = () => openLetter(letterInfo.letter, letterInfo.song);
    }
}

function openLetter(letterData, specialSong = null, isBirthday = false) {
    if (!letterContainer || !letterContainer.classList.contains('hidden')) return;
    const letterContentDiv = letterContainer.querySelector('.letter-content');
    letterContentDiv.innerHTML = '';
    const titleEl = document.createElement('h1');
    const signatureEl = document.createElement('p');
    signatureEl.className = 'signature';
    const closeBtn = document.createElement('button');
    closeBtn.id = 'close-letter-btn';
    closeBtn.innerHTML = '×';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = letterData.content;
    const pElements = Array.from(tempDiv.querySelectorAll('p'));
    letterContentDiv.append(closeBtn, titleEl, ...pElements, signatureEl);
    const signatureText = isBirthday ? 'Yêu cậu nhất luôn,<br>tun' : (specialSong ? 'Yêu cậu rất nhiều,<br>tun' : 'Luôn bên cạnh cậu,<br>tun');
    const elementsToType = [{ element: titleEl, text: letterData.title }, ...pElements.map(p => ({ element: p, text: p.innerHTML })), { element: signatureEl, text: signatureText }];
    letterContainer.classList.remove('hidden');
    typewriterEffect(elementsToType);
    if (specialSong && !isBirthday) fadeToSpecialTrack(specialSong);
    closeBtn.addEventListener('click', () => {
        letterContainer.classList.add('hidden');
        if (typingInterval) clearTimeout(typingInterval);
        if (isLetterModeActive) { isLetterModeActive = false; fadeOut(playNextInMix); }
    }, { once: true });
}

function adjustLetterButtonPosition() {
    const btn = document.getElementById('special-day-btn');
    if (btn && waveformControls && !waveformControls.classList.contains('hidden')) {
        btn.style.bottom = `${waveformControls.offsetHeight + 35}px`;
    }
}

function setupUIEventListeners() {
    const startAudio = () => {
        if (wavesurfer && wavesurfer.isPlaying()) return;
        if (!wavesurfer) {
            if (isBirthdayMode && birthdayData) { playTrack(birthdayData.song); } else { createDailyMix(); playNextInMix(); }
        } else { wavesurfer.play(); }
        overlay.classList.add('hidden-overlay');
        waveformControls.classList.remove('hidden');
        settingsToggleBtn.classList.remove('hidden');
        flyModeBtn.classList.remove('hidden');
        adjustLetterButtonPosition();
    };
    overlay.addEventListener('click', (event) => {
        event.stopPropagation();
        startAudio();
    }, { once: true });
    closeInfoBtn.addEventListener('click', resetCameraToDefault);
    nextBtn.addEventListener('click', playNextInMix);
    prevBtn.addEventListener('click', playPrevInMix);
    playPauseBtn.addEventListener('click', () => wavesurfer?.playPause());
    favoriteBtn.addEventListener('click', () => {
        if (!wavesurfer || !wavesurfer.getMediaElement().src) return;
        let favorites = getFavorites();
        const currentUrl = wavesurfer.getMediaElement().src;
        if (favorites.includes(currentUrl)) {
            favorites = favorites.filter(song => song !== currentUrl);
        } else {
            favorites.push(currentUrl);
        }
        saveFavorites(favorites);
        updateFavoriteButton(currentUrl);
    });
    settingsToggleBtn.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
    volumeSlider.addEventListener('input', e => wavesurfer?.setVolume(e.target.value));
}

// =================================================================
// PHẦN 5: THẾ GIỚI 3D (THREE.JS)
// =================================================================
function setupLoadingManager() {
    loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
        const progress = itemsLoaded / itemsTotal;
        progressBar.style.width = `${progress * 100}%`;
        progressText.textContent = `${Math.round(progress * 100)}%`;
    };
    loadingManager.onLoad = () => {
        setTimeout(() => loadingScreen.classList.add('loaded'), 500);
    };
}

function setupFlyControls() {
    function onMouseMove(event) {
        if (!isFlyMode) return;

        const movementX = event.movementX || 0;
        const movementY = event.movementY || 0;

        if (cameraViewMode === 'thirdPerson') {
            cameraOrbitYaw -= movementX * mouseSensitivity;
            cameraOrbitPitch -= movementY * mouseSensitivity;
            cameraOrbitPitch = Math.max(-Math.PI / 4, Math.min(Math.PI / 2, cameraOrbitPitch));
        } else {
            const euler = new THREE.Euler(0, 0, 0, 'YXZ');
            euler.setFromQuaternion(camera.quaternion);
            euler.y -= movementX * mouseSensitivity;
            euler.x -= movementY * mouseSensitivity;
            const pi_2 = Math.PI / 2;
            euler.x = Math.max(-pi_2, Math.min(pi_2, euler.x));
            camera.quaternion.setFromEuler(euler);
        }
    }
    
    function showFlyModeNotification(message, duration = 1500) {
        flyModeStatus.textContent = message;
        flyModeOverlay.classList.remove('hidden');
        setTimeout(() => {
            flyModeOverlay.classList.add('hidden');
        }, duration);
    }

    function enterFlyMode() {
        document.body.requestPointerLock();
    }

    function exitFlyMode() {
        if (document.pointerLockElement) {
            document.exitPointerLock();
        }
    }

    function activateFlyMode() {
        isFlyMode = true;
        controls.enabled = false;
        flyModeBtn.classList.add('fly-mode-active');
        flyModeBtn.innerHTML = '🚀<span>Thoát (F)</span>'; 
        showFlyModeNotification('Đã bật chế độ bay');
    }

    function deactivateFlyMode() {
        isFlyMode = false;
        controls.enabled = true;
        flyModeBtn.classList.remove('fly-mode-active');
        flyModeBtn.innerHTML = '🚀'; 
        showFlyModeNotification('Đã tắt chế độ bay');
    }
    
    window.addEventListener('keydown', (e) => {
        keyState[e.code] = true;
        if (e.code === 'KeyF') {
            e.preventDefault();
            if (!isFlyMode) enterFlyMode();
            else exitFlyMode();
        }
        if (e.code === 'Escape' && isFlyMode) {
            exitFlyMode();
        }
         if (e.code === 'KeyC' && isFlyMode) {
            cameraViewMode = (cameraViewMode === 'thirdPerson') ? 'firstPerson' : 'thirdPerson';
        }
    });

    window.addEventListener('keyup', (e) => {
        keyState[e.code] = false;
    });

    flyModeBtn.addEventListener('click', () => {
        if (!isFlyMode) enterFlyMode();
        else exitFlyMode();
    });

    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement === document.body) {
            activateFlyMode();
        } else {
            deactivateFlyMode();
        }
    });

    document.addEventListener('mousemove', onMouseMove);
}

function updateFlyModeLogic(delta) {
    if (!isFlyMode || !spaceship) return;

    if (cameraViewMode === 'thirdPerson') {
        const cameraOffset = new THREE.Vector3();
        cameraOffset.x = cameraOrbitDistance * Math.sin(cameraOrbitYaw) * Math.cos(cameraOrbitPitch);
        cameraOffset.y = cameraOrbitDistance * Math.sin(cameraOrbitPitch);
        cameraOffset.z = cameraOrbitDistance * Math.cos(cameraOrbitYaw) * Math.cos(cameraOrbitPitch);
        const targetPosition = spaceship.position.clone().add(cameraOffset);
        camera.position.lerp(targetPosition, 0.15);

        const lookAtPosition = spaceship.position.clone().add(new THREE.Vector3(0, 3, 0));
        camera.lookAt(lookAtPosition);

        const movementDirection = new THREE.Vector3();
        let isMoving = false;
        const cameraForward = new THREE.Vector3();
        camera.getWorldDirection(cameraForward);
        cameraForward.y = 0;
        cameraForward.normalize();
        const cameraRight = new THREE.Vector3().crossVectors(camera.up, cameraForward).negate();
        
        if (keyState['KeyW']) { movementDirection.add(cameraForward); isMoving = true; }
        if (keyState['KeyS']) { movementDirection.sub(cameraForward); isMoving = true; }
        if (keyState['KeyA']) { movementDirection.sub(cameraRight); isMoving = true; }
        if (keyState['KeyD']) { movementDirection.add(cameraRight); isMoving = true; }
        if (keyState['Space']) { spaceship.position.y += strafeSpeed * delta * 0.5; }
        if (keyState['ShiftLeft'] || keyState['ShiftRight']) { spaceship.position.y -= strafeSpeed * delta * 0.5; }

        if (isMoving) {
            movementDirection.normalize();
            spaceship.position.addScaledVector(movementDirection, thrustSpeed * delta);
            const targetQuaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), movementDirection);
            spaceship.quaternion.slerp(targetQuaternion, 0.1);
        }

    } else {
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);

        const movement = new THREE.Vector3();
        if (keyState['KeyW']) movement.add(forward);
        if (keyState['KeyS']) movement.sub(forward);
        if (keyState['KeyA']) movement.sub(right);
        if (keyState['KeyD']) movement.add(right);
        
        if (movement.length() > 0) {
            movement.normalize();
        }

        camera.position.addScaledVector(movement, thrustSpeed * delta);
        
        const verticalSpeed = strafeSpeed * delta * 0.5;
        if (keyState['Space']) camera.position.y += verticalSpeed;
        if (keyState['ShiftLeft'] || keyState['ShiftRight']) camera.position.y -= verticalSpeed;

        spaceship.quaternion.copy(camera.quaternion);
        
        const cockpitOffset = new THREE.Vector3(0, 1.5, 3.5);
        const shipCenterOffset = cockpitOffset.clone().negate().applyQuaternion(camera.quaternion);
        spaceship.position.copy(camera.position).add(shipCenterOffset);
    }
}

function createSpaceship() {
    // TẠO HÀM HELPER ĐỂ TẠO ĐỘNG CƠ
    function createNacelle(materials) {
        const nacelleGroup = new THREE.Group();
        const nacelleBodyGeom = new THREE.CapsuleGeometry(1, 15, 16, 32);
        const nacelleBody = new THREE.Mesh(nacelleBodyGeom, materials.hull);
        nacelleBody.rotation.z = Math.PI / 2;
        nacelleGroup.add(nacelleBody);

        const warpGlowGeom = new THREE.BoxGeometry(10, 1, 0.5);
        const warpGlow = new THREE.Mesh(warpGlowGeom, materials.warp);
        warpGlow.position.x = 1;
        nacelleBody.add(warpGlow);

        const bussardGeom = new THREE.SphereGeometry(1.05, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
        const bussardCollector = new THREE.Mesh(bussardGeom, materials.bussard);
        bussardCollector.position.x = 7.5;
        bussardCollector.rotation.z = -Math.PI / 2;
        nacelleBody.add(bussardCollector);
        return nacelleGroup;
    }

    const spaceshipGroup = new THREE.Group();
    // Gom các material lại để dễ truyền vào hàm con
    const materials = {
        hull: new THREE.MeshStandardMaterial({ color: 0xe0e0e0, metalness: 0.9, roughness: 0.4 }),
        accent: new THREE.MeshStandardMaterial({ color: 0x404040, metalness: 0.95, roughness: 0.5 }),
        warp: new THREE.MeshStandardMaterial({ color: 0x00ffff, emissive: 0x33ffff, emissiveIntensity: 3.0, toneMapped: false }),
        bussard: new THREE.MeshStandardMaterial({ color: 0xff6020, emissive: 0xff6020, emissiveIntensity: 3.5, toneMapped: false })
    };

    const saucerGeom = new THREE.CylinderGeometry(10, 10, 1.2, 64);
    const saucer = new THREE.Mesh(saucerGeom, materials.hull);
    saucer.scale.y = 1.5;
    spaceshipGroup.add(saucer);

    const bridgeGeom = new THREE.CylinderGeometry(2, 2.5, 0.8, 32);
    const bridge = new THREE.Mesh(bridgeGeom, materials.hull);
    bridge.position.y = 1;
    saucer.add(bridge);

    const neckGeom = new THREE.CylinderGeometry(1.5, 1, 6, 32);
    const neck = new THREE.Mesh(neckGeom, materials.accent);
    neck.position.set(0, -2, -3);
    neck.rotation.x = -Math.PI / 6;
    spaceshipGroup.add(neck);

    const secondaryHullGeom = new THREE.CapsuleGeometry(2.2, 12, 32, 64);
    const secondaryHull = new THREE.Mesh(secondaryHullGeom, materials.hull);
    secondaryHull.rotation.z = Math.PI / 2;
    secondaryHull.position.set(0, -7, 0);
    spaceshipGroup.add(secondaryHull);

    const pylonGeom = new THREE.BoxGeometry(0.4, 6, 1.5);
    const pylonRight = new THREE.Mesh(pylonGeom, materials.accent);
    pylonRight.position.set(0, -5, 4);
    pylonRight.rotation.x = Math.PI / 8;
    pylonRight.rotation.z = -Math.PI / 5;
    spaceshipGroup.add(pylonRight);

    const pylonLeft = pylonRight.clone();
    pylonLeft.position.z = -4;
    pylonLeft.rotation.z *= -1;
    spaceshipGroup.add(pylonLeft);

    // GỌI HÀM createNacelle() HAI LẦN
    const nacelleRight = createNacelle(materials);
    nacelleRight.position.set(0, -2, 8);
    spaceshipGroup.add(nacelleRight);
    
    const nacelleLeft = createNacelle(materials);
    nacelleLeft.position.set(0, -2, -8); // Chỉ cần set vị trí khác
    spaceshipGroup.add(nacelleLeft);
    
    spaceshipGroup.userData.nacelleLeft = nacelleLeft;
    spaceshipGroup.userData.nacelleRight = nacelleRight;

    spaceshipGroup.scale.setScalar(5);
    spaceshipGroup.position.set(0, 0, 350);
    spaceshipGroup.rotation.y = -Math.PI/2;

    return spaceshipGroup;
}

function createWarpTrail() {
    const particleCount = 250;
    const trailMaterial = new THREE.PointsMaterial({
        color: 0x00ffff,
        size: 0.5,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: true
    });

    ['Left', 'Right'].forEach(side => {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const lifetimes = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            lifetimes[i] = 0;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const trail = new THREE.Points(geometry, trailMaterial);
        trail.userData = { lifetimes, velocities };
        trail.visible = false;
        
        // Gắn trail vào đúng động cơ tương ứng
        const nacelle = spaceship.userData[`nacelle${side}`];
        if (nacelle) {
            nacelle.add(trail); // Gắn vào động cơ
            spaceship.userData[`trail${side}`] = trail;
        }
    });
}

function updateWarpTrail(delta) {
    const isMovingForward = keyState['KeyW'];

    ['Left', 'Right'].forEach(side => {
        const trail = spaceship.userData[`trail${side}`];
        if (!trail) return;

        trail.visible = isMovingForward;
        if (!isMovingForward) return;

        const positions = trail.geometry.attributes.position.array;
        const { lifetimes, velocities } = trail.userData;
        const emissionPoint = new THREE.Vector3(-8, 0, 0); // Vị trí phát hạt phía sau động cơ
        
        for (let i = 0; i < lifetimes.length; i++) {
            lifetimes[i] -= delta;

            if (lifetimes[i] <= 0) {
                // Tái sinh hạt
                positions[i * 3] = emissionPoint.x + (Math.random() - 0.5) * 0.5;
                positions[i * 3 + 1] = emissionPoint.y + (Math.random() - 0.5) * 0.5;
                positions[i * 3 + 2] = emissionPoint.z + (Math.random() - 0.5) * 0.5;
                
                velocities[i * 3] = -20 - Math.random() * 10; // Tốc độ bắn ra sau
                velocities[i * 3 + 1] = 0;
                velocities[i * 3 + 2] = 0;
                
                lifetimes[i] = Math.random() * 2 + 1; // Tuổi thọ
            }

            // Cập nhật vị trí
            positions[i * 3] += velocities[i * 3] * delta;
            positions[i * 3 + 1] += velocities[i * 3 + 1] * delta;
            positions[i * 3 + 2] += velocities[i * 3 + 2] * delta;
        }
        trail.geometry.attributes.position.needsUpdate = true;
    });
}

function createStarfield() {
    const starCount = 10000;
    const positions = []; const colors = [];
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
            const uniforms = { 
                uTime: { value: 0.0 },
                // Thêm texture vào shader
                uTexture: { value: textureLoader.load(data.texture) }
            };
            material = new THREE.ShaderMaterial({
                uniforms: uniforms,
                vertexShader: document.getElementById('vertexShader').textContent,
                // Chúng ta sẽ cần một fragment shader mới cho mặt trời
                fragmentShader: document.getElementById('sunFragmentShader').textContent,
            });
            // Lưu lại uniform để có thể cập nhật trong vòng lặp animate
            sunEffects.uniforms = uniforms;
        } else {
            material = new THREE.MeshStandardMaterial({ map: textureLoader.load(data.texture), roughness: 0.9, metalness: 0.1 });
        }
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = data.orbitRadius;
        mesh.userData = { ...data, isClickable: true };
        pivot.add(mesh);
        if (data.id === 'sun') createSunEffects(mesh);
        celestialObjects.push({
            mesh: mesh,
            pivot: pivot,
            orbitSpeed: data.orbitSpeed,
            spinSpeed: data.spinSpeed,
            userData: data
        });
        if (data.moons) {
            data.moons.forEach(moonData => {
                const moonPivot = new THREE.Object3D();
                mesh.add(moonPivot);
                const moonGeometry = new THREE.SphereGeometry(moonData.size, 32, 32);
                const moonMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load(moonData.texture), roughness: 0.9 });
                const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
                moonMesh.position.x = moonData.orbitRadius;
                moonMesh.userData = { ...moonData, isClickable: false };
                moonPivot.add(moonMesh);
                celestialObjects.push({
                    mesh: moonMesh,
                    pivot: moonPivot,
                    orbitSpeed: moonData.orbitSpeed,
                    spinSpeed: moonData.spinSpeed,
                    userData: moonData
                });
            });
        }
    });
}

function createSunEffects(sunMesh) {
    const sunCoronaTexture = createProceduralTexture((ctx, size) => {
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0.2, 'rgba(255, 215, 0, 0.5)');
        gradient.addColorStop(0.5, 'rgba(255, 140, 0, 0.1)');
        gradient.addColorStop(1, 'rgba(255, 69, 0, 0)');
        ctx.fillStyle = gradient; ctx.fillRect(0, 0, size, size);
    });

    // SỬA Ở ĐÂY: Đảm bảo blending là AdditiveBlending và bật transparent
    const coronaMaterial = new THREE.SpriteMaterial({
        map: sunCoronaTexture,
        blending: THREE.AdditiveBlending, // Quan trọng nhất: Cộng ánh sáng, không che phủ
        transparent: true,
        opacity: 0.8 // Bạn có thể điều chỉnh độ sáng ở đây
    });

    const corona = new THREE.Sprite(coronaMaterial);
    const sunSize = sunMesh.geometry.parameters.radius;
    corona.scale.set(sunSize * 4, sunSize * 4, 1);
    sunMesh.add(corona);
    sunEffects.corona = corona;
}

// THAY THẾ TOÀN BỘ HÀM CŨ BẰNG HÀM NÀY
function createProceduralSaturnRing() {
    const particleCount = 20000;
    const positions = [];
    const colors = [];
    const customData = []; // Dữ liệu tùy chỉnh: [bán kính, tốc độ, góc ban đầu]

    const innerRadius = 40;
    const outerRadius = 65;
    const thickness = 2;

    const colorInside = new THREE.Color("#A19A87");
    const colorMiddle = new THREE.Color("#8C826B");
    const colorOutside = new THREE.Color("#B5AF9D");

    for (let i = 0; i < particleCount; i++) {
        const radius = THREE.MathUtils.randFloat(innerRadius, outerRadius);
        const angle = Math.random() * Math.PI * 2;
        
        // Vị trí ban đầu của hạt
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = (Math.random() - 0.5) * thickness * (1 - (radius - innerRadius) / (outerRadius - innerRadius));
        positions.push(x, y, z);

        // Tốc độ quay (hạt ở gần quay nhanh hơn)
        const speed = (Math.random() * 0.1 + 0.05) / radius * 100;
        customData.push(radius, speed, angle, 0); // Lưu dữ liệu để shader sử dụng

        // Màu sắc dựa trên vị trí
        const percent = (radius - innerRadius) / (outerRadius - innerRadius);
        let color = percent < 0.3 ? colorInside : (percent < 0.8 ? colorMiddle.clone().lerp(colorInside, (percent - 0.3) / 0.5) : colorOutside);
        colors.push(color.r, color.g, color.b);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('customData', new THREE.Float32BufferAttribute(customData, 4));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0.0 }
        },
        // Vertex Shader tính toán chuyển động xoay của từng hạt
        vertexShader: `
            uniform float uTime;
            attribute vec4 customData; // x: radius, y: speed, z: startAngle
            attribute vec3 color;      
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec3 pos = position;
                float radius = customData.x;
                float speed = customData.y;
                float startAngle = customData.z;
                
                // CÔNG THỨC XOAY
                float newAngle = startAngle + (uTime * speed * 0.1); // Giảm tốc độ chung một chút
                pos.x = radius * cos(newAngle);
                pos.z = radius * sin(newAngle);

                vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                gl_PointSize = 0.15 * (300.0 / -mvPosition.z); // Kích thước hạt
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        // Fragment Shader tô màu cho hạt
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                gl_FragColor = vec4(vColor, 0.5); // Giảm độ trong suốt một chút
            }
        `,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
    });

    saturnRing = new THREE.Points(geometry, material);
    const saturnObject = celestialObjects.find(obj => obj.userData.id === 'saturn');
    if (saturnObject) {
        saturnObject.mesh.add(saturnRing);
    }
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

        rock.userData.orbitRadius = orbitRadius;
        rock.userData.orbitAngle = orbitAngle;
        rock.userData.orbitSpeed = orbitSpeed;

        rock.position.set(
            orbitRadius * Math.cos(orbitAngle), 
            y, 
            orbitRadius * Math.sin(orbitAngle)
        );
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
    const panel2 = panel1.clone();
    panel2.position.x = -3;
    satelliteGroup.add(panel1, panel2);
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3), bodyMat);
    antenna.position.z = 2.5;
    satelliteGroup.add(antenna);
    satelliteGroup.scale.setScalar(2.5);
    const spawnRadius = 1200;
    const startPosition = new THREE.Vector3(
        (Math.random() - 0.5) * spawnRadius * 2,
        (Math.random() - 0.5) * 400,
        (Math.random() > 0.5 ? 1 : -1) * spawnRadius
    );
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
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: duration,
        ease: "none",
        onComplete: () => {
            scene.remove(satelliteGroup);
            activeSatellites = activeSatellites.filter(s => s !== satelliteGroup);
        }
    });
    activeSatellites.push(satelliteGroup);
}

function animateCamera(targetPosition, targetLookAt, duration = 1.5, onComplete = null) {
    if (isAnimatingCamera) return;
    isAnimatingCamera = true;
    controls.enabled = false;

    const cameraProxy = {
        posX: camera.position.x, posY: camera.position.y, posZ: camera.position.z,
        targetX: controls.target.x, targetY: controls.target.y, targetZ: controls.target.z,
    };

    gsap.to(cameraProxy, {
        duration: duration,
        ease: "power3.inOut",
        posX: targetPosition.x, posY: targetPosition.y, posZ: targetPosition.z,
        targetX: targetLookAt.x, targetY: targetLookAt.y, targetZ: targetLookAt.z,
        onUpdate: () => {
            camera.position.set(cameraProxy.posX, cameraProxy.posY, cameraProxy.posZ);
            controls.target.set(cameraProxy.targetX, cameraProxy.targetY, cameraProxy.targetZ);
            controls.update();
        },
        onComplete: () => {
            isAnimatingCamera = false;
            controls.enabled = true;
            if (onComplete) onComplete();
        }
    });
}

function resetCameraToDefault() {
    if (isAnimatingCamera || !followedObject) return;
    isAutoRotating = false;
    
    infoCard.classList.add('hidden');
    followedObject = null;

    // Luôn luôn quay về vị trí "NHÀ" đã được định nghĩa
    animateCamera(
        HOME_CAMERA_POSITION,
        HOME_CONTROLS_TARGET,
        1.5,
        () => {
            // Khôi phục lại giới hạn zoom mặc định
            controls.minDistance = 20;
            controls.maxDistance = 1200;
            controls.enablePan = true;
        }
    );
}

function showPlanetInfo(clickedMesh) {
    if (isAnimatingCamera || !clickedMesh || !clickedMesh.userData) return;
    isAutoRotating = false;
    const data = clickedMesh.userData;
    followedObject = clickedMesh;
    controls.enablePan = false;

    const planetPosition = new THREE.Vector3();
    clickedMesh.getWorldPosition(planetPosition);

    let planetRadius = 10;
    if (clickedMesh.geometry && clickedMesh.geometry.parameters && clickedMesh.geometry.parameters.radius) {
        planetRadius = clickedMesh.geometry.parameters.radius;
    } else {
        const boundingBox = new THREE.Box3().setFromObject(clickedMesh);
        const size = new THREE.Vector3();
        boundingBox.getSize(size);
        planetRadius = size.length() / 2;
    }

    const idealDistance = planetRadius * 2.5;
    const cameraDirection = new THREE.Vector3().subVectors(camera.position, planetPosition).normalize();
    const cameraTargetPosition = planetPosition.clone().add(cameraDirection.multiplyScalar(idealDistance));
    cameraTargetPosition.y = Math.max(cameraTargetPosition.y, planetPosition.y + planetRadius * 0.5);

    animateCamera(cameraTargetPosition, planetPosition, 1.5, () => {
        controls.minDistance = planetRadius * 1.2;
        controls.maxDistance = planetRadius * 15;
        const startAngleVec = new THREE.Vector3().subVectors(camera.position, planetPosition);
        autoRotateAngle = Math.atan2(startAngleVec.z, startAngleVec.x);
        isAutoRotating = true;
    });

    infoCardTitle.textContent = data.name || 'Unknown';
    infoCardFact.textContent = data.fact || '';
    infoCardMessage.textContent = data.message || '';
    const playerHeight = waveformControls.classList.contains('hidden') ? 0 : waveformControls.offsetHeight;
    infoCard.style.bottom = `${playerHeight + 30}px`;
    infoCard.classList.remove('hidden');
}

function onClick(event) {
    if (overlay.classList.contains('hidden-overlay') === false || letterContainer.classList.contains('hidden') === false) {
        return;
    }
    if (isAnimatingCamera) return;
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const clickableObjects = celestialObjects
        .map(obj => obj.mesh)
        .filter(mesh => mesh.userData && mesh.userData.isClickable);
    const intersects = raycaster.intersectObjects(clickableObjects, false);
    if (intersects.length > 0 && infoCard.classList.contains('hidden')) {
        const clickedMesh = intersects[0].object;
        if (clickedMesh.userData) {
            showPlanetInfo(clickedMesh);
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
}


function showControlsHelp() {
    let helpDiv = document.getElementById('flight-controls-help');
    if (!helpDiv) {
        helpDiv = document.createElement('div');
        helpDiv.id = 'flight-controls-help';
        helpDiv.style.cssText = `
            position: fixed; top: 20px; left: 20px; background: rgba(0, 0, 0, 0.8);
            color: white; padding: 15px; border-radius: 8px; font-size: 14px;
            z-index: 1000; display: none; line-height: 1.6; font-family: sans-serif;
        `;
        document.body.appendChild(helpDiv);

        window.addEventListener('keydown', (e) => {
            if (e.code === 'KeyH') {
                helpDiv.style.display = helpDiv.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    helpDiv.innerHTML = `
        <h3 style="margin-bottom: 10px; color: #ff6b9d;">Hướng Dẫn (Nhấn H để Ẩn/Hiện)</h3>
        <strong style="color: #4ecdc4;">Chế độ Quan sát (Mặc định):</strong>
        <p style="margin-left: 10px;">- Dùng Chuột trái để xoay camera.<br>- Lăn chuột để Phóng to/Thu nhỏ.</p>
        <strong style="color: #4ecdc4; margin-top: 15px; display: block;">Chế độ Lái phi thuyền:</strong>
        <p style="margin-left: 10px;"><strong>F</strong> - Bật/Tắt chế độ lái</p>
        <p style="margin-left: 10px;"><strong>C</strong> - Đổi góc nhìn (Thứ 1/3)</p> 
        <p style="margin-left: 10px;"><strong>Di chuyển Chuột</strong> - Xoay camera</p>
        <p style="margin-left: 10px;"><strong>W/A/S/D</strong> - Di chuyển phi thuyền</p>
        <p style="margin-left: 10px;"><strong>Space/Shift</strong> - Bay lên/xuống</p>
        <p style="margin-left: 10px;"><strong>ESC</strong> - Thoát khẩn cấp</p>
    `;
}

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    const delta = clock.getDelta();

    celestialObjects.forEach(obj => {
        if (obj.pivot) obj.pivot.rotation.y += (obj.orbitSpeed || 0) * 0.3 * delta;
        obj.mesh.rotation.y += (obj.spinSpeed || 0) * delta;
    });

    if (saturnRing) saturnRing.material.uniforms.uTime.value = elapsedTime;

    if (asteroidBelt) {
        asteroidBelt.children.forEach(rock => {
            rock.userData.orbitAngle += rock.userData.orbitSpeed * delta;
            rock.position.x = rock.userData.orbitRadius * Math.cos(rock.userData.orbitAngle);
            rock.position.z = rock.userData.orbitRadius * Math.sin(rock.userData.orbitAngle);
            rock.rotation.y += 0.5 * delta;
        });
    
    }
    if (isAutoRotating && followedObject) {
        const planetPosition = new THREE.Vector3();
        followedObject.getWorldPosition(planetPosition);
        
        const distance = camera.position.distanceTo(planetPosition);
        autoRotateAngle += cameraSettings.autoRotateSpeed;
        
        const newX = planetPosition.x + distance * Math.cos(autoRotateAngle);
        const newZ = planetPosition.z + distance * Math.sin(autoRotateAngle);
        const verticalOffset = Math.sin(elapsedTime * 0.5) * cameraSettings.verticalArcAmount;
        
        camera.position.x = newX;
        camera.position.z = newZ;
        camera.position.y = planetPosition.y + (followedObject.geometry.parameters.radius * cameraSettings.lookAtHeightOffset) + verticalOffset;
        
        camera.lookAt(planetPosition);
        controls.target.copy(planetPosition);
    }

    if (isFlyMode) updateWarpTrail(delta);
    
    if (sunEffects.corona) sunEffects.corona.material.rotation = elapsedTime * 0.01;
    if (sunEffects.uniforms) sunEffects.uniforms.uTime.value = elapsedTime;
    
    activeAsteroids.forEach(a => {
        if (a.uniforms) a.uniforms.uTime.value = elapsedTime;
        a.group.rotation.y += 0.005 * delta * 60;
        a.group.rotation.x += 0.002 * delta * 60;
    });

    activeComets.forEach(c => {
        const particles = c.tail.geometry.attributes.position.array;
        for (let i = 0; i < particles.length; i += 3) {
            particles[i + 2] -= Math.random() * 0.5;
            if (particles[i + 2] < -50) {
                particles[i] = (Math.random() - 0.5) * 2;
                particles[i + 1] = (Math.random() - 0.5) * 2;
                particles[i + 2] = Math.random() * 5;
            }
        }
        c.tail.geometry.attributes.position.needsUpdate = true;
    });

    updateFlyModeLogic(delta);
    activePeakRockets.forEach(rocket => updatePeakRocketTrail(rocket, delta));
    if (starfield) starfield.rotation.y -= 0.00005;

    if (!isAnimatingCamera && controls.enabled) controls.update();
    
    composer.render();
}

function initThreeJS() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(0, 150, 400);
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    scene.add(new THREE.PointLight(0xffffff, 1.5));
    spaceship = createSpaceship();
    scene.add(spaceship);
    createWarpTrail();
    
    // SỬA LỖI CUỐI CÙNG: Gọi các hàm không có tiền tố THREE.
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; controls.dampingFactor = 0.05;
    controls.minDistance = 20; controls.maxDistance = 1200;
    
    setupLoadingManager();
    textureLoader = new THREE.TextureLoader(loadingManager);

    const renderPass = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.95;
    bloomPass.strength = 0.7;
    bloomPass.radius = 0.35;
    composer = new EffectComposer(renderer);
    composer.addPass(renderPass);
    composer.addPass(bloomPass);

    controls.addEventListener('start', () => { isAutoRotating = false; });
    createStarfield();
    createSolarSystem(textureLoader);

    setupFlyControls();
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onClick);
    animate();
}

// =======================================================
// PHẦN 7: VÒNG LẶP CHÍNH VÀ KHỞI TẠO
// =======================================================
let lastParticleTime = 0;
function mainLoop(timestamp) {
    const isHighEndDevice = !window.matchMedia("(max-width: 768px)").matches;
    const config = { particleInterval: isHighEndDevice ? 150 : 300 };
    if (timestamp - lastParticleTime > config.particleInterval) {
        createTextParticle(); lastParticleTime = timestamp;
    }
    requestAnimationFrame(mainLoop);
}

function init() {
    const isHighEndDevice = !window.matchMedia("(max-width: 768px)").matches;
    const config = {
        shootingStarInterval: isHighEndDevice ? 800 : 1500,
        asteroidInterval: isHighEndDevice ? 7000 : 12000,
        cometInterval: isHighEndDevice ? 15000 : 25000
    };

    runBirthdayCheck();
    setupUIEventListeners();
    initThreeJS();
    createProceduralSaturnRing();
    createAsteroidBelt(375, 50, 2000);

    checkAndPreloadNightlySong();
    setInterval(checkAndPreloadNightlySong, 60000);
    setTimeout(() => setInterval(createShootingStar, config.shootingStarInterval), 3000);
    setTimeout(() => {
        createFieryAsteroid();
        setInterval(createFieryAsteroid, config.asteroidInterval);
    }, 8000);
    setTimeout(() => setInterval(createComet, config.cometInterval), 10000);
    setupGyroControls();
    setupMouseParallax();
    requestAnimationFrame(mainLoop);
    if (isBirthdayMode) { activateBirthdayMode(); } else { checkAndSetupLetterButton(); }
    setTimeout(() => setInterval(createPeakRocket, 9000), 15000);
    setTimeout(() => setInterval(createExploringSatellite, 12000), 5000);
    showControlsHelp();
}

init();
