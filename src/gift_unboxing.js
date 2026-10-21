import { GiftBoxScene } from './gift_box_scene.js';
import { audioManager } from './audio_manager.js';
import { october20Data, birthdayData } from '../data.js';

class GiftUnboxingApp {
  constructor() {
    this.scene = null;
    this.canvas = null;

    const activeData = october20Data || birthdayData;

    this.photos = [
      'images/love/photo_lib_1.jpg',
      'images/love/photo_lib_2.jpg',
      'images/love/photo_lib_4.jpg',
      'images/love/photo_lib_3.jpg',
      'images/love/photo_lib_5.jpg'
    ];

    this.letterData = (activeData && activeData.letter) ? activeData.letter : {
      title: "Chúc Mừng Ngày 20/10 Em Yêu Của Anh 🌹❤️",
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

    // Left Wing (2 photos)
    const leftPhotos = [
      { src: this.photos[0], title: 'Xinh đẹp rạng rỡ ✨', rot: -5 },
      { src: this.photos[1], title: 'Dạo bước bình yên 🌿', rot: 4 }
    ];

    // Right Wing (3 photos)
    const rightPhotos = [
      { src: this.photos[2], title: 'Nụ cười tỏa nắng 🌸', rot: 5 },
      { src: this.photos[3], title: 'Dịu dàng cuốn hút 💖', rot: -4 },
      { src: this.photos[4], title: 'Em là duy nhất 🌹', rot: 6 }
    ];

    const leftWingHtml = leftPhotos.map((item, i) => `
      <div class="apple-glass-card" style="transform: rotate(${item.rot}deg);" data-index="${i}">
        <div class="apple-glass-img-wrapper">
          <img src="${item.src}" alt="${item.title}" loading="eager" />
        </div>
        <div class="apple-glass-caption">${item.title}</div>
      </div>
    `).join('');

    const rightWingHtml = rightPhotos.map((item, i) => `
      <div class="apple-glass-card" style="transform: rotate(${item.rot}deg);" data-index="${i + 2}">
        <div class="apple-glass-img-wrapper">
          <img src="${item.src}" alt="${item.title}" loading="eager" />
        </div>
        <div class="apple-glass-caption">${item.title}</div>
      </div>
    `).join('');

    container.innerHTML = `
      <!-- Loading Veil -->
      <div id="gift-loading-veil">
        <div class="apple-spinner"></div>
        <p class="loading-text">Preparing Spatial Celebration...</p>
      </div>

      <canvas id="gift-webgl-canvas"></canvas>
      <div class="spatial-ambient-glow"></div>

      <!-- Top bar -->
      <div class="spatial-top-bar">
        <div class="spatial-badge">
          <span>🌹</span>
          <span>Happy Vietnamese Women's Day 20/10</span>
        </div>
        <div class="spatial-top-actions">
          <button id="gift-gallery-btn" class="spatial-glass-btn" title="Tất Cả ${this.photos.length} Ảnh">📸</button>
          <button id="gift-music-btn" class="spatial-glass-btn" title="Bật/Tắt Nhạc">🎵</button>
          <button id="gift-back-btn" class="spatial-glass-btn" title="Về Vũ Trụ">🚀</button>
        </div>
      </div>

      <!-- Photo Wings -->
      <div id="spatial-wing-left" class="spatial-photo-wing wing-left">
        ${leftWingHtml}
      </div>
      <div id="spatial-wing-right" class="spatial-photo-wing wing-right">
        ${rightWingHtml}
      </div>

      <!-- Apple Spatial Love Letter Modal -->
      <div id="spatial-letter-backdrop" class="spatial-letter-backdrop">
        <div class="spatial-glass-modal">
          <div class="spatial-letter-header">
            <span class="spatial-pill-tag">✨ Dành Tặng Em 20/10</span>
            <h1 class="spatial-letter-title">${this.letterData.title}</h1>
            <div class="spatial-letter-divider"></div>
          </div>
          <div class="spatial-letter-body">
            ${this.letterData.content}
          </div>
          <div class="spatial-letter-footer">
            <button id="letter-minimize-btn" class="spatial-action-pill btn-secondary">
              <span>🌸</span>
              <span>Ẩn Thư (Xoay 3D)</span>
            </button>
            <button id="letter-expand-btn" class="spatial-action-pill btn-secondary">
              <span>⤢</span>
              <span>Đọc Rộng</span>
            </button>
            <button id="letter-replay-btn" class="spatial-action-pill btn-primary">
              <span>🔄</span>
              <span>Trình Chiếu Lại</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom Minimized Dock -->
      <div id="spatial-bottom-dock" class="spatial-bottom-dock">
        <button id="dock-open-letter-btn" class="spatial-dock-item">
          <span>💌</span>
          <span>Đọc Thư</span>
        </button>
        <button id="dock-replay-btn" class="spatial-dock-item">
          <span>🔄</span>
          <span>Mở Lại</span>
        </button>
        <button id="dock-gallery-btn" class="spatial-dock-item">
          <span>📸</span>
          <span>Xem ${this.photos.length} Ảnh</span>
        </button>
        <button id="dock-music-btn" class="spatial-dock-item">
          <span>🎵</span>
          <span>Nhạc</span>
        </button>
      </div>

      <!-- Spatial Lightbox for Photos -->
      <div id="spatial-lightbox" class="spatial-lightbox">
        <button id="spatial-lightbox-close" class="spatial-lightbox-close">&times;</button>
        <div class="spatial-lightbox-card">
          <button id="lightbox-prev" class="spatial-lightbox-nav nav-prev">‹</button>
          <img id="spatial-lightbox-img" class="spatial-lightbox-img" src="" alt="Photo" />
          <button id="lightbox-next" class="spatial-lightbox-nav nav-next">›</button>
        </div>
        <p id="spatial-lightbox-caption" class="spatial-lightbox-caption"></p>
        <p id="spatial-lightbox-counter" class="spatial-lightbox-counter"></p>
      </div>
    `;

    this.canvas = document.getElementById('gift-webgl-canvas');
  }

  setup3DScene() {
    const loadingVeil = document.getElementById('gift-loading-veil');
    const wingLeft = document.getElementById('spatial-wing-left');
    const wingRight = document.getElementById('spatial-wing-right');
    const letterBackdrop = document.getElementById('spatial-letter-backdrop');

    this.scene = new GiftBoxScene(this.canvas, () => {
      // 1. Models Ready: Smoothly hide loading veil
      if (loadingVeil) loadingVeil.classList.add('is-hidden');

      // 2. Auto-start cinematic unboxing after 800ms!
      setTimeout(() => {
        // Start background music automatically
        audioManager.startMusic();

        this.scene.playUnboxingSequence({
          onWingsReady: () => {
            if (wingLeft) wingLeft.classList.add('is-visible');
            if (wingRight) wingRight.classList.add('is-visible');
          },
          onLetterReady: () => {
            if (letterBackdrop) letterBackdrop.classList.add('is-open');
          }
        });
      }, 750);
    });
  }

  setupEvents() {
    const wingLeft = document.getElementById('spatial-wing-left');
    const wingRight = document.getElementById('spatial-wing-right');
    const letterBackdrop = document.getElementById('spatial-letter-backdrop');
    const letterMinimizeBtn = document.getElementById('letter-minimize-btn');
    const letterReplayBtn = document.getElementById('letter-replay-btn');
    const bottomDock = document.getElementById('spatial-bottom-dock');
    const dockOpenLetterBtn = document.getElementById('dock-open-letter-btn');
    const dockReplayBtn = document.getElementById('dock-replay-btn');
    const musicBtn = document.getElementById('gift-music-btn');
    const dockMusicBtn = document.getElementById('dock-music-btn');
    const backBtn = document.getElementById('gift-back-btn');

    // Lightbox elements
    const lightbox = document.getElementById('spatial-lightbox');
    const lightboxImg = document.getElementById('spatial-lightbox-img');
    const lightboxCaption = document.getElementById('spatial-lightbox-caption');
    const lightboxCounter = document.getElementById('spatial-lightbox-counter');
    const lightboxClose = document.getElementById('spatial-lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    const galleryBtn = document.getElementById('gift-gallery-btn');
    const dockGalleryBtn = document.getElementById('dock-gallery-btn');

    const letterExpandBtn = document.getElementById('letter-expand-btn');
    const glassModal = document.querySelector('.spatial-glass-modal');

    // Expand / Shrink Letter
    if (letterExpandBtn && glassModal) {
      letterExpandBtn.addEventListener('click', () => {
        glassModal.classList.toggle('is-expanded');
        const isExp = glassModal.classList.contains('is-expanded');
        letterExpandBtn.innerHTML = isExp ? `<span>⤓</span><span>Thu Nhỏ</span>` : `<span>⤢</span><span>Đọc Rộng</span>`;
      });
    }

    // Minimize Letter to view 3D
    if (letterMinimizeBtn) {
      letterMinimizeBtn.addEventListener('click', () => {
        letterBackdrop.classList.remove('is-open');
        bottomDock.classList.add('is-visible');
      });
    }

    // Reopen Letter from Dock
    if (dockOpenLetterBtn) {
      dockOpenLetterBtn.addEventListener('click', () => {
        bottomDock.classList.remove('is-visible');
        letterBackdrop.classList.add('is-open');
      });
    }

    // Replay sequence
    const replay = () => {
      letterBackdrop.classList.remove('is-open');
      bottomDock.classList.remove('is-visible');
      if (wingLeft) wingLeft.classList.remove('is-visible');
      if (wingRight) wingRight.classList.remove('is-visible');

      this.scene.reset();

      setTimeout(() => {
        this.scene.playUnboxingSequence({
          onWingsReady: () => {
            if (wingLeft) wingLeft.classList.add('is-visible');
            if (wingRight) wingRight.classList.add('is-visible');
          },
          onLetterReady: () => {
            if (letterBackdrop) letterBackdrop.classList.add('is-open');
          }
        });
      }, 600);
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

    // Lightbox navigation
    const updateLightboxPhoto = (idx) => {
      this.currentPhotoIndex = (idx + this.photos.length) % this.photos.length;
      const curSrc = this.photos[this.currentPhotoIndex];
      lightboxImg.src = curSrc;
      lightboxCaption.textContent = `Kỷ niệm ngọt ngào #${this.currentPhotoIndex + 1}`;
      if (lightboxCounter) {
        lightboxCounter.textContent = `Khoảnh khắc ${this.currentPhotoIndex + 1} / ${this.photos.length}`;
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
    const cards = document.querySelectorAll('.apple-glass-card');
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

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new GiftUnboxingApp());
} else {
  new GiftUnboxingApp();
}

export { GiftUnboxingApp };
