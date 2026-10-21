import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { audioManager } from './audio_manager.js';

export class GiftBoxScene {
  constructor(canvasElement, onReadyCallback) {
    this.canvas = canvasElement;
    this.onReadyCallback = onReadyCallback;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;

    // 3D Objects
    this.boxGroup = new THREE.Group();
    this.flowerGroup = new THREE.Group();
    this.boxBase = null;
    this.boxLid = null;
    this.flower = null;
    this.blossomHead = null;

    // Lights
    this.boxInteriorLight = null;
    this.flowerSpotlight = null;

    // Particle systems & Cosmic Atmosphere
    this.starfield = null;
    this.nebulae = [];
    this.shootingStars = [];
    this.idleParticles = null;
    this.burstParticles = null;

    // Textures cache
    this.starTex = null;
    this.glowTex = null;

    // State
    this.isOpened = false;
    this.isAnimating = false;
    this.modelsLoaded = 0;
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2();

    this.init();
  }

  init() {
    // 1. Scene - Crystal pure OLED deep space (NO muddy fog!)
    this.scene = new THREE.Scene();

    // 2. Camera: Framed perfectly for Apple Spatial presentation
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    this.camera.position.set(0, 1.9, 5.0);

    // 3. Renderer with HDR tone mapping
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. OrbitControls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.02;
    this.controls.minDistance = 2.8;
    this.controls.maxDistance = 9.0;
    this.controls.target.set(0, 0.95, 0);

    // 5. Studio Environment & Lighting
    this.setupLighting();

    // 6. Ground Ambient Occlusion Contact Shadow
    this.setupContactShadow();

    // 7. Celestial 3D Cosmic Environment (3000 Stars, Nebulae, Meteors)
    this.setupCosmicEnvironment();

    // 8. Delicate Floating Fairy Stardust & Confetti
    this.setupParticles();

    // 9. Load GLB Models
    this.scene.add(this.boxGroup);
    this.scene.add(this.flowerGroup);
    this.loadModels();

    // 10. Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));

    // 11. Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setupLighting() {
    // Spatial Studio Ambient: Clean, rich, dark
    const ambient = new THREE.AmbientLight(0x221a28, 1.4);
    this.scene.add(ambient);

    // Key Light (Warm Champagne Key)
    const keyLight = new THREE.DirectionalLight(0xfff5e6, 3.6);
    keyLight.position.set(3.5, 6.5, 4.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0001;
    this.scene.add(keyLight);

    // Rim Light (Vibrant Rose Edge)
    const rimLight = new THREE.DirectionalLight(0xff2d65, 3.2);
    rimLight.position.set(-4.5, 4.0, -3.5);
    this.scene.add(rimLight);

    // Soft Cyan Accent Fill
    const fillLight = new THREE.DirectionalLight(0x4aa3df, 1.3);
    fillLight.position.set(0, -1.5, 3.5);
    this.scene.add(fillLight);

    // Backlight Crown behind Rose
    const roseBacklight = new THREE.PointLight(0xff4081, 2.8, 6);
    roseBacklight.position.set(0, 1.4, -0.6);
    this.scene.add(roseBacklight);

    // Box Interior Spotlight (Erupts from inside box when opened)
    this.boxInteriorLight = new THREE.PointLight(0xffd700, 0, 7);
    this.boxInteriorLight.position.set(0, 0.6, 0);
    this.scene.add(this.boxInteriorLight);

    // Flower Spotlight
    this.flowerSpotlight = new THREE.PointLight(0xff6584, 0, 5);
    this.flowerSpotlight.position.set(0, 1.8, 0);
    this.scene.add(this.flowerSpotlight);
  }

  setupContactShadow() {
    // Soft circular radial contact shadow directly under gift box
    const sCanvas = document.createElement('canvas');
    sCanvas.width = 256;
    sCanvas.height = 256;
    const sCtx = sCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
    sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.85)');
    sGrad.addColorStop(0.35, 'rgba(0, 0, 0, 0.55)');
    sGrad.addColorStop(0.65, 'rgba(0, 0, 0, 0.18)');
    sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 256, 256);
    const shadowTex = new THREE.CanvasTexture(sCanvas);

