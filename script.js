// Config from config.js
const MINT = (window.LABU_CONFIG && window.LABU_CONFIG.mint) ? window.LABU_CONFIG.mint.trim() : 'MINT_ADDRESS_HERE';

// Update links and mint UI
function setLinks(){
  const raydium = `https://raydium.io/swap/?input=sol&output=${encodeURIComponent(MINT)}`;
  const solscan = `https://solscan.io/token/${encodeURIComponent(MINT)}`;
  const pump = `https://pump.fun/coin/${encodeURIComponent(MINT)}`;
  const dex = `https://dexscreener.com/solana/${encodeURIComponent(MINT)}?embed=1`;

  const mintEl = document.getElementById('mintAddress');
  const buyTop = document.getElementById('buyTop');
  const buyMain = document.getElementById('buyMain');
  const scan = document.getElementById('solscanLink');
  const pumpLink = document.getElementById('pumpLink');
  const dexIframe = document.getElementById('dexIframe');
  const dexLink = document.getElementById('dexLink');

  if(mintEl) mintEl.textContent = MINT;
  if(buyTop) buyTop.href = raydium;
  if(buyMain) buyMain.href = raydium;
  if(scan) scan.href = solscan;
  if(pumpLink) pumpLink.href = pump;
  if(dexIframe) dexIframe.src = dex;
  if(dexLink) dexLink.href = `https://dexscreener.com/solana/${encodeURIComponent(MINT)}`;
}
setLinks();

// Copy mint
function copyMint(){
  const mintEl = document.getElementById('mintAddress');
  if(!mintEl) return;
  navigator.clipboard.writeText(mintEl.textContent.trim()).then(()=>alert('Mint copied'));
}

// Typing effect
const phrases = ['Meme Coin', 'Pure Chaos', 'Community First'];
let p = 0, i = 0, typing = true;
const typed = document.getElementById('typed');
function typeTick(){
  if(!typed) return;
  const current = phrases[p];
  if(typing){
    i++; typed.textContent = current.slice(0, i);
    if(i >= current.length){ typing = false; setTimeout(typeTick, 1100); return; }
  }else{
    i--; typed.textContent = current.slice(0, i);
    if(i <= 0){ typing = true; p = (p+1)%phrases.length; }
  }
  setTimeout(typeTick, typing ? 70 : 40);
}
typeTick();

// Reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); } });
},{threshold:0.12});
document.querySelectorAll('.reveal,.reveal-up').forEach(el=>observer.observe(el));
