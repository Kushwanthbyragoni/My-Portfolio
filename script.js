/* =============================================
   KUSHWANTH BYRAGONI — PORTFOLIO SCRIPTS
   script.js
   ============================================= */

/* ---------- LOADER ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => loader.style.display = 'none', 600);
  }, 1900);
});

/* ---------- CUSTOM CURSOR ---------- */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top  = my - 6 + 'px';
});

(function animTrail() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx - 16 + 'px';
  trail.style.top  = ty - 16 + 'px';
  requestAnimationFrame(animTrail);
})();

/* ---------- CANVAS PARTICLE BACKGROUND ---------- */
const canvas = document.getElementById('bg-canvas');
const ctx    = canvas.getContext('2d');

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const PARTICLE_COUNT = 80;
const P = [];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  P.push({
    x:  Math.random() * window.innerWidth,
    y:  Math.random() * window.innerHeight,
    r:  Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    a:  Math.random() * 0.5 + 0.1,
    c:  Math.random() > 0.6 ? '#00f5ff' : Math.random() > 0.5 ? '#ff6b00' : '#ffd700'
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw particles
  P.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle   = p.c;
    ctx.globalAlpha = p.a;
    ctx.fill();
    ctx.globalAlpha = 1;

    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  // Draw connecting lines between nearby particles
  for (let i = 0; i < P.length; i++) {
    for (let j = i + 1; j < P.length; j++) {
      const dx   = P[i].x - P[j].x;
      const dy   = P[i].y - P[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(P[i].x, P[i].y);
        ctx.lineTo(P[j].x, P[j].y);
        ctx.strokeStyle = `rgba(0,245,255,${0.04 * (1 - dist / 120)})`;
        ctx.lineWidth   = 0.5;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}
draw();

/* ---------- SCROLL REVEAL ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80 * (i % 4));
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- ANIMATED SKILL BARS ---------- */
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

document.getElementById('email').addEventListener('click', () => {
  window.open('mailto:kushwanthbyragoni@gmail.com');
});
document.getElementById('linkedin').addEventListener('click', () => {
  window.open('https://www.linkedin.com/in/kushwanth-byragoni-a605a427b');
});
document.getElementById('github').addEventListener('click', () => {
  window.open('https://github.com/Kushwanthbyragoni');
});

document.getElementById('send-message').addEventListener('click', () => {
  window.open('mailto:kushwanthbyragoni@gmail.com');
});
