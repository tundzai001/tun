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

    // Particle systems
    this.idleParticles = null;
    this.burstParticles = null;
    this.fireflies = null;

    // State
    this.isOpened = false;
    this.isAnimating = false;
    this.modelsLoaded = 0;
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2();

    this.init();
  }

  init() {
    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06070c, 0.038);

    // 2. Camera: Framed perfectly for Apple Spatial presentation
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 80);
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
    this.controls.target.set(0, 1.1, 0);

    // 5. Studio Environment & Lighting
    this.setupLighting();

    // 6. Particles
    this.setupParticles();

    // 7. Load GLB Models
    this.scene.add(this.boxGroup);
    this.scene.add(this.flowerGroup);
    this.loadModels();

    // 8. Event Listeners
    window.addEventListener('resize', this.onResize.bind(this));
    window.addEventListener('pointermove', this.onPointerMove.bind(this));

    // 9. Animation Loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  setupLighting() {
    // Spatial Studio Ambient
    const ambient = new THREE.AmbientLight(0x2d1a38, 1.4);
    this.scene.add(ambient);

    // Key Light (Warm Champagne Key)
    const keyLight = new THREE.DirectionalLight(0xfff2df, 3.2);
    keyLight.position.set(3.5, 6.5, 4.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0001;
    this.scene.add(keyLight);

    // Rim Light (Rose Magenta Edge)
    const rimLight = new THREE.DirectionalLight(0xff4b81, 2.8);
    rimLight.position.set(-4.5, 4.0, -3.5);
    this.scene.add(rimLight);

    // Soft Cyan Accent Fill
    const fillLight = new THREE.DirectionalLight(0x64b5f6, 1.2);
    fillLight.position.set(0, -1.5, 3.5);
    this.scene.add(fillLight);

    // Box Interior Spotlight (Erupts from inside box)
    this.boxInteriorLight = new THREE.PointLight(0xffd700, 0, 7);
    this.boxInteriorLight.position.set(0, 0.6, 0);
    this.scene.add(this.boxInteriorLight);

    // Flower Halo Light
    this.flowerSpotlight = new THREE.PointLight(0xff6584, 0, 5);
    this.flowerSpotlight.position.set(0, 1.8, 0);
    this.scene.add(this.flowerSpotlight);

    // Floor Shadow Receiver
    const shadowGeo = new THREE.PlaneGeometry(10, 10);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.5 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.01;
    shadowPlane.receiveShadow = true;
    this.scene.add(shadowPlane);
  }

  setupParticles() {
    // 1. Idle Golden Fairy Dust
    const dustCount = 120;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 7;
      dustPos[i * 3 + 1] = Math.random() * 4.5;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

    // Particle sprite
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const ctx = pCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 235, 180, 1)');
    grad.addColorStop(0.35, 'rgba(255, 120, 160, 0.6)');
    grad.addColorStop(1, 'rgba(255, 100, 150, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const pTex = new THREE.CanvasTexture(pCanvas);

    const dustMat = new THREE.PointsMaterial({
      size: 0.15,
      map: pTex,
      transparent: true,
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
      size: 0.22,
      map: pTex,
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
        x: 0.58,
        y: 0.58,
        z: 0.58,
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

    // 3. Idle fairy dust motes
    if (this.idleParticles) {
      this.idleParticles.rotation.y = elapsedTime * 0.025;
      const positions = this.idleParticles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= 0.0025;
        if (positions[i * 3 + 1] < 0) positions[i * 3 + 1] = 4.5;
      }
      this.idleParticles.geometry.attributes.position.needsUpdate = true;
    }

    // 4. Confetti burst physics
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
