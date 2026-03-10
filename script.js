/* ============================================
   Hạm Đội Tàu Biển — Landing Page Scripts
   Scroll animations, counters, navigation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Stars Background ──
  const starsContainer = document.getElementById('starsContainer');
  for (let i = 0; i < 80; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--dur', (3 + Math.random() * 6) + 's');
    star.style.setProperty('--max-opacity', (0.3 + Math.random() * 0.5).toFixed(2));
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.width = (1 + Math.random() * 2) + 'px';
    star.style.height = star.style.width;
    starsContainer.appendChild(star);
  }

  // ── Scroll Progress Bar ──
  const scrollProgress = document.getElementById('scrollProgress');
  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + '%';
  }

  // ── Reveal on Scroll (Intersection Observer) ──
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // ── Count-up Animation ──
  const counters = document.querySelectorAll('[data-count]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    const heroSection = document.getElementById('hero');
    const rect = heroSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      countersAnimated = true;
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.count, 10);
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // easeOutQuart
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.round(eased * target);
          counter.textContent = current + (target >= 100 ? '+' : '');
          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
      });
    }
  }

  // ── Side Navigation ──
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = ['hero', 'pain', 'vision', 'phase1', 'phase2', 'phase3', 'risks'];

  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  function updateActiveNav() {
    let currentSection = 'hero';
    const scrollPos = window.scrollY + window.innerHeight / 3;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el && el.offsetTop <= scrollPos) {
        currentSection = sectionId;
      }
    }

    navDots.forEach(dot => {
      dot.classList.toggle('active', dot.dataset.target === currentSection);
    });
  }

  // ── Parallax floating elements ──
  const floatElements = document.querySelectorAll('.float-element');

  function updateParallax() {
    const scrollY = window.scrollY;
    floatElements.forEach((el, i) => {
      const speed = 0.02 + (i % 3) * 0.01;
      const yOffset = scrollY * speed;
      el.style.transform = `translateY(${-yOffset}px)`;
    });
  }

  // ── Scroll Event Handler ──
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateProgress();
        updateActiveNav();
        animateCounters();
        updateParallax();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ── Initial calls ──
  updateProgress();
  updateActiveNav();
  animateCounters();

  // ── Smooth reveal for hero content ──
  setTimeout(() => {
    const heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach(el => el.classList.add('visible'));
  }, 300);

});
