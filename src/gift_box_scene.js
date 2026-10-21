import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { audioManager } from './audio_manager.js';

export class GiftBoxScene {
  constructor(canvasElement) {
    this.canvas = canvasElement;
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
    this.flowerAura = null;

    // State
    this.isOpened = false;
    this.isAnimating = false;
    this.clock = new THREE.Clock();
    this.mouse = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();

    this.init();
  }

  init() {
    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06070d, 0.035);

    // 2. Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(0, 2.2, 5.8);

    // 3. Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 4. Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 + 0.05;
    this.controls.minDistance = 2.8;
    this.controls.maxDistance = 10;
    this.controls.target.set(0, 1.2, 0);

    // 5. Lighting
    this.setupLighting();

    // 6. Particle Systems
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
    // Ambient soft indigo
    const ambient = new THREE.AmbientLight(0x2a1a35, 1.2);
    this.scene.add(ambient);

    // Key Light (Warm golden)
    const keyLight = new THREE.DirectionalLight(0xfff0d0, 2.8);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0001;
    this.scene.add(keyLight);

    // Rim Light (Magical Cyan / Magenta back light)
    const rimLight = new THREE.DirectionalLight(0xff4081, 2.2);
    rimLight.position.set(-5, 4, -4);
    this.scene.add(rimLight);

    // Soft Fill Light
    const fillLight = new THREE.DirectionalLight(0x7986cb, 1.4);
    fillLight.position.set(0, -2, 4);
    this.scene.add(fillLight);

    // Interior Box Light (Erupts when box opens)
    this.boxInteriorLight = new THREE.PointLight(0xffd700, 0, 8);
    this.boxInteriorLight.position.set(0, 1.2, 0);
    this.scene.add(this.boxInteriorLight);

    // Flower Spotlight
    this.flowerSpotlight = new THREE.PointLight(0xff99bb, 0, 6);
    this.flowerSpotlight.position.set(0, 2.5, 0);
    this.scene.add(this.flowerSpotlight);

