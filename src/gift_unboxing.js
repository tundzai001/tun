import { GiftBoxScene } from './gift_box_scene.js';
import { audioManager } from './audio_manager.js';
import { october20Data } from '../data.js';
import gsap from 'gsap';

const paths = {
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  music: '<path d="M9 18V5l12-2v13M9 9l12-2"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="18" cy="16" rx="3" ry="3"/>',
  replay: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  gift: '<rect x="4" y="10" width="16" height="11" rx="1"/><path d="M12 7v14M3 7h18v4H3z"/><path d="M12 7C5 7 5 0 9 3l3 4c7 0 7-7 3-4l-3 4"/>',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;

export class GiftUnboxingApp {
  constructor() {
    this.photos = [
      { src: 'images/love/photo_lib_1.jpg', title: 'Một chút dịu dàng', note: 'Chỉ cần là em, mọi điều đều trở nên đặc biệt.', position: '50% 38%' },
      { src: 'images/love/photo_lib_4.jpg', title: 'Nụ cười anh thương', note: 'Khoảnh khắc bình thường. Người thì đặc biệt.', position: '55% 50%' },
      { src: 'images/love/photo_lib_2.jpg', title: 'Cùng em đi khắp nơi', note: 'Đường xa đến mấy, có em là thành nhà.', position: '50% 45%' },
      { src: 'images/love/photo_lib_3.jpg', title: 'Bình yên là em', note: 'Giữ lại một ngày thật nhẹ, và một người thật thương.', position: '50% 45%' },
      { src: 'images/love/photo_lib_5.jpg', title: 'Dành riêng cho em', note: 'Em luôn xứng đáng với những điều đẹp nhất.', position: '50% 35%' },
    ];
    this.index = 0;
    this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.dialogMotion = new WeakMap();
    this.entered = /gift\.html$/.test(location.pathname);
    this.createDOM();
    this.setupMotion();
    audioManager.setupMusic(october20Data.song?.file);
    this.setupEvents();
    this.setupScene();
  }

  createDOM() {
    document.getElementById('gift-app-container').innerHTML = `
      <header class="site-header"><a class="wordmark" href="./index.html">${icon('heart')}<span>our little universe<span class="wordmark-dot">.</span></span></a>
        <span class="header-note">HÀ NỘI GỬI THÀNH ĐÔ · BẰNG TẤT CẢ YÊU THƯƠNG</span>
        <button class="music-button" id="music-toggle" aria-pressed="false">${icon('music')}<span>Bật nhạc</span></button>
      </header>
      <main class="gift-layout" id="gift-main">
        <section class="love-copy"><p class="eyebrow"><span></span> HAPPY WOMEN’S DAY · 20.10</p>
          <h1>Cả một <br>vũ trụ,<br><em>chỉ tặng em.</em></h1>
          <p class="dedication">Một bông hồng không vội tàn.<br>Một lời yêu chưa bao giờ cũ.<br>Và tất cả dịu dàng, dành riêng cho em.</p>
          <button class="primary-button" id="read-letter">${icon('mail')} Đọc thư anh viết ${icon('arrow')}</button>
          <div class="love-signature"><span>Với tất cả yêu thương,</span><strong>Anh của em</strong></div>
        </section>
        <section class="gift-stage" aria-label="Hộp quà và hoa hồng 3D">
          <div class="stage-halo" aria-hidden="true"></div><span class="stage-orbit" aria-hidden="true"></span>
          <div class="stage-label"><span class="tiny-star">✦</span> FROM HANOI, WITH LOVE</div>
          <div class="canvas-wrap"><canvas id="gift-webgl-canvas" aria-label="Kéo để xoay hộp quà. Có thể dùng nút đặt lại góc nhìn."></canvas>
            <div id="scene-status" role="status"><span class="loading-ring"></span>Đang gói ghém yêu thương…</div>
          </div>
          <div class="stage-controls"><span id="rotate-hint">Kéo nhẹ để ngắm món quà</span><button id="replay-gift" class="text-button" disabled>${icon('replay')} Mở lại</button></div>
        </section>
        <section class="memory-section" aria-label="Album ảnh của em"><div class="memory-heading"><span class="eyebrow">NHỮNG ĐIỀU ANH THƯƠNG</span><span id="photo-number">01 / 05</span></div>
          <button class="portrait-button" id="open-photo" aria-label="Xem nguyên ảnh"><img id="portrait" src="${this.photos[0].src}" alt="${this.photos[0].title}" fetchpriority="high"><span class="portrait-shade"></span><span class="portrait-caption"><small>MY FAVORITE PERSON</small><strong id="photo-title">${this.photos[0].title}</strong></span><span class="expand-photo">${icon('expand')}</span></button>
          <div class="photo-thumbnails" aria-label="Chọn ảnh">${this.photos.map((photo, i) => `<button class="thumbnail ${i === 0 ? 'is-active' : ''}" data-photo="${i}" aria-label="Ảnh ${i + 1}: ${photo.title}" aria-pressed="${i === 0}"><img src="${photo.src}" alt="" loading="eager" style="object-position:${photo.position}"></button>`).join('')}</div>
          <p class="memory-note" id="photo-note">${this.photos[0].note}</p>
        </section>
      </main>
      <footer class="site-footer"><span>20 / 10 <i>—</i> FOR MY ONE & ONLY</span><span>Từ Hà Nội, thương em đến tận Thành Đô.</span><a href="./universe.html">Khám phá vũ trụ ${icon('arrow')}</a></footer>
      <dialog id="letter-dialog" class="letter-dialog"><button class="dialog-close" data-close aria-label="Đóng thư">${icon('close')}</button><article><span class="eyebrow">MỘT LÁ THƯ DÀNH RIÊNG CHO EM</span><h2>${october20Data.letter.title}</h2><div class="letter-body">${october20Data.letter.content}</div><p class="letter-signature">Thương em, hôm nay và cả mai sau.</p></article></dialog>
      <dialog id="photo-dialog" class="photo-dialog"><button class="dialog-close" data-close aria-label="Đóng ảnh">${icon('close')}</button><div class="lightbox-image"><img id="full-photo" alt=""><button class="photo-nav previous" id="photo-prev" aria-label="Ảnh trước">${icon('arrow')}</button><button class="photo-nav next" id="photo-next" aria-label="Ảnh tiếp">${icon('arrow')}</button></div><div class="lightbox-bottom"><span id="full-title"></span><span id="full-number" aria-live="polite"></span></div></dialog>
      ${this.entered ? '' : `<div class="entrance" id="entrance"><div class="entrance-orbit" aria-hidden="true"></div><p class="eyebrow">MỘT GÓC VŨ TRỤ DÀNH RIÊNG CHO EM</p><h2>Our Little<br><em>Universe.</em></h2><p>Có một lời yêu từ Hà Nội đang chờ em.</p><button id="enter-gift" class="entrance-button">Chạm để mở quà ${icon('arrow')}</button><span class="entrance-date">20.10 <span>WITH LOVE, ALWAYS</span></span></div>`}
    `;
    document.querySelector('.portrait-button img').style.objectPosition = this.photos[0].position;
    if (!this.entered) {
      document.body.classList.add('awaiting-gift');
      document.querySelectorAll('.site-header, #gift-main, .site-footer').forEach(element => element.inert = true);
    }
  }

  setupScene() {
    try {
      this.scene = new GiftBoxScene(document.getElementById('gift-webgl-canvas'), error => {
        if (error) { this.showSceneFallback(error); return; }
        document.getElementById('scene-status').hidden = true;
        document.getElementById('replay-gift').disabled = false;
        this.ready = true;
        if (this.entered) this.scene.playUnboxingSequence();
      });
    } catch (error) {
      this.showSceneFallback(error);
    }
  }

  showSceneFallback(error) {
    console.warn('Gift scene unavailable:', error);
    document.querySelector('.canvas-wrap').classList.add('scene-fallback');
    document.getElementById('scene-status').innerHTML = `${icon('gift')}<span>Một món quà, ngàn lời yêu.</span>`;
    document.getElementById('rotate-hint').textContent = 'Tặng em tất cả dịu dàng';
  }

  setupMotion() {
    if (this.reducedMotion) { this.reveal = gsap.timeline(); return; }
    const duration = this.reducedMotion ? 0 : 0.9;
    this.reveal = gsap.timeline({ paused: !this.entered, defaults: { duration, ease: 'power3.out' } });
    this.reveal.from('.site-header', { y: -18, opacity: 0, clearProps: 'transform,opacity' }, 0.1)
      .from('.love-copy > *', { y: 28, opacity: 0, stagger: this.reducedMotion ? 0 : 0.11, clearProps: 'transform,opacity' }, 0.15)
      .from('.gift-stage', { y: 35, opacity: 0, scale: 0.94, clearProps: 'transform,opacity' }, 0)
      .from('.memory-heading, .portrait-button', { y: 30, opacity: 0, stagger: this.reducedMotion ? 0 : 0.14, clearProps: 'transform,opacity' }, 0.35)
      .from('.thumbnail', { y: 16, opacity: 0, stagger: this.reducedMotion ? 0 : 0.06, clearProps: 'transform,opacity' }, 0.75)
      .from('.memory-note, .site-footer', { y: 10, opacity: 0, clearProps: 'transform,opacity' }, 0.9);
    if (!this.reducedMotion && !this.entered) {
      gsap.from('.entrance > :not(.entrance-orbit)', { y: 22, opacity: 0, duration: 1.1, stagger: 0.12, ease: 'power3.out', clearProps: 'transform,opacity' });
      gsap.from('.entrance-orbit', { scale: 0.78, opacity: 0, duration: 1.8, ease: 'power3.out', clearProps: 'transform,opacity' });
    }
  }

  openDialog(dialog) {
    this.dialogMotion.get(dialog)?.cancel();
    dialog.classList.remove('is-closing');
    if (!dialog.open) dialog.showModal();
    dialog.dataset.state = this.reducedMotion ? 'open' : 'opening';
    document.body.classList.add('dialog-open');
    if (this.reducedMotion) return;
    const animation = dialog.animate([
      { opacity: 0, transform: 'translateY(34px) scale(.94)', filter: 'blur(6px)' },
      { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
    ], { duration: 520, easing: 'cubic-bezier(.16,1,.3,1)' });
    this.dialogMotion.set(dialog, animation);
    if (dialog.id === 'letter-dialog') gsap.fromTo(dialog.querySelectorAll('article > .eyebrow, article > h2, .letter-body p, .letter-signature'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.055, delay: 0.12, ease: 'power3.out', overwrite: true, clearProps: 'transform,opacity' });
    animation.finished.then(() => { dialog.dataset.state = 'open'; }).catch(() => {});
  }

  closeDialog(dialog) {
    if (!dialog.open || dialog.dataset.state === 'closing') return;
    const style = getComputedStyle(dialog);
    const from = { opacity: style.opacity, transform: style.transform, filter: style.filter };
    this.dialogMotion.get(dialog)?.cancel();
    const finish = () => {
      dialog.close();
      dialog.classList.remove('is-closing');
      dialog.dataset.state = 'closed';
      document.body.classList.remove('dialog-open');
    };
    if (this.reducedMotion) { finish(); return; }
    dialog.dataset.state = 'closing';
    dialog.classList.add('is-closing');
    const animation = dialog.animate([from, { opacity: 0, transform: 'translateY(22px) scale(.97)', filter: 'blur(4px)' }], { duration: 280, easing: 'cubic-bezier(.4,0,1,1)', fill: 'forwards' });
    this.dialogMotion.set(dialog, animation);
    animation.finished.then(() => { finish(); animation.cancel(); }).catch(() => {});
  }

  swapImage(image, photo) {
    if (image.getAttribute('src') === photo.src) return;
    image.parentElement.querySelectorAll('.photo-outgoing').forEach(element => element.remove());
    const outgoing = image.cloneNode();
    outgoing.removeAttribute('id');
    outgoing.classList.add('photo-outgoing');
    outgoing.alt = '';
    outgoing.setAttribute('aria-hidden', 'true');
    if (!this.reducedMotion && image.getAttribute('src')) image.after(outgoing);
    image.src = photo.src;
    image.alt = photo.title;
    if (this.reducedMotion) return;
    image.getAnimations().forEach(animation => animation.cancel());
    image.animate([{ opacity: 0.35, transform: 'scale(1.06)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 650, easing: 'cubic-bezier(.16,1,.3,1)' });
    if (outgoing.isConnected) outgoing.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: 'ease-out' }).finished.then(() => outgoing.remove()).catch(() => outgoing.remove());
  }

  selectPhoto(index) {
    this.index = (index + this.photos.length) % this.photos.length;
    const photo = this.photos[this.index];
    const portrait = document.getElementById('portrait');
    this.swapImage(portrait, photo);
    portrait.style.objectPosition = photo.position;
    document.getElementById('photo-title').textContent = photo.title;
    document.getElementById('photo-note').textContent = photo.note;
    const counter = `${String(this.index + 1).padStart(2, '0')} / 05`;
    document.getElementById('photo-number').textContent = counter;
    this.swapImage(document.getElementById('full-photo'), photo);
    document.getElementById('full-title').textContent = photo.title;
    document.getElementById('full-number').textContent = counter;
    document.querySelectorAll('[data-photo]').forEach((button, i) => {
      button.classList.toggle('is-active', i === this.index);
      button.setAttribute('aria-pressed', String(i === this.index));
    });
    if (!this.reducedMotion) gsap.fromTo('#photo-title, #photo-note, #full-title', { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', overwrite: true, clearProps: 'transform,opacity' });
  }

  setupEvents() {
    document.getElementById('enter-gift')?.addEventListener('click', () => {
      this.entered = true;
      document.body.classList.remove('awaiting-gift');
      document.querySelectorAll('.site-header, #gift-main, .site-footer').forEach(element => element.inert = false);
      const entrance = document.getElementById('entrance');
      entrance.classList.add('is-dismissed');
      entrance.inert = true;
      this.startMusic();
      this.reveal.play(0);
      if (this.ready) this.scene.playUnboxingSequence();
      document.getElementById('read-letter').focus({ preventScroll: true });
    }, { once: true });
    document.getElementById('read-letter').addEventListener('click', () => {
      this.openDialog(document.getElementById('letter-dialog'));
    });
    document.getElementById('replay-gift').addEventListener('click', () => {
      this.scene.replay();
    });
    document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => this.selectPhoto(Number(button.dataset.photo))));
    document.getElementById('open-photo').addEventListener('click', () => {
      this.selectPhoto(this.index);
      this.openDialog(document.getElementById('photo-dialog'));
    });
    document.getElementById('photo-prev').addEventListener('click', () => this.selectPhoto(this.index - 1));
    document.getElementById('photo-next').addEventListener('click', () => this.selectPhoto(this.index + 1));
    document.querySelectorAll('dialog').forEach(dialog => {
      dialog.querySelector('[data-close]').addEventListener('click', () => this.closeDialog(dialog));
      dialog.addEventListener('cancel', event => { event.preventDefault(); this.closeDialog(dialog); });
      dialog.addEventListener('click', event => { if (event.target === dialog) {
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) this.closeDialog(dialog);
      } });
    });
    document.getElementById('photo-dialog').addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        this.selectPhoto(this.index + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    const musicButton = document.getElementById('music-toggle');
    musicButton.addEventListener('click', () => {
      if (audioManager.bgAudio.paused) this.startMusic();
      else audioManager.bgAudio.pause();
    });
    for (const event of ['play', 'pause', 'error']) audioManager.bgAudio.addEventListener(event, () => {
      const playing = !audioManager.bgAudio.paused && !audioManager.bgAudio.error;
      musicButton.setAttribute('aria-pressed', String(playing));
      musicButton.querySelector('span').textContent = playing ? 'Đang phát' : 'Bật nhạc';
    });
  }

  startMusic() {
    audioManager.bgAudio.play().catch(() => {
      document.querySelector('#music-toggle span').textContent = 'Thử bật nhạc';
    });
  }
}

new GiftUnboxingApp();