    const shadowGeo = new THREE.PlaneGeometry(4.0, 4.0);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.01;
    this.scene.add(shadowPlane);
  }

  setupCosmicEnvironment() {
    // 1. Crisp Star Texture (Pinpoint sparkling star with soft corona)
    const starCanvas = document.createElement('canvas');
    starCanvas.width = 32;
    starCanvas.height = 32;
    const sCtx = starCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
    sGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    sGrad.addColorStop(0.2, 'rgba(255, 255, 255, 0.9)');
    sGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.25)');
    sGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 32, 32);
    this.starTex = new THREE.CanvasTexture(starCanvas);

    // 2. Pure Deep Space Starfield (3,600 sparkling stars in infinite black cosmos)
    const starCount = 3600;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xffffff), // Diamond brilliant white
      new THREE.Color(0xfff5e6), // Warm champagne gold
      new THREE.Color(0xd6e8ff), // Icy starlight blue
      new THREE.Color(0xffccd7), // Soft romantic pink
      new THREE.Color(0xe0d4ff)  // Soft violet
    ];

    for (let i = 0; i < starCount; i++) {
      let x, y, z;
      if (i % 4 === 0) {
        // Subtle Milky Way galactic lane
        const t = (Math.random() - 0.5) * 55;
        x = t;
        y = t * 0.42 + (Math.random() - 0.5) * 8;
        z = -18 - Math.random() * 22;
      } else {
        // Deep celestial sphere
        const radius = 24.0 + Math.random() * 42.0;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        x = radius * Math.sin(phi) * Math.cos(theta);
        y = radius * Math.sin(phi) * Math.sin(theta);
        z = radius * Math.cos(phi);
      }

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      const col = palette[Math.floor(Math.random() * palette.length)];
      const brightness = 0.55 + Math.random() * 0.45;
      starColors[i * 3] = col.r * brightness;
      starColors[i * 3 + 1] = col.g * brightness;
      starColors[i * 3 + 2] = col.b * brightness;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.16,
      map: this.starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.starfield = new THREE.Points(starGeo, starMat);
    this.scene.add(this.starfield);

    // 3. Subtle Distant Cosmic Dust Clouds (Delicate, deep, not foggy!)
    const distantNebulae = [
      { r: 210, g: 30, b: 90, a: 0.08, scale: 22, pos: [0, 2.5, -12] },    // Soft halo behind flower
      { r: 120, g: 40, b: 200, a: 0.06, scale: 28, pos: [12, 6, -18] },   // Distant violet wisp right
      { r: 240, g: 80, b: 120, a: 0.05, scale: 26, pos: [-12, 4, -18] }   // Distant rose wisp left
    ];

    distantNebulae.forEach((cfg) => {
      const nCanvas = document.createElement('canvas');
      nCanvas.width = 256;
      nCanvas.height = 256;
      const nCtx = nCanvas.getContext('2d');
      const nGrad = nCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
      nGrad.addColorStop(0, `rgba(${cfg.r}, ${cfg.g}, ${cfg.b}, ${cfg.a})`);
      nGrad.addColorStop(0.4, `rgba(${cfg.r}, ${cfg.g}, ${cfg.b}, ${cfg.a * 0.4})`);
      nGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      nCtx.fillStyle = nGrad;
      nCtx.fillRect(0, 0, 256, 256);

      const nTex = new THREE.CanvasTexture(nCanvas);
      const nMat = new THREE.SpriteMaterial({
        map: nTex,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.8,
        depthWrite: false
      });
      const sprite = new THREE.Sprite(nMat);
      sprite.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      sprite.scale.set(cfg.scale, cfg.scale, 1);
      sprite.userData = {
        baseOpacity: 0.8,
        rotSpeed: (Math.random() - 0.5) * 0.0002,
        pulseSpeed: 0.5,
        pulseOffset: Math.random() * Math.PI
      };
      this.scene.add(sprite);
      this.nebulae.push(sprite);
    });

    // 4. Shooting Stars (Meteors with elegant trails)
    this.shootingStars = [];
    for (let i = 0; i < 3; i++) {
      const sGeo = new THREE.BufferGeometry();
      const sPos = new Float32Array(6);
      sGeo.setAttribute('position', new THREE.BufferAttribute(sPos, 3));
      const sMat = new THREE.LineBasicMaterial({
        color: 0xfff4e6,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        linewidth: 2
      });
      const sLine = new THREE.Line(sGeo, sMat);
      sLine.userData = {
        active: false,
        delay: Math.random() * 3.0 + 1.0,
        progress: 0,
        speed: 1.6 + Math.random() * 0.8,
        startPos: new THREE.Vector3(),
        dir: new THREE.Vector3(-1.3, -0.6, -0.15).normalize(),
        length: 3.2
      };
      this.scene.add(sLine);
      this.shootingStars.push(sLine);
    }
  }

  setupParticles() {
    // 1. Delicate Floating Stardust (Fairy Dust around the chest & flower)
    const dustCount = 100;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const dustColor = new Float32Array(dustCount * 3);

    const dustPalette = [
      new THREE.Color(0xffd280), // Champagne gold
      new THREE.Color(0xff6584), // Rose glow
      new THREE.Color(0xffffff)  // Pure light
    ];

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 4.8;
      dustPos[i * 3 + 1] = 0.3 + Math.random() * 3.5;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 4.8;

      const c = dustPalette[Math.floor(Math.random() * dustPalette.length)];
      dustColor[i * 3] = c.r;
      dustColor[i * 3 + 1] = c.g;
      dustColor[i * 3 + 2] = c.b;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColor, 3));

    // Glowing particle texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.25, 'rgba(255, 240, 200, 0.9)');
    grad.addColorStop(0.6, 'rgba(255, 120, 160, 0.3)');
    grad.addColorStop(1, 'rgba(255, 100, 150, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    this.glowTex = new THREE.CanvasTexture(pCanvas);

    const dustMat = new THREE.PointsMaterial({
      size: 0.042,
      map: this.glowTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.idleParticles = new THREE.Points(dustGeo, dustMat);
    this.scene.add(this.idleParticles);

    // 2. Confetti Burst
    const burstCount = 180;
    const burstGeo = new THREE.BufferGeometry();
    const burstPos = new Float32Array(burstCount * 3);
    const burstVelo = [];

    for (let i = 0; i < burstCount; i++) {
      burstPos[i * 3] = 0;
      burstPos[i * 3 + 1] = 0.6;
      burstPos[i * 3 + 2] = 0;

      const theta = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.2 + 2.0;
      const spread = Math.random() * 1.5;
      burstVelo.push({
        vx: Math.cos(theta) * spread,
        vy: speed,
        vz: Math.sin(theta) * spread,
        life: 0
      });
    }

    burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3));
    const burstMat = new THREE.PointsMaterial({
      size: 0.18,
      map: this.glowTex,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.burstParticles = new THREE.Points(burstGeo, burstMat);
    this.burstParticles.userData = { velos: burstVelo, active: false };
    this.scene.add(this.burstParticles);
  }

  loadModels() {
    const loader = new GLTFLoader();

    // Apple VisionOS Luxury PBR Materials
    const goldMat = new THREE.MeshPhysicalMaterial({
      color: 0xffd280,
      metalness: 0.96,
      roughness: 0.12,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1
    });

    const velvetMat = new THREE.MeshPhysicalMaterial({
      color: 0x6e081e,
      metalness: 0.12,
      roughness: 0.35,
      clearcoat: 0.3
    });

    const cushionMat = new THREE.MeshStandardMaterial({
      color: 0x180206,
      roughness: 0.95,
      metalness: 0.05
    });

    const petalMat = new THREE.MeshPhysicalMaterial({
      color: 0xe8175d,
      roughness: 0.28,
      metalness: 0.08,
      emissive: 0x5a001a,
      emissiveIntensity: 0.35
    });

    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x145a2b,
      roughness: 0.35,
      metalness: 0.08
    });

    // 1. Luxury Gift Box
    loader.load(
      'models/luxury_gift_box.glb',
      (gltf) => {
        const boxScene = gltf.scene;

        boxScene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.name.includes('Accents') || child.name.includes('Trim') || child.name.includes('Gold')) {
              child.material = goldMat;
            } else if (child.name.includes('Cushion')) {
              child.material = cushionMat;
            } else if (child.name.includes('Base') || child.name.includes('Lid')) {
              child.material = velvetMat;
            }
          }
        });

        this.boxBase = boxScene.getObjectByName('Box_Base');
        this.boxLid = boxScene.getObjectByName('Box_Lid');

        this.boxGroup.add(boxScene);
        this.boxGroup.position.set(0, 0, 0);

        this.checkModelsReady();
      },
      undefined,
      (err) => console.error('Error loading box GLB:', err)
    );

    // 2. Enchanted Rose
    loader.load(
      'models/magic_flower.glb',
      (gltf) => {
        this.flower = gltf.scene;
        this.flower.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.name.includes('Petal') || child.name.includes('Blossom')) {
              child.material = petalMat;
            } else if (child.name.includes('Stamen')) {
              child.material = goldMat;
            } else {
              child.material = stemMat;
            }
          }
        });

        this.blossomHead = this.flower.getObjectByName('Blossom_Head');

        // Initial state: scaled to 0 inside box
        this.flower.position.set(0, 0.1, 0);
        this.flower.scale.set(0.001, 0.001, 0.001);
        this.flower.visible = true;
        this.flowerGroup.add(this.flower);

        this.checkModelsReady();
      },
      undefined,
      (err) => console.error('Error loading flower GLB:', err)
    );
  }

  checkModelsReady() {
    this.modelsLoaded++;
    if (this.modelsLoaded >= 2 && this.onReadyCallback) {
      this.onReadyCallback();
    }
  }

  onResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  onPointerMove(e) {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    // Subtle spatial parallax
    if (this.camera && !this.controls.state) {
      gsap.to(this.camera.position, {
        x: this.mouse.x * 0.35,
        y: 1.6 + this.mouse.y * 0.25,
        duration: 1.2,
        ease: 'power2.out'
      });
    }
  }

  // Automatic Cinematic Storytelling Unbox Sequence with GSAP Timeline
  playUnboxingSequence(callbacks = {}) {
    if (this.isOpened || this.isAnimating) return;
    this.isAnimating = true;

    // Play unboxing audio chime
    audioManager.playUnboxSound();

    const tl = gsap.timeline({
      onComplete: () => {
        this.isOpened = true;
        this.isAnimating = false;
        if (callbacks.onLetterReady) callbacks.onLetterReady();
      }
    });

    // 1. Box anticipation shake (0.0s - 0.35s)
    tl.to(this.boxGroup.position, {
      x: '+=0.04',
      duration: 0.05,
      repeat: 6,
      yoyo: true,
      ease: 'sine.inOut'
    }, 0);

    // 2. Interior golden glow & spotlight (0.3s)
    tl.to(this.boxInteriorLight, {
      intensity: 6.5,
      duration: 1.2,
      ease: 'power2.out'
    }, 0.3);

    // 3. Lid lifts up and glides back flat onto the floor behind the box (0.35s)
    if (this.boxLid) {
      tl.to(this.boxLid.position, {
        x: 0,
        y: -0.1,
        z: -2.2,
        duration: 1.8,
        ease: 'power3.out'
      }, 0.35);

      tl.to(this.boxLid.rotation, {
        x: -Math.PI * 0.75,
        z: 0.04,
        duration: 1.8,
        ease: 'power3.out'
      }, 0.35);
    }

    // 4. Confetti Burst & Flower Bloom audio (0.8s)
    tl.add(() => {
      this.triggerConfettiBurst();
      audioManager.playBloomSound();
    }, 0.8);

    // 5. Enchanted Rose ascends and blooms majestically (0.9s - 3.2s)
    if (this.flower) {
      this.flower.visible = true;

      tl.to(this.flower.position, {
        y: 0.75,
        duration: 2.2,
        ease: 'back.out(1.1)'
      }, 0.9);

      tl.to(this.flower.scale, {
        x: 0.52,
        y: 0.52,
        z: 0.52,
        duration: 2.2,
        ease: 'back.out(1.1)'
      }, 0.9);

      tl.to(this.flower.rotation, {
        y: Math.PI * 2,
        duration: 2.4,
        ease: 'power2.out'
      }, 0.9);

      tl.to(this.flowerSpotlight, {
        intensity: 6.5,
        duration: 1.5
      }, 1.2);
    }

    // 6. Wings of 5 girlfriend photos slide in (1.5s)
    tl.add(() => {
      if (callbacks.onWingsReady) callbacks.onWingsReady();
    }, 1.5);
  }

  triggerConfettiBurst() {
    if (!this.burstParticles) return;
    this.burstParticles.material.opacity = 1;
    this.burstParticles.userData.active = true;
    const positions = this.burstParticles.geometry.attributes.position.array;
    const velos = this.burstParticles.userData.velos;

    for (let i = 0; i < velos.length; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0.6;
      positions[i * 3 + 2] = 0;
      velos[i].life = 1.0;
    }
    this.burstParticles.geometry.attributes.position.needsUpdate = true;
  }

  // Reset / Replay
  reset() {
    this.isOpened = false;
    this.isAnimating = false;

    if (this.boxLid) {
      gsap.to(this.boxLid.position, { x: 0, y: 0, z: 0, duration: 0.9, ease: 'power2.inOut' });
      gsap.to(this.boxLid.rotation, { x: 0, y: 0, z: 0, duration: 0.9, ease: 'power2.inOut' });
    }

    if (this.flower) {
      gsap.to(this.flower.position, { y: 0.1, duration: 0.7 });
      gsap.to(this.flower.scale, {
        x: 0.001,
        y: 0.001,
        z: 0.001,
        duration: 0.7,
        onComplete: () => {
          this.flower.visible = false;
        }
      });
    }

    gsap.to(this.boxInteriorLight, { intensity: 0, duration: 0.7 });
    gsap.to(this.flowerSpotlight, { intensity: 0, duration: 0.7 });
    if (this.burstParticles) this.burstParticles.material.opacity = 0;
  }

  animate() {
    requestAnimationFrame(this.animate);
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Gentle idle floating
    if (!this.isOpened && !this.isAnimating && this.boxGroup) {
      this.boxGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.04;
      this.boxGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.05;
    }

    // 2. Rose slow levitation and majestic spin
    if (this.isOpened && this.flower) {
      this.flower.rotation.y += 0.005;
      this.flower.position.y = 0.75 + Math.sin(elapsedTime * 2.0) * 0.025;
    }

    // 3. Deep Starfield Cosmic Drift
    if (this.starfield) {
      this.starfield.rotation.y += 0.00015;
      this.starfield.rotation.x += 0.00005;
    }

    // 4. Romantic Cosmic Nebulae Breathing
    if (this.nebulae && this.nebulae.length > 0) {
      this.nebulae.forEach((neb) => {
        neb.material.rotation += neb.userData.rotSpeed || 0.0001;
        const pulse = Math.sin(elapsedTime * neb.userData.pulseSpeed + neb.userData.pulseOffset);
        neb.material.opacity = neb.userData.baseOpacity + pulse * 0.08;
      });
    }

    // 5. Shooting Stars / Meteors
    if (this.shootingStars && this.shootingStars.length > 0) {
      this.shootingStars.forEach((star) => {
        const d = star.userData;
        if (!d.active) {
          d.delay -= 0.016;
          if (d.delay <= 0) {
            d.active = true;
            d.progress = 0;
            d.speed = 1.4 + Math.random() * 1.0;
            d.startPos.set(
              12 + Math.random() * 16,
              10 + Math.random() * 10,
              -12 - Math.random() * 14
            );
            star.material.opacity = 0;
          }
        } else {
          d.progress += 0.016 * d.speed;
          const currentHead = d.startPos.clone().addScaledVector(d.dir, d.progress * 28.0);
          const currentTail = d.startPos.clone().addScaledVector(d.dir, Math.max(0, d.progress * 28.0 - d.length));

          const posArr = star.geometry.attributes.position.array;
          posArr[0] = currentHead.x;
          posArr[1] = currentHead.y;
          posArr[2] = currentHead.z;
          posArr[3] = currentTail.x;
          posArr[4] = currentTail.y;
          posArr[5] = currentTail.z;
          star.geometry.attributes.position.needsUpdate = true;

          // Fade in and out
          if (d.progress < 0.25) {
            star.material.opacity = d.progress * 3.5;
          } else if (d.progress > 0.65) {
            star.material.opacity = Math.max(0, (1.0 - d.progress) * 2.8);
          } else {
            star.material.opacity = 0.9;
          }

          if (d.progress >= 1.0) {
            d.active = false;
            star.material.opacity = 0;
            d.delay = Math.random() * 4.5 + 1.5;
          }
        }
      });
    }

    // 6. Floating fairy stardust with organic curl sway
    if (this.idleParticles) {
      const positions = this.idleParticles.geometry.attributes.position.array;
      const count = positions.length / 3;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        // Upward gentle drift
        positions[idx + 1] += 0.0035;
        // Gentle organic sine wave sway
        positions[idx] += Math.sin(elapsedTime * 1.2 + i * 0.5) * 0.0018;
        positions[idx + 2] += Math.cos(elapsedTime * 1.0 + i * 0.7) * 0.0018;

        if (positions[idx + 1] > 4.2) {
          positions[idx + 1] = 0.2;
        }
      }
      this.idleParticles.geometry.attributes.position.needsUpdate = true;
    }

    // 7. Confetti burst physics
    if (this.burstParticles && this.burstParticles.userData.active) {
      const positions = this.burstParticles.geometry.attributes.position.array;
      const velos = this.burstParticles.userData.velos;
      let activeCount = 0;

      for (let i = 0; i < velos.length; i++) {
        if (velos[i].life > 0) {
          activeCount++;
          positions[i * 3] += velos[i].vx * 0.016;
          positions[i * 3 + 1] += velos[i].vy * 0.016;
          positions[i * 3 + 2] += velos[i].vz * 0.016;
          velos[i].vy -= 0.07;
          velos[i].life -= 0.008;
        }
      }
      this.burstParticles.geometry.attributes.position.needsUpdate = true;
      if (activeCount === 0) {
        this.burstParticles.userData.active = false;
        gsap.to(this.burstParticles.material, { opacity: 0, duration: 0.5 });
      }
    }

    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