    // Floor Shadow Receiver Plane
    const shadowGeo = new THREE.PlaneGeometry(12, 12);
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.45 });
    const shadowPlane = new THREE.Mesh(shadowGeo, shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.02;
    shadowPlane.receiveShadow = true;
    this.scene.add(shadowPlane);
  }

  setupParticles() {
    // 1. Idle Golden Dust Particles
    const dustCount = 140;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    const dustScales = new Float32Array(dustCount);

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 8;
      dustPos[i * 3 + 1] = Math.random() * 5;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      dustScales[i] = Math.random() * 0.08 + 0.03;
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));

    const dustCanvas = document.createElement('canvas');
    dustCanvas.width = 64;
    dustCanvas.height = 64;
    const ctx = dustCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 235, 150, 1)');
    grad.addColorStop(0.4, 'rgba(255, 200, 50, 0.6)');
    grad.addColorStop(1, 'rgba(255, 180, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const dustTex = new THREE.CanvasTexture(dustCanvas);

    const dustMat = new THREE.PointsMaterial({
      size: 0.16,
      map: dustTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.idleParticles = new THREE.Points(dustGeo, dustMat);
    this.scene.add(this.idleParticles);

    // 2. Confetti & Star Explosion Burst Particles
    const burstCount = 220;
    const burstGeo = new THREE.BufferGeometry();
    const burstPos = new Float32Array(burstCount * 3);
    const burstVelo = [];

    for (let i = 0; i < burstCount; i++) {
      burstPos[i * 3] = 0;
      burstPos[i * 3 + 1] = 1.0;
      burstPos[i * 3 + 2] = 0;

      // Cone upward explosion
      const theta = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3.5 + 2.0;
      const spread = Math.random() * 1.8;
      burstVelo.push({
        vx: Math.cos(theta) * spread,
        vy: speed,
        vz: Math.sin(theta) * spread,
        rot: Math.random() * 0.1,
        life: 0
      });
    }

    burstGeo.setAttribute('position', new THREE.BufferAttribute(burstPos, 3));
    const burstMat = new THREE.PointsMaterial({
      size: 0.22,
      map: dustTex,
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

    // Load Luxury Gift Box
    loader.load(
      'models/luxury_gift_box.glb',
      (gltf) => {
        const boxScene = gltf.scene;

        boxScene.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            // Upgrade materials
            if (child.name.includes('Ribbon') || child.name.includes('Bow') || child.name.includes('Rim') || child.name.includes('Gold')) {
              child.material.metalness = 0.95;
              child.material.roughness = 0.16;
            } else if (child.name.includes('Base') || child.name.includes('Lid')) {
              child.material.roughness = 0.24;
              child.material.metalness = 0.18;
            }
          }
        });

        // Find parts
        this.boxBase = boxScene.getObjectByName('Box_Base');
        this.boxLid = boxScene.getObjectByName('Box_Lid');

        this.boxGroup.add(boxScene);
        this.boxGroup.position.set(0, 0, 0);

        console.log('Luxury Gift Box loaded into 3D scene');
      },
      undefined,
      (err) => console.error('Error loading gift box GLB:', err)
    );

    // Load Magic Flower
    loader.load(
      'models/magic_flower.glb',
      (gltf) => {
        this.flower = gltf.scene;
        this.flower.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.name.includes('Petal') || child.name.includes('Rose')) {
              child.material.roughness = 0.32;
              child.material.metalness = 0.08;
            }
          }
        });

        this.blossomHead = this.flower.getObjectByName('Blossom_Head');

        // Hide inside box initially
        this.flower.position.set(0, 0.1, 0);
        this.flower.scale.set(0.001, 0.001, 0.001);
        this.flower.visible = false;
        this.flowerGroup.add(this.flower);

        console.log('Magic Flower loaded into 3D scene');
      },
      undefined,
      (err) => console.error('Error loading magic flower GLB:', err)
    );
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
  }

  // Storytelling Unboxing Sequence
  openGiftBox(callbacks = {}) {
    if (this.isOpened || this.isAnimating) return;
    this.isAnimating = true;

    // 1. Play synthesized unboxing chime & sound
    audioManager.playUnboxSound();

    // 2. Anticipation Box Shake
    gsap.to(this.boxGroup.position, {
      x: '+=0.06',
      duration: 0.05,
      repeat: 7,
      yoyo: true,
      ease: 'sine.inOut',
      onComplete: () => {
        this.boxGroup.position.x = 0;
      }
    });

    // 3. Golden light inside box illuminates
    gsap.to(this.boxInteriorLight, {
      intensity: 6.5,
      duration: 1.2,
      ease: 'power2.out'
    });

    // 4. Box Lid lifts and tilts back gracefully
    if (this.boxLid) {
      gsap.to(this.boxLid.position, {
        y: '+=1.9',
        z: '-=1.1',
        duration: 1.6,
        delay: 0.3,
        ease: 'power3.out'
      });
      gsap.to(this.boxLid.rotation, {
        x: -Math.PI * 0.45,
        z: 0.14,
        duration: 1.6,
        delay: 0.3,
        ease: 'power3.out'
      });
    }

    // 5. Trigger Confetti Burst
    setTimeout(() => {
      this.triggerConfettiBurst();
      if (callbacks.onWingsReady) callbacks.onWingsReady();
    }, 700);

    // 6. Magic Flower Ascends & Blooms
    setTimeout(() => {
      if (this.flower) {
        this.flower.visible = true;
        audioManager.playBloomSound();

        gsap.to(this.flower.position, {
          y: 0.95,
          duration: 2.2,
          ease: 'back.out(1.3)'
        });

        gsap.to(this.flower.scale, {
          x: 1.15,
          y: 1.15,
          z: 1.15,
          duration: 2.2,
          ease: 'back.out(1.3)'
        });

        gsap.to(this.flower.rotation, {
          y: Math.PI * 2,
          duration: 2.4,
          ease: 'power2.out'
        });

        gsap.to(this.flowerSpotlight, {
          intensity: 4.5,
          duration: 1.5
        });
      }

      if (callbacks.onFlowerReady) callbacks.onFlowerReady();
    }, 1200);

    // 7. Show Royal Love Letter
    setTimeout(() => {
      this.isOpened = true;
      this.isAnimating = false;
      if (callbacks.onLetterReady) callbacks.onLetterReady();
    }, 2800);
  }

  triggerConfettiBurst() {
    if (!this.burstParticles) return;
    this.burstParticles.material.opacity = 1;
    this.burstParticles.userData.active = true;
    const positions = this.burstParticles.geometry.attributes.position.array;
    const velos = this.burstParticles.userData.velos;

    for (let i = 0; i < velos.length; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 1.0;
      positions[i * 3 + 2] = 0;
      velos[i].life = 1.0;
    }
    this.burstParticles.geometry.attributes.position.needsUpdate = true;
  }

  // Reset/Replay
  reset() {
    this.isOpened = false;
    this.isAnimating = false;

    // Reset Lid
    if (this.boxLid) {
      gsap.to(this.boxLid.position, { x: 0, y: 0, z: 0, duration: 1.0, ease: 'power2.inOut' });
      gsap.to(this.boxLid.rotation, { x: 0, y: 0, z: 0, duration: 1.0, ease: 'power2.inOut' });
    }

    // Reset Flower
    if (this.flower) {
      gsap.to(this.flower.position, { y: 0.1, duration: 0.8 });
      gsap.to(this.flower.scale, {
        x: 0.001,
        y: 0.001,
        z: 0.001,
        duration: 0.8,
        onComplete: () => {
          this.flower.visible = false;
        }
      });
    }

    // Lights
    gsap.to(this.boxInteriorLight, { intensity: 0, duration: 0.8 });
    gsap.to(this.flowerSpotlight, { intensity: 0, duration: 0.8 });
    if (this.burstParticles) this.burstParticles.material.opacity = 0;
  }

  animate() {
    requestAnimationFrame(this.animate);
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Idle box floating
    if (!this.isOpened && !this.isAnimating && this.boxGroup) {
      this.boxGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.06;
      this.boxGroup.rotation.y = Math.sin(elapsedTime * 0.8) * 0.08;
    }

    // 2. Flower gentle rotation & glow when open
    if (this.isOpened && this.flower) {
      this.flower.rotation.y += 0.006;
      this.flower.position.y = 0.95 + Math.sin(elapsedTime * 2.0) * 0.04;
    }

    // 3. Idle dust particles drift
    if (this.idleParticles) {
      this.idleParticles.rotation.y = elapsedTime * 0.03;
      const positions = this.idleParticles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length / 3; i++) {
        positions[i * 3 + 1] -= 0.003;
        if (positions[i * 3 + 1] < 0) positions[i * 3 + 1] = 5.0;
      }
      this.idleParticles.geometry.attributes.position.needsUpdate = true;
    }

    // 4. Confetti burst animation
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
          velos[i].vy -= 0.08; // gravity
          velos[i].life -= 0.008;
        }
      }
      this.burstParticles.geometry.attributes.position.needsUpdate = true;
      if (activeCount === 0) {
        this.burstParticles.userData.active = false;
        gsap.to(this.burstParticles.material, { opacity: 0, duration: 0.5 });
      }
    }

    // 5. Update controls & render
    if (this.controls) this.controls.update();
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }
}
