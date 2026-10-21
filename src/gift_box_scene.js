import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import gsap from 'gsap';

export class GiftBoxScene {
  constructor(canvas, onReady) {
    this.canvas = canvas;
    this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 0.95;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const room = new RoomEnvironment();
    this.environment = pmrem.fromScene(room, 0.04);
    this.scene.environment = this.environment.texture;
    this.scene.environmentIntensity = 0.65;
    room.dispose();
    pmrem.dispose();
    this.scene.add(new THREE.HemisphereLight(0xffe8db, 0x30202b, 0.65));
    const key = new THREE.DirectionalLight(0xffead5, 2.4);
    key.position.set(3, 6, 5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.normalBias = 0.035;
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0xff9cae, 1.2);
    rim.position.set(-4, 3, -2);
    this.scene.add(rim);
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.enableZoom = false;
    this.controls.minPolarAngle = 0.95;
    this.controls.maxPolarAngle = 1.5;
    this.controls.minAzimuthAngle = -0.65;
    this.controls.maxAzimuthAngle = 0.75;
    this.controls.target.set(0, 1.25, 0);
    this.controls.enabled = false;
    this.buildGift();
    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(canvas.parentElement);
    this.onResize();
    this.renderer.setAnimationLoop(() => {
      this.controls.update();
      if (this.sparkleProgress.value > 0 && this.sparkleProgress.value < 1) {
        const progress = this.sparkleProgress.value;
        const positions = this.sparkles.geometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const angle = i * 2.39996;
          const radius = progress * (0.35 + (i % 9) * 0.09);
          positions.setXYZ(i, Math.cos(angle) * radius, 0.9 + progress * (0.5 + (i % 11) * 0.14) - progress * progress * 0.6, Math.sin(angle) * radius);
        }
        positions.needsUpdate = true;
      }
      this.renderer.render(this.scene, this.camera);
    });
    canvas.dataset.state = 'loading';
    this.renderer.compileAsync(this.scene, this.camera).then(() => {
      canvas.dataset.state = 'ready';
      onReady();
    }).catch(error => onReady(error));
  }

  rounded(w, h, d, material, parent, x = 0, y = 0, z = 0, radius = 0.035) {
    const mesh = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, radius), material);
    mesh.position.set(x, y, z);
    mesh.castShadow = mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  buildGift() {
    const fabricCanvas = document.createElement('canvas');
    fabricCanvas.width = fabricCanvas.height = 128;
    const fabricContext = fabricCanvas.getContext('2d');
    const fabricPixels = fabricContext.createImageData(128, 128);
    for (let i = 0; i < fabricPixels.data.length; i += 4) {
      const value = 100 + Math.random() * 55;
      fabricPixels.data.set([value, value, value, 255], i);
    }
    fabricContext.putImageData(fabricPixels, 0, 0);
    const fabric = new THREE.CanvasTexture(fabricCanvas);
    fabric.wrapS = fabric.wrapT = THREE.RepeatWrapping;
    fabric.repeat.set(5, 5);
    const velvet = new THREE.MeshPhysicalMaterial({ color: 0x561126, roughness: 0.65, metalness: 0.03, sheen: 0.3, sheenColor: 0x9a3b54, sheenRoughness: 0.7, bumpMap: fabric, bumpScale: 0.008 });
    const lining = new THREE.MeshStandardMaterial({ color: 0x35101c, roughness: 0.95 });
    const gold = new THREE.MeshPhysicalMaterial({ color: 0xe3bc7c, metalness: 0.7, roughness: 0.32 });
    const satin = new THREE.MeshPhysicalMaterial({ color: 0xe3c39a, metalness: 0.32, roughness: 0.34, sheen: 0.8, sheenColor: 0xffefd8, side: THREE.DoubleSide });
    this.gift = new THREE.Group();
    this.gift.rotation.y = -0.22;
    this.scene.add(this.gift);
    this.rounded(1.64, 0.12, 1.4, velvet, this.gift, 0, 0.12);
    this.rounded(1.64, 0.86, 0.08, velvet, this.gift, 0, 0.53, 0.66);
    this.rounded(1.64, 0.86, 0.08, velvet, this.gift, 0, 0.53, -0.66);
    this.rounded(0.08, 0.86, 1.3, velvet, this.gift, -0.78, 0.53);
    this.rounded(0.08, 0.86, 1.3, velvet, this.gift, 0.78, 0.53);
    this.rounded(1.46, 0.09, 1.2, lining, this.gift, 0, 0.27);
    this.rounded(1.65, 0.018, 1.41, gold, this.gift, 0, 0.16, 0, 0.008);
    for (const x of [-0.78, 0.78]) this.rounded(0.085, 0.02, 1.4, gold, this.gift, x, 0.96, 0, 0.008);
    for (const z of [-0.66, 0.66]) this.rounded(1.64, 0.02, 0.085, gold, this.gift, 0, 0.96, z, 0.008);
    this.rounded(0.23, 0.83, 0.012, satin, this.gift, 0, 0.55, 0.707, 0.005);
    this.rounded(0.23, 0.83, 0.012, satin, this.gift, 0, 0.55, -0.707, 0.005);
    this.lid = new THREE.Group();
    this.lid.position.y = 1.04;
    this.gift.add(this.lid);
    this.rounded(1.76, 0.18, 1.52, velvet, this.lid);
    this.rounded(1.77, 0.022, 1.53, gold, this.lid, 0, -0.065, 0, 0.01);
    this.rounded(0.24, 0.014, 1.54, satin, this.lid, 0, 0.098, 0, 0.005);
    this.rounded(1.78, 0.014, 0.24, satin, this.lid, 0, 0.106, 0, 0.005);
    // Broad satin ribbon surfaces, with soft folds at the knot.
    for (const side of [-1, 1]) {
      const curve = new THREE.CubicBezierCurve3(new THREE.Vector3(0, 0.15, 0), new THREE.Vector3(side * 1.05, 0.85, -0.1), new THREE.Vector3(side * 0.95, 0.12, -0.2), new THREE.Vector3(0, 0.15, 0));
      const vertices = [], indices = [];
      for (let i = 0; i <= 64; i++) {
        const p = curve.getPoint(i / 64);
        const width = 0.1 * Math.sin(Math.PI * i / 64) + 0.025;
        for (const edge of [-1, 1]) vertices.push(p.x, p.y + edge * width * 0.3, p.z + edge * width);
        if (i < 64) { const a = i * 2; indices.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
      }
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setIndex(indices);
      geometry.computeVertexNormals();
      this.lid.add(new THREE.Mesh(geometry, satin));
    }
    this.rounded(0.22, 0.14, 0.22, satin, this.lid, 0, 0.18);
    const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.018, 48), gold);
    seal.rotation.x = Math.PI / 2;
    seal.position.set(0, 0.57, 0.725);
    this.gift.add(seal);
    const labelCanvas = document.createElement('canvas');
    labelCanvas.width = 512;
    labelCanvas.height = 256;
    const label = labelCanvas.getContext('2d');
    label.textAlign = 'center';
    label.fillStyle = '#d9bb8d';
    label.font = 'italic 64px Georgia';
    label.fillText('pour toi', 256, 110);
    label.font = '22px Georgia';
    label.fillText('2 0 . 1 0', 256, 162);
    const labelMap = new THREE.CanvasTexture(labelCanvas);
    labelMap.colorSpace = THREE.SRGBColorSpace;
    const labelMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.23), new THREE.MeshBasicMaterial({ map: labelMap, transparent: true, depthWrite: false, toneMapped: false }));
    labelMesh.position.set(0.43, 0.56, 0.707);
    this.gift.add(labelMesh);
    this.flower = new THREE.Group();
    this.flower.position.y = 0.5;
    this.flower.scale.setScalar(0.001);
    this.gift.add(this.flower);
    this.buildRose();
    this.buildSparkles();
    const pedestalMaterial = new THREE.MeshStandardMaterial({ color: 0x292029, roughness: 0.48, metalness: 0.22 });
    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.38, 1.42, 0.14, 96), pedestalMaterial);
    pedestal.position.y = -0.035;
    pedestal.receiveShadow = true;
    this.scene.add(pedestal);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.39, 0.008, 8, 120), gold);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.005;
    this.scene.add(ring);
  }

  buildRose() {
    const green = new THREE.MeshStandardMaterial({ color: 0x284934, roughness: 0.72, side: THREE.DoubleSide });
    const veinMaterial = new THREE.MeshStandardMaterial({ color: 0x728250, roughness: 0.85 });
    const stem = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(-0.045, 0.45, 0.015), new THREE.Vector3(0.025, 0.95, 0), new THREE.Vector3(0, 1.4, 0)]);
    this.flower.add(new THREE.Mesh(new THREE.TubeGeometry(stem, 48, 0.014, 12, false), green));
    for (const [side, height, length] of [[1, 0.65, 0.49], [-1, 0.95, 0.4]]) {
      const branch = new THREE.Group();
      branch.position.set(0, height, 0);
      branch.rotation.set(-0.25, side === 1 ? 0.15 : Math.PI + 0.15, 0.45);
      this.flower.add(branch);
      const geometry = new THREE.PlaneGeometry(1, 1, 28, 12);
      const positions = geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        const t = positions.getX(i) + 0.5;
        const u = positions.getY(i) * 2;
        positions.setXYZ(i, t * length, u * 0.115 * Math.sin(Math.PI * t) ** 0.8, 0.065 * Math.sin(Math.PI * t) - 0.045 * u * u * Math.sin(Math.PI * t));
      }
      geometry.computeVertexNormals();
      branch.add(new THREE.Mesh(geometry, green));
      const midrib = new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(length * 0.5, 0, 0.069), new THREE.Vector3(length, 0, 0)]);
      branch.add(new THREE.Mesh(new THREE.TubeGeometry(midrib, 24, 0.002, 5, false), veinMaterial));
      for (let k = 1; k < 5; k++) {
        const t = k / 6;
        for (const edge of [-1, 1]) {
          const vein = new THREE.QuadraticBezierCurve3(new THREE.Vector3(t * length, 0, 0.067 * Math.sin(Math.PI * t)), new THREE.Vector3((t + 0.09) * length, edge * 0.05, 0.046), new THREE.Vector3((t + 0.16) * length, edge * 0.09 * Math.sin(Math.PI * t), 0.023));
          branch.add(new THREE.Mesh(new THREE.TubeGeometry(vein, 8, 0.0008, 3, false), veinMaterial));
        }
      }
    }

    this.bloom = new THREE.Group();
    this.bloom.position.y = 1.38;
    this.bloom.rotation.set(0.68, -0.12, -0.07);
    this.flower.add(this.bloom);
    // Continuous rose surface by Paul Nylander, with our own sampling, shading
    // and bud morph. https://nylander.wordpress.com/2006/06/21/rose-shaped-parametric-surface/
    const radialSteps = 36, angularSteps = 900;
    const positions = [], closed = [], colors = [], indices = [], uvs = [];
    for (let j = 0; j <= angularSteps; j++) {
      const theta = -2 + j / angularSteps * (20 * Math.PI + 2);
      const phi = Math.PI / 2 * Math.exp(-theta / (8 * Math.PI));
      const phase = ((3.6 * theta % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      const scallop = 1 - 0.5 * (1.25 * (1 - phase / Math.PI) ** 2 - 0.25) ** 2;
      for (let i = 0; i <= radialSteps; i++) {
        const t = i / radialSteps;
        const fold = 1.95653 * t * t * (1.27689 * t - 1) ** 2 * Math.sin(phi);
        const radius = scallop * (t * Math.sin(phi) + fold * Math.cos(phi));
        const height = scallop * (t * Math.cos(phi) - fold * Math.sin(phi));
        const x = radius * Math.sin(theta) * 0.62;
        const y = height * 0.48;
        const z = radius * Math.cos(theta) * 0.62;
        positions.push(x, y, z);
        closed.push(x * 0.3, y * 0.75 + t * 0.12, z * 0.3);
        uvs.push(phase / (2 * Math.PI), t);
        const color = new THREE.Color(0x460b20).lerp(new THREE.Color(0xb94365), Math.pow(t, 0.65) * 0.64 + 0.06 * Math.sin(theta * 0.12));
        colors.push(color.r, color.g, color.b);
        if (i < radialSteps && j < angularSteps) {
          const a = j * (radialSteps + 1) + i, b = a + radialSteps + 1;
          indices.push(a, b, a + 1, a + 1, b, b + 1);
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    geometry.morphAttributes.position = [new THREE.Float32BufferAttribute(closed, 3)];
    const budGeometry = geometry.clone();
    budGeometry.setAttribute('position', new THREE.Float32BufferAttribute(closed, 3));
    budGeometry.computeVertexNormals();
    geometry.morphAttributes.normal = [budGeometry.attributes.normal.clone()];
    budGeometry.dispose();
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = textureCanvas.height = 128;
    const context = textureCanvas.getContext('2d');
    const pixels = context.createImageData(128, 128);
    for (let i = 0; i < pixels.data.length; i += 4) {
      const value = 120 + Math.random() * 20 + 8 * Math.sin((i / 4 % 128) * 0.8);
      pixels.data.set([value, value, value, 255], i);
    }
    context.putImageData(pixels, 0, 0);
    const petalMaterial = new THREE.MeshPhysicalMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.72, sheen: 0.18, sheenColor: 0x9e3855, sheenRoughness: 0.85, bumpMap: new THREE.CanvasTexture(textureCanvas), bumpScale: 0.003 });
    this.roseHead = new THREE.Mesh(geometry, petalMaterial);
    this.bloom.add(this.roseHead);
    // The green calyx supports the blossom, without a visible stem/flower gap.
    const calyx = new THREE.Mesh(new THREE.SphereGeometry(0.09, 24, 16), green);
    calyx.scale.set(0.8, 1.15, 0.8);
    calyx.position.y = -0.035;
    this.bloom.add(calyx);
  }

  buildSparkles() {
    this.sparkleProgress = { value: 0 };
    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = textureCanvas.height = 32;
    const context = textureCanvas.getContext('2d');
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, '#fff4df');
    gradient.addColorStop(0.18, '#e8cba0');
    gradient.addColorStop(1, 'rgba(232,203,160,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 32, 32);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(72 * 3), 3));
    this.sparkles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xffdca6, size: 0.04, transparent: true, opacity: 0, depthWrite: false, map: new THREE.CanvasTexture(textureCanvas), blending: THREE.AdditiveBlending }));
    this.gift.add(this.sparkles);
  }

  onResize() {
    const { width, height } = this.canvas.parentElement.getBoundingClientRect();
    if (!width || !height) return;
    this.camera.aspect = width / height;
    this.camera.position.set(3.1, 3, 6.5).multiplyScalar(Math.max(1, 0.72 / this.camera.aspect));
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.controls.update();
  }

  playUnboxingSequence({ onWingsReady, onLetterReady } = {}) {
    if (this.isAnimating || this.isOpened) return;
    this.isAnimating = true;
    this.canvas.dataset.state = 'opening';
    this.controls.enabled = false;
    this.timeline = gsap.timeline({ onComplete: () => {
      this.isAnimating = false;
      this.isOpened = true;
      this.controls.enabled = true;
      this.canvas.dataset.state = 'open';
      onLetterReady?.();
    } });
    const duration = this.reducedMotion ? 0 : 1.8;
    this.timeline.to(this.lid.position, { y: 1.55, duration: duration * 0.36, ease: 'power2.out' }, 0);
    this.timeline.to(this.lid.position, { x: -0.85, y: 0.68, z: -1.0, duration: duration * 0.8, ease: 'power2.inOut' }, duration * 0.25);
    this.timeline.to(this.lid.rotation, { x: -1.4, y: -0.2, z: -0.5, duration, ease: 'power2.inOut' }, duration * 0.15);
    this.timeline.to(this.flower.scale, { x: 1, y: 1, z: 1, duration, ease: 'power3.out' }, duration * 0.3);
    this.timeline.to(this.flower.position, { y: 0.85, duration, ease: 'power3.out' }, duration * 0.3);
    this.roseHead.morphTargetInfluences[0] = 1;
    this.timeline.to(this.roseHead.morphTargetInfluences, { 0: 0, duration: duration * 1.1, ease: 'sine.inOut' }, duration * 0.55);
    this.timeline.fromTo(this.flower.rotation, { z: -0.055 }, { z: 0, duration: duration * 1.4, ease: 'elastic.out(0.6,0.4)' }, duration * 0.45);
    if (!this.reducedMotion) {
      this.sparkleProgress.value = 0.001;
      this.timeline.to(this.sparkleProgress, { value: 1, duration: 2.5, ease: 'power1.out' }, 0.4);
      this.timeline.fromTo(this.sparkles.material, { opacity: 0.85 }, { opacity: 0, duration: 2.2, ease: 'power1.in' }, 0.7);
    }
    this.timeline.call(() => onWingsReady?.(), [], 0);
  }

  replay() {
    this.timeline?.kill();
    this.controls.enabled = false;
    this.isOpened = false;
    this.canvas.dataset.state = 'closing';
    const duration = this.reducedMotion ? 0 : 0.7;
    this.timeline = gsap.timeline({ onComplete: () => {
      this.reset();
      this.playUnboxingSequence();
    } });
    this.timeline.to(this.flower.scale, { x: 0.001, y: 0.001, z: 0.001, duration: duration * 0.8, ease: 'power2.in' }, 0);
    this.timeline.to(this.lid.position, { x: 0, y: 1.04, z: 0, duration, ease: 'power2.inOut' }, duration * 0.35);
    this.timeline.to(this.lid.rotation, { x: 0, y: 0, z: 0, duration, ease: 'power2.inOut' }, duration * 0.35);
    this.timeline.to(this.sparkles.material, { opacity: 0, duration: duration * 0.3 }, 0);
  }

  reset() {
    this.timeline?.kill();
    this.isAnimating = this.isOpened = false;
    this.lid.position.set(0, 1.04, 0);
    this.lid.rotation.set(0, 0, 0);
    this.flower.position.y = 0.5;
    this.flower.scale.setScalar(0.001);
    this.flower.rotation.z = 0;
    this.sparkleProgress.value = 0;
    this.sparkles.material.opacity = 0;
  }
}
