// Filename display when a file is chosen
(function(){
  const input = document.getElementById('f-file');
  const label = document.getElementById('fileName');
  if (!input || !label) return;
  input.addEventListener('change', () => {
    if (input.files && input.files[0]){
      const f = input.files[0];
      const kb = (f.size / 1024).toFixed(0);
      label.textContent = `${f.name} · ${kb} KB`;
    } else {
      label.textContent = 'Click to upload or drop a file here';
    }
  });
})();

// Form submission — client-side validation + success state.
// This is a front-end demo: replace the fake submit with a real fetch() to your backend.
(function(){
  const form = document.getElementById('contactForm');
  const success = document.getElementById('successMsg');
  const refEl = document.getElementById('successRef');
  if (!form) return;

  const showError = (el) => {
    el.classList.add('error');
    el.addEventListener('input', () => el.classList.remove('error'), { once: true });
    el.addEventListener('change', () => el.classList.remove('error'), { once: true });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let ok = true;
    const required = form.querySelectorAll('[required]');
    required.forEach(el => {
      if (el.type === 'checkbox' && !el.checked){ ok = false; }
      else if (!el.value || (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value))){
        ok = false;
        if (el.tagName !== 'INPUT' || el.type !== 'checkbox') showError(el);
      }
    });

    if (!ok){
      const first = form.querySelector('.error');
      if (first) first.focus();
      return;
    }

    // Fake submit — replace with real fetch()
    const btn = form.querySelector('.btn-primary');
    btn.disabled = true;
    btn.firstChild.textContent = 'Sending… ';
    setTimeout(() => {
      const ref = 'RSP-' + Math.floor(100000 + Math.random() * 900000);
      refEl.textContent = ref;
      success.classList.add('show');
      form.style.display = 'none';
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 600);
  });
})();
