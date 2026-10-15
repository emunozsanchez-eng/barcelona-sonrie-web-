const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    status.textContent = 'Aquest formulari és una demostració. Per demanar cita, utilitza el telèfon o el correu oficial de la clínica.';
  });
}
