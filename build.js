import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

async function build() {
  console.log('🚀 Starting Node.js build to .mjs for GitHub Pages...');

  // Ensure dist directory exists
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }

  // 1. Bundle JavaScript & CSS into .mjs
  await esbuild.build({
    entryPoints: ['src/gift_unboxing.js'],
    bundle: true,
    format: 'esm',
    outfile: 'dist/gift_unboxing.mjs',
    minify: true,
    sourcemap: true,
    target: ['esnext'],
    loader: {
      '.js': 'js',
      '.png': 'dataurl',
      '.jpg': 'dataurl'
    }
  });

  console.log('✅ Generated dist/gift_unboxing.mjs');

  // 2. Copy/minify CSS
  await esbuild.build({
    entryPoints: ['src/gift_unboxing.css'],
    bundle: true,
    outfile: 'dist/gift_unboxing.css',
    minify: true
  });

  console.log('✅ Generated dist/gift_unboxing.css');

  // Verify file sizes
  const mjsStat = fs.statSync('dist/gift_unboxing.mjs');
  const cssStat = fs.statSync('dist/gift_unboxing.css');
  console.log(`📦 Bundle size: gift_unboxing.mjs (${(mjsStat.size / 1024).toFixed(1)} KB), gift_unboxing.css (${(cssStat.size / 1024).toFixed(1)} KB)`);
  console.log('🎉 Build completed successfully! Ready for GitHub Pages deployment.');
}

build().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
