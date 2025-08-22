document.addEventListener('DOMContentLoaded', () => {
  const setHref = (id, url) => { const a = document.getElementById(id); if (a) a.href = url; };
  ['buy-link','buy-link-2'].forEach(id => setHref(id, CONFIG.PUMPFUN));
  setHref('raydium-link', CONFIG.RAYDIUM);
  setHref('raydium-link-2', CONFIG.RAYDIUM);
  setHref('solscan-link', CONFIG.SOLSCAN);
  setHref('dex-link', CONFIG.DEXSCREENER);
  setHref('twitter-link', CONFIG.X);
  setHref('x-icon', CONFIG.X);
  setHref('tg-link', CONFIG.TG);
  setHref('tg-icon', CONFIG.TG);
  setHref('tiktok-link', CONFIG.TIKTOK);
  setHref('tiktok-icon', CONFIG.TIKTOK);

  // CA
  const caEl = document.getElementById('ca-text');
  if (caEl) caEl.textContent = CONFIG.CA;
  const btn = document.getElementById('copy-btn');
  if (btn) btn.onclick = async () => {
    try { await navigator.clipboard.writeText(CONFIG.CA);
      const old = caEl.textContent; caEl.textContent = "Copied!";
      setTimeout(() => caEl.textContent = old, 900);
    } catch(e){ alert('Copy failed'); }
  };

  // DexScreener
  const frame = document.getElementById('dex-frame');
  if (frame) frame.src = CONFIG.DEXSCREENER;
});
