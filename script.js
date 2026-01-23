(function () {
  const toggle = document.querySelector('.nav__toggle');
  const navList = document.getElementById('navList');

  if (toggle && navList) {
    // Add "Zaloguj" into mobile menu as last item (if not present)
    const hasLogin = Array.from(navList.querySelectorAll('a')).some(a => a.textContent.trim().toLowerCase() === 'zaloguj');
    if (!hasLogin) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = 'https://airtable.com/appYhlamOxK3EYv9h/pagX4xjqKLYD6QiHI';
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = 'Zaloguj';
      li.appendChild(a);
      navList.appendChild(li);
    }

    toggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!navList.classList.contains('is-open')) return;
      const isInside = navList.contains(e.target) || toggle.contains(e.target);
      if (!isInside) {
        navList.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Static contact form -> mailto (no backend needed)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const email = (fd.get('email') || '').toString().trim();
      const message = (fd.get('message') || '').toString().trim();

      const subject = encodeURIComponent('EMMA – kontakt ze strony');
      const body = encodeURIComponent(
        `Imię i nazwisko: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}\n`
      );

      // TODO: podmień na docelowy e-mail
      const to = 'kontakt@twojadomena.pl';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
})();