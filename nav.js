document.addEventListener('DOMContentLoaded', function () {
  var headerMount = document.querySelector('[data-header]');
  var fallbackHeader = '<header class="editorial-header" data-purpose="header-navigation">' +
    '<div class="editorial-status"><span class="dot"></span> Available for freelance work</div>' +
    '<nav class="editorial-links" aria-label="Main Navigation">' +
    '<a href="index.html#about">About</a>' +
    '<a href="index.html#skills">Skills</a>' +
    '<a href="work.html">Work <span>[04]</span></a>' +
    '<a href="index.html#experience">Experience</a>' +
    '<a href="project.html">Projects</a>' +
    '<a href="contact.html">Contact</a>' +
    '</nav>' +
    '<a href="contact.html" class="editorial-cta">Let\'s talk <span aria-hidden="true">↗</span></a>' +
    '<button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>' +
    '</header>';

  if (!headerMount) {
    return;
  }

  fetch('header.html')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Unable to load header.html');
      }
      return response.text();
    })
    .then(function (headerMarkup) {
      headerMount.innerHTML = headerMarkup;

      var toggle = headerMount.querySelector('.nav-toggle');
      var links = headerMount.querySelector('nav.links, nav.editorial-links');

      if (toggle && links) {
        toggle.addEventListener('click', function () {
          links.classList.toggle('open');
        });
      }
    })
    .catch(function (error) {
      console.error(error);
      headerMount.innerHTML = fallbackHeader;
      var fallbackToggle = headerMount.querySelector('.nav-toggle');
      var fallbackLinks = headerMount.querySelector('nav.editorial-links');

      if (fallbackToggle && fallbackLinks) {
        fallbackToggle.addEventListener('click', function () {
          fallbackLinks.classList.toggle('open');
        });
      }
    });
});
