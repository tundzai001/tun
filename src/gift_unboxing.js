import { GiftBoxScene } from './gift_box_scene.js';
import { audioManager } from './audio_manager.js';
import { october20Data, birthdayData } from '../data.js';

class GiftUnboxingApp {
  constructor() {
    this.scene = null;
    this.canvas = null;

    // Use 20/10 data as prioritized active event
    const activeData = october20Data || birthdayData;

    this.photos = (activeData && activeData.photos && activeData.photos.length > 0)
      ? activeData.photos
      : [
          'images/love/photobooth_16_oct_1.jpg',
          'images/love/photo_lib_1.jpg',
          'images/love/photobooth_16_oct_2.jpg',
          'images/love/photo_lib_2.jpg',
          'images/love/photobooth_16_oct_3.jpg',
          'images/love/photo_lib_3.jpg',
          'images/love/photobooth_16_oct_4.jpg',
          'images/love/photobooth_16_oct_5.jpg'
        ];

    this.letterData = (activeData && activeData.letter) ? activeData.letter : {
      title: "Chúc Mừng Ngày 20/10 Người Yêu Tuyệt Vời Nhất Của Anh 🌹❤️",
      content: "<p>Chúc mừng ngày 20/10 em yêu! Anh chúc cô gái của anh luôn xinh đẹp, rạng rỡ và hạnh phúc nhất.</p>"
    };

    this.activeData = activeData;
    this.currentPhotoIndex = 0;
    this.init();
  }

  init() {
    this.createDOM();
    this.setup3DScene();
    this.setupEvents();
    if (this.activeData && this.activeData.song && this.activeData.song.file) {
      audioManager.setupMusic(this.activeData.song.file);
    }
  }

