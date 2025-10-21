// Minimal slideshow with autoplay and responsive lazy loading.
// Mobile users will load smaller images via the GitHub raw URLs' automatic resizing isn't available,
// but we use loading="lazy" and smaller CSS dimensions. For full control, download images
// to an /images folder and adjust file names in images[].

const slidesContainer = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const autoplayCheckbox = document.getElementById('autoplay');

let current = 0;
let autoplay = autoplayCheckbox.checked;
let timer = null;
const AUTOPLAY_INTERVAL = 3000; // 3s

function buildSlides(){
  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide';
    const img = document.createElement('img');

    // Use smaller display size on narrow screens (CSS controls visual size).
    img.src = src;
    img.alt = 'Student ' + (i+1);
    img.loading = 'lazy';
    img.addEventListener('click', () => {
      // toggle autoplay on click/tap
      autoplay = !autoplay;
      autoplayCheckbox.checked = autoplay;
      updateAutoplay();
    });

    slide.appendChild(img);
    slidesContainer.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.addEventListener('click', () => { goTo(i); });
    dotsContainer.appendChild(dot);
  });
  update();
}

function update(){
  const slides = document.querySelectorAll('.slide');
  slides.forEach((s, idx) => {
    s.style.transform = `translateX(${(idx - current) * 100}%)`;
  });
  const dots = document.querySelectorAll('.dot');
  dots.forEach((d, idx) => {
    d.classList.toggle('active', idx === current);
  });
}

function prev(){ current = (current - 1 + images.length) % images.length; update(); resetTimer(); }
function next(){ current = (current + 1) % images.length; update(); resetTimer(); }
function goTo(i){ current = i; update(); resetTimer(); }

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
autoplayCheckbox.addEventListener('change', (e) => { autoplay = e.target.checked; updateAutoplay(); });

function updateAutoplay(){
  if(autoplay){ startTimer(); } else { stopTimer(); }
}
function startTimer(){
  stopTimer();
  timer = setInterval(() => { next(); }, AUTOPLAY_INTERVAL);
}
function stopTimer(){ if(timer) clearInterval(timer); timer = null; }
function resetTimer(){ if(autoplay) { stopTimer(); startTimer(); } }

buildSlides();
updateAutoplay();
