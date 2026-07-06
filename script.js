/**
 * RONPANDANGA Fan Portal — Page Navigation
 * Simple SPA-style show/hide sections (no page reload)
 */

(function () {
  'use strict';

  var navLinks = document.querySelectorAll('.nav-link');
  var inlineNavLinks = document.querySelectorAll('.inline-nav');
  var sections = document.querySelectorAll('.page-section');

  /**
   * Show a page section by name and update active nav state.
   * @param {string} pageName - ID of the section to display (e.g. "home")
   */
  function showPage(pageName) {
    var i;

    for (i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }

    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove('active');
      if (navLinks[i].getAttribute('data-page') === pageName) {
        navLinks[i].classList.add('active');
      }
    }

    var target = document.getElementById(pageName);
    if (target) {
      target.classList.add('active');
    }
  }

  function handleNavClick(event) {
    event.preventDefault();
    var pageName = this.getAttribute('data-page');
    if (pageName) {
      showPage(pageName);
    }
  }

  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', handleNavClick);
  }

  for (var j = 0; j < inlineNavLinks.length; j++) {
    inlineNavLinks[j].addEventListener('click', handleNavClick);
  }

  // Default page on load
  showPage('home');
})();