  createDOM() {
    const container = document.getElementById('gift-app-container') || document.body;

    // Left Wing: 3 recent sweet memories
    const leftPhotos = [
      { src: this.photos[0] || 'images/love/photobooth_16_oct_1.jpg', title: '16/10 PhotoBooth ✨', rot: -8 },
      { src: this.photos[1] || 'images/love/photo_lib_1.jpg', title: 'Khoảnh khắc ngọt ngào 💖', rot: 6 },
      { src: this.photos[2] || 'images/love/photobooth_16_oct_2.jpg', title: 'Nụ cười của em 🌸', rot: -5 }
    ];

    // Right Wing: 3 recent sweet memories
    const rightPhotos = [
      { src: this.photos[3] || 'images/love/photo_lib_2.jpg', title: 'Em xinh nhất trần đời 🌹', rot: 7 },
      { src: this.photos[4] || 'images/love/photobooth_16_oct_3.jpg', title: 'Bên nhau bình yên ✨', rot: -7 },
      { src: this.photos[5] || 'images/love/photo_lib_3.jpg', title: 'Mãi yêu em 20/10 ❤️', rot: 8 }
    ];

    const leftWingHtml = leftPhotos.map((item, i) => `
      <div class="polaroid-card" style="transform: rotate(${item.rot}deg);" data-img="${item.src}" data-index="${i}">
        <div class="polaroid-img-wrapper">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="polaroid-caption">${item.title}</div>
      </div>
    `).join('');

    const rightWingHtml = rightPhotos.map((item, i) => `
      <div class="polaroid-card" style="transform: rotate(${item.rot}deg);" data-img="${item.src}" data-index="${i + 3}">
        <div class="polaroid-img-wrapper">
          <img src="${item.src}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="polaroid-caption">${item.title}</div>
      </div>
    `).join('');

    container.innerHTML = `
      <canvas id="gift-webgl-canvas"></canvas>
      <div class="ambient-glow-layer"></div>

      <!-- Top bar -->
      <div class="gift-top-bar">
        <div class="gift-badge">
          <span>🌹</span>
          <span>Happy Vietnamese Women's Day 20/10 ✨</span>
        </div>
        <div class="gift-top-actions">
          <button id="gift-gallery-btn" class="gift-btn-circle" title="Tất Cả Ảnh Kỷ Niệm (${this.photos.length})">📸</button>
          <button id="gift-music-btn" class="gift-btn-circle" title="Bật/Tắt Nhạc">🎵</button>
          <button id="gift-back-btn" class="gift-btn-circle" title="Về Trang Chính">🚀</button>
        </div>
      </div>

      <!-- Hint to open -->
      <div id="gift-hint-box" class="gift-hint-container">
        <button id="gift-open-btn" class="gift-hint-pill">
          <span>🎁</span>
          <span>Mở món quà 20/10 bất ngờ dành cho em ✨</span>
        </button>
      </div>

      <!-- Photo Wings -->
      <div id="gift-wing-left" class="gift-photo-wing wing-left">
        ${leftWingHtml}
      </div>
      <div id="gift-wing-right" class="gift-photo-wing wing-right">
        ${rightWingHtml}
      </div>

      <!-- Royal Love Letter Modal -->
      <div id="gift-letter-backdrop" class="gift-letter-backdrop">
        <div class="gift-letter-modal">
          <div class="gift-wax-seal">🌹</div>
          <div class="gift-letter-header">
            <p class="gift-letter-kicker">Mừng Ngày Phụ Nữ Việt Nam 20/10</p>
            <h1 class="gift-letter-title">${this.letterData.title}</h1>
            <div class="gift-letter-divider"></div>
          </div>
          <div class="gift-letter-body">
            ${this.letterData.content}
          </div>
          <div class="gift-letter-footer">
            <button id="letter-minimize-btn" class="gift-action-btn btn-secondary">
              <span>👁️</span>
              <span>Ngắm Đóa Hoa & Hộp Quà 3D</span>
            </button>
            <button id="letter-replay-btn" class="gift-action-btn btn-primary">
              <span>🔄</span>
              <span>Mở Lại Quà 20/10</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Minimized Dock -->
      <div id="gift-minimized-dock" class="gift-minimized-dock">
        <button id="dock-open-letter-btn" class="gift-dock-btn">
          <span>💌</span>
          <span>Đọc Thư 20/10</span>
        </button>
        <button id="dock-replay-btn" class="gift-dock-btn">
          <span>🔄</span>
          <span>Mở Lại</span>
        </button>
        <button id="dock-gallery-btn" class="gift-dock-btn">
          <span>📸</span>
          <span>Xem ${this.photos.length} Ảnh</span>
        </button>
        <button id="dock-music-btn" class="gift-dock-btn">
          <span>🎵</span>
          <span>Nhạc</span>
        </button>
      </div>

      <!-- Lightbox for photos -->
      <div id="gift-lightbox" class="gift-lightbox">
        <button id="gift-lightbox-close" class="gift-lightbox-close">&times;</button>
        <div class="gift-lightbox-content" style="position: relative; display: flex; align-items: center; justify-content: center;">
          <button id="lightbox-prev" class="gift-btn-circle" style="position: absolute; left: -60px; z-index: 10;">‹</button>
          <img id="gift-lightbox-img" class="gift-lightbox-img" src="" alt="Zoom" />
          <button id="lightbox-next" class="gift-btn-circle" style="position: absolute; right: -60px; z-index: 10;">›</button>
        </div>
        <p id="gift-lightbox-caption" class="gift-lightbox-caption"></p>
        <p id="gift-lightbox-counter" style="font-size: 0.85rem; color: #ffd700; opacity: 0.8; margin-top: 4px;"></p>
      </div>
    `;

    this.canvas = document.getElementById('gift-webgl-canvas');
  }

  setup3DScene() {
    this.scene = new GiftBoxScene(this.canvas);
  }

