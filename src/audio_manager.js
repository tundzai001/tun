/**
 * Audio Manager: Synthesizes magical sound effects using Web Audio API
 * and manages background music with smooth crossfading.
 */

class AudioManager {
  constructor() {
    this.ctx = null;
    this.bgAudio = null;
    this.isPlayingMusic = false;
    this.musicUrl = 'https://treuah.netlify.app/ordinary.mp3';
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Synthesize magical unbox chime & whoosh
  playUnboxSound() {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // 1. Crystal Chime Chord (Harmonics)
    const freqs = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98, 2093.00];
    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.04);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08 / (idx + 1), now + idx * 0.04 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 2.4);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + idx * 0.04);
      osc.stop(now + idx * 0.04 + 2.5);
    });

    // 2. Magic Rising Whoosh
    const oscWhoosh = this.ctx.createOscillator();
    const whooshGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    oscWhoosh.type = 'sawtooth';
    oscWhoosh.frequency.setValueAtTime(140, now);
    oscWhoosh.frequency.exponentialRampToValueAtTime(880, now + 0.9);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, now);
    filter.frequency.exponentialRampToValueAtTime(2500, now + 0.9);

    whooshGain.gain.setValueAtTime(0.001, now);
    whooshGain.gain.linearRampToValueAtTime(0.045, now + 0.35);
    whooshGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    oscWhoosh.connect(filter);
    filter.connect(whooshGain);
    whooshGain.connect(this.ctx.destination);

    oscWhoosh.start(now);
    oscWhoosh.stop(now + 1.3);
  }

  // Sparkle chime when flower blooms
  playBloomSound() {
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const notes = [1046.5, 1318.5, 1568.0, 2093.0, 2637.0];
    notes.forEach((f, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now + i * 0.08);

      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.05, now + i * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 1.9);
    });
  }

  // Background music management
  setupMusic(url) {
    if (url) this.musicUrl = url;
    if (!this.bgAudio) {
      this.bgAudio = new Audio(this.musicUrl);
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.55;
    }
  }

  toggleMusic() {
    if (!this.bgAudio) this.setupMusic();
    if (this.isPlayingMusic) {
      this.bgAudio.pause();
      this.isPlayingMusic = false;
    } else {
      this.bgAudio.play().then(() => {
        this.isPlayingMusic = true;
      }).catch(err => {
        console.warn('Audio play prevented:', err);
      });
    }
    return this.isPlayingMusic;
  }

  startMusic() {
    if (!this.bgAudio) this.setupMusic();
    if (!this.isPlayingMusic) {
      this.bgAudio.play().then(() => {
        this.isPlayingMusic = true;
      }).catch(err => console.warn('Music play:', err));
    }
  }
}

export const audioManager = new AudioManager();
