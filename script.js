function showPage(pageName) {
  const sections = document.querySelectorAll('.page-section');
  const buttons = document.querySelectorAll('.nav-button[data-page]');
  const targetSection = document.getElementById(pageName);
  const nextPage = targetSection ? pageName : 'home';

  sections.forEach((section) => {
    section.hidden = section.id !== nextPage;
  });

  buttons.forEach((button) => {
    const isActive = button.dataset.page === nextPage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

window.showPage = showPage;

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.nav-button[data-page]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      showPage(button.dataset.page);
    });
  });

  showPage('home');
});
