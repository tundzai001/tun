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
    const stemMaterial = new THREE.MeshStandardMaterial({ color: 0x315239, roughness: 0.65 });
    const stem = new THREE.CatmullRomCurve3([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0.04, 0.5, 0), new THREE.Vector3(-0.04, 1.1, 0), new THREE.Vector3(0, 1.5, 0)]);
    this.flower.add(new THREE.Mesh(new THREE.TubeGeometry(stem, 40, 0.018, 10, false), stemMaterial));
    for (const side of [-1, 1]) {
      const leaf = new THREE.Shape();
      leaf.moveTo(0, 0); leaf.bezierCurveTo(0.12, 0.2, 0.42, 0.2, 0.58, 0.06); leaf.bezierCurveTo(0.4, -0.08, 0.12, -0.1, 0, 0);
      const mesh = new THREE.Mesh(new THREE.ShapeGeometry(leaf, 20), new THREE.MeshStandardMaterial({ color: 0x3a6240, side: THREE.DoubleSide, roughness: 0.7 }));
      mesh.position.set(0, side === 1 ? 0.72 : 0.98, 0);
      mesh.rotation.set(-0.4, side === 1 ? 0.2 : Math.PI - 0.2, 0.35);
      this.flower.add(mesh);
    }
    const bloom = new THREE.Group();
    bloom.position.y = 1.46;
    bloom.rotation.x = 0.62;
    this.flower.add(bloom);
    const petalMaterial = new THREE.MeshPhysicalMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.6, sheen: 0.25, sheenColor: 0xc85e7a, sheenRoughness: 0.7 });
    for (let layer = 0; layer < 5; layer++) {
      const count = 5 + layer;
      for (let n = 0; n < count; n++) {
        const geometry = new THREE.PlaneGeometry(1, 1, 22, 22);
        const positions = geometry.attributes.position;
        const colors = [];
        const angle = n / count * Math.PI * 2 + layer * 1.7;
        for (let i = 0; i < positions.count; i++) {
          const u = (positions.getX(i) + 0.5) * 2 - 1;
          const v = positions.getY(i) + 0.5;
          const spread = (0.06 + layer * 0.065) * Math.sin(v * Math.PI * 0.65);
          const a = angle + u * (0.7 + layer * 0.035) * Math.sin(v * Math.PI * 0.58);
          const r = 0.025 + layer * 0.032 + spread * v + 0.09 * Math.pow(v, 5);
          const y = v * (0.6 - layer * 0.07) - 0.12 * Math.pow(v, 6) - 0.09 * u * u * v + 0.012 * Math.sin(u * 4 + n) * v ** 4;
          positions.setXYZ(i, Math.sin(a) * r, y, Math.cos(a) * r);
          const color = new THREE.Color(0x530b21).lerp(new THREE.Color(0xca4569), v * 0.7 + layer * 0.025);
          colors.push(color.r, color.g, color.b);
        }
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.computeVertexNormals();
        const petal = new THREE.Mesh(geometry, petalMaterial);
        petal.castShadow = true;
        bloom.add(petal);
      }
    }
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
    const duration = this.reducedMotion ? 0 : 1.6;
    this.timeline.to(this.lid.position, { x: -0.85, y: 0.68, z: -1.0, duration, ease: 'power2.inOut' }, 0);
    this.timeline.to(this.lid.rotation, { x: -1.4, y: -0.2, z: -0.5, duration, ease: 'power2.inOut' }, 0);
    this.timeline.to(this.flower.scale, { x: 1, y: 1, z: 1, duration, ease: 'power2.out' }, duration * 0.3);
    this.timeline.to(this.flower.position, { y: 0.85, duration, ease: 'power2.out' }, duration * 0.3);
    this.timeline.call(() => onWingsReady?.(), [], 0);
  }

  reset() {
    this.timeline?.kill();
    this.isAnimating = this.isOpened = false;
    this.lid.position.set(0, 1.04, 0);
    this.lid.rotation.set(0, 0, 0);
    this.flower.position.y = 0.5;
    this.flower.scale.setScalar(0.001);
    this.onResize();
  }
}
