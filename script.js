
const filenames = [
  "Untitled68_20251019235956.jpeg",
  "Untitled68_20251020001036.jpeg",
  "Untitled68_20251020002312.jpeg",
  "Untitled68_20251020002937.jpeg",
  "Untitled68_20251020003111.jpeg",
  "Untitled68_20251020003406.jpeg",
  "Untitled68_20251020003509.jpeg",
  "Untitled68_20251020100706.jpeg",
  "Untitled68_20251021112640.jpeg",
  "Untitled68_20251021130138.jpeg",
  "Untitled68_20251021144621.jpeg",
  "Untitled68_20251021151505.jpeg",
  "Untitled68_20251021151701.jpeg"
];

const base = "https://raw.githubusercontent.com/b1loan/WLC-LNHS-2025-OCT-22/main/";
const slideshow = document.getElementById('slideshow');

const slides = filenames.map((f, i) => {
  const div = document.createElement('div');
  div.className = 'slide' + (i === 0 ? ' active' : '');
  const img = document.createElement('img');
  img.alt = `Student Teacher ${i + 1}`;
  img.loading = 'lazy';     // lazy load
  img.decoding = 'async';   // async decode for speed
  img.width = 640;          // scale width
  img.height = 360;         // scale height
  if (i < 2) {
    img.src = base + f; // preload first 2
  }
  div.appendChild(img);
  slideshow.appendChild(div);
  return { div, img, src: base + f, loaded: i < 2 };
});

let current = 0;
let timer = null;
const interval = 2500;

function loadImage(i) {
  const s = slides[i];
  if (!s.loaded) {
    s.img.src = s.src;
    s.loaded = true;
  }
}

function show(i) {
  slides[current].div.classList.remove('active');
  current = (i + slides.length) % slides.length;
  slides[current].div.classList.add('active');
  loadImage(current + 1);
}

function next() { show(current + 1); }
function prev() { show(current - 1); }

function start() { stop(); timer = setInterval(next, interval); }
function stop() { if (timer) clearInterval(timer); }

start();

document.getElementById('next').onclick = () => { next(); start(); };
document.getElementById('prev').onclick = () => { prev(); start(); };
document.getElementById('pause').onclick = () => {
  if (timer) {
    stop();
    timer = null;
    document.getElementById('pause').textContent = '▶';
  } else {
    start();
    document.getElementById('pause').textContent = '❚❚';
  }
};
