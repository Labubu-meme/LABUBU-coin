document.addEventListener('DOMContentLoaded', () => {
  const set = (id, url) => { const el = document.getElementById(id); if (el) el.href = url; };
  ['buy-link','buy-link-2'].forEach(id => set(id, CONFIG.PUMPFUN));
  set('raydium-link', CONFIG.RAYDIUM);
  set('raydium-link-2', CONFIG.RAYDIUM);
  set('solscan-link', CONFIG.SOLSCAN);
  set('dex-link', CONFIG.DEXSCREENER);
  set('twitter-link', CONFIG.X);
  set('x-icon', CONFIG.X);
  set('tg-link', CONFIG.TG);
  set('tg-icon', CONFIG.TG);
  set('tiktok-link', CONFIG.TIKTOK);
  set('tiktok-icon', CONFIG.TIKTOK);

  // CA + copy
  const caEl = document.getElementById('ca-text');
  if (caEl) caEl.textContent = CONFIG.CA;
  const btn = document.getElementById('copy-btn');
  if (btn) btn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.CA);
      const old = caEl.textContent; caEl.textContent = "Copied!";
      setTimeout(() => caEl.textContent = old, 900);
    } catch {
      alert('Copy failed');
    }
  };

  // Dex chart
  const frame = document.getElementById('dex-frame');
  if (frame) frame.src = CONFIG.DEXSCREENER;
});
