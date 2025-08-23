document.addEventListener('DOMContentLoaded', () => {
  const set = (id, url) => { const el = document.getElementById(id); if (el) el.href = url; };
  // CTAs and links
  set('buy-link', CONFIG.PUMPFUN);
  set('raydium-link', CONFIG.RAYDIUM);
  set('solscan-link', CONFIG.SOLSCAN);
  set('pump-link', CONFIG.PUMPFUN);
  set('dex-link', CONFIG.DEXSCREENER);
  set('twitter-link', CONFIG.X);
  set('tg-link', CONFIG.TG);
  set('tiktok-link', CONFIG.TIKTOK);
  set('buy-link-2', CONFIG.PUMPFUN);
  set('raydium-link-2', CONFIG.RAYDIUM);

  // CA + copy
  const caEl = document.getElementById('ca-text');
  if (caEl) caEl.textContent = CONFIG.CA;
  const btn = document.getElementById('copy-btn');
  if (btn) btn.onclick = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.CA);
      const old = caEl.textContent; caEl.textContent = "Copied!";
      setTimeout(() => caEl.textContent = old, 900);
    } catch { alert('Copy failed'); }
  };

  // Dex chart
  const frame = document.getElementById('dex-frame');
  if (frame) frame.src = CONFIG.DEXSCREENER;
});