  setupEvents() {
    const openBtn = document.getElementById('gift-open-btn');
    const hintBox = document.getElementById('gift-hint-box');
    const wingLeft = document.getElementById('gift-wing-left');
    const wingRight = document.getElementById('gift-wing-right');
    const letterBackdrop = document.getElementById('gift-letter-backdrop');
    const letterMinimizeBtn = document.getElementById('letter-minimize-btn');
    const letterReplayBtn = document.getElementById('letter-replay-btn');
    const minimizedDock = document.getElementById('gift-minimized-dock');
    const dockOpenLetterBtn = document.getElementById('dock-open-letter-btn');
    const dockReplayBtn = document.getElementById('dock-replay-btn');
    const musicBtn = document.getElementById('gift-music-btn');
    const dockMusicBtn = document.getElementById('dock-music-btn');
    const backBtn = document.getElementById('gift-back-btn');

    // Lightbox elements
    const lightbox = document.getElementById('gift-lightbox');
    const lightboxImg = document.getElementById('gift-lightbox-img');
    const lightboxCaption = document.getElementById('gift-lightbox-caption');
    const lightboxClose = document.getElementById('gift-lightbox-close');

    // Trigger Open Gift
    const triggerOpen = () => {
      if (this.scene.isOpened || this.scene.isAnimating) return;
      hintBox.style.opacity = '0';
      hintBox.style.pointerEvents = 'none';

      // Start music automatically on interaction
      audioManager.startMusic();

      this.scene.openGiftBox({
        onWingsReady: () => {
          wingLeft.classList.add('is-visible');
          wingRight.classList.add('is-visible');
        },
        onLetterReady: () => {
          letterBackdrop.classList.add('is-open');
        }
      });
    };

    if (openBtn) openBtn.addEventListener('click', triggerOpen);

    // Also click on 3D canvas when idle to trigger open
    this.canvas.addEventListener('click', () => {
      if (!this.scene.isOpened && !this.scene.isAnimating) {
        triggerOpen();
      }
    });

    // Minimize Letter to view 3D
    if (letterMinimizeBtn) {
      letterMinimizeBtn.addEventListener('click', () => {
        letterBackdrop.classList.remove('is-open');
        minimizedDock.classList.add('is-visible');
      });
    }

    // Reopen Letter from Dock
    if (dockOpenLetterBtn) {
      dockOpenLetterBtn.addEventListener('click', () => {
        minimizedDock.classList.remove('is-visible');
        letterBackdrop.classList.add('is-open');
      });
    }

    // Replay unboxing
    const replay = () => {
      letterBackdrop.classList.remove('is-open');
      minimizedDock.classList.remove('is-visible');
      wingLeft.classList.remove('is-visible');
      wingRight.classList.remove('is-visible');
      this.scene.reset();
      setTimeout(() => {
        hintBox.style.opacity = '1';
        hintBox.style.pointerEvents = 'auto';
      }, 800);
    };

    if (letterReplayBtn) letterReplayBtn.addEventListener('click', replay);
    if (dockReplayBtn) dockReplayBtn.addEventListener('click', replay);

    // Music toggle
    const toggleMusic = () => {
      const playing = audioManager.toggleMusic();
      const icon = playing ? '⏸' : '🎵';
      if (musicBtn) musicBtn.textContent = icon;
      if (dockMusicBtn) dockMusicBtn.innerHTML = `<span>${icon}</span><span>${playing ? 'Tắt' : 'Bật'}</span>`;
    };
    if (musicBtn) musicBtn.addEventListener('click', toggleMusic);
    if (dockMusicBtn) dockMusicBtn.addEventListener('click', toggleMusic);

    // Back button
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.href = './index.html';
      });
    }

    // Photo Lightbox logic with full gallery navigation
    const lightboxCounter = document.getElementById('gift-lightbox-counter');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryBtn = document.getElementById('gift-gallery-btn');
    const dockGalleryBtn = document.getElementById('dock-gallery-btn');

    const updateLightboxPhoto = (idx) => {
      this.currentPhotoIndex = (idx + this.photos.length) % this.photos.length;
      const curSrc = this.photos[this.currentPhotoIndex];
      lightboxImg.src = curSrc;
      lightboxCaption.textContent = `Kỷ niệm ngọt ngào #${this.currentPhotoIndex + 1}`;
      if (lightboxCounter) {
        lightboxCounter.textContent = `Ảnh ${this.currentPhotoIndex + 1} / ${this.photos.length}`;
      }
    };

    const openLightboxAt = (idx) => {
      updateLightboxPhoto(idx);
      lightbox.classList.add('is-open');
    };

    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightboxPhoto(this.currentPhotoIndex - 1);
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        updateLightboxPhoto(this.currentPhotoIndex + 1);
      });
    }

    if (galleryBtn) galleryBtn.addEventListener('click', () => openLightboxAt(0));
    if (dockGalleryBtn) dockGalleryBtn.addEventListener('click', () => openLightboxAt(0));

    // Polaroid card click
    const cards = document.querySelectorAll('.polaroid-card');
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(card.getAttribute('data-index') || '0', 10);
        openLightboxAt(idx);
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('is-open');
      });
    }
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.remove('is-open');
      });
    }
  }
}

// Auto-instantiate when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new GiftUnboxingApp());
} else {
  new GiftUnboxingApp();
}

export { GiftUnboxingApp };
