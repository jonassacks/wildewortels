// Lockscreen
(function () {
  const CODE = 'ergwild';
  const KEY  = 'ww_unlocked';
  const lock = document.getElementById('lockscreen');
  const form = document.getElementById('lock-form');
  const input = document.getElementById('lock-input');
  const error = document.getElementById('lock-error');

  if (sessionStorage.getItem(KEY)) {
    lock.style.display = 'none';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.trim().toLowerCase() === CODE) {
      sessionStorage.setItem(KEY, '1');
      lock.style.opacity = '0';
      lock.style.transition = 'opacity 0.3s';
      setTimeout(() => lock.style.display = 'none', 300);
    } else {
      error.style.display = 'block';
      input.classList.remove('shake');
      void input.offsetWidth; // reflow to restart animation
      input.classList.add('shake');
      input.value = '';
      setTimeout(() => input.classList.remove('shake'), 400);
    }
  });
})();

// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close menu on link click
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
