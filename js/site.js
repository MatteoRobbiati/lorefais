// Shared by every page: builds the navbar in place, handles theme + mobile menu.
(function () {
  var links = [
    ['index.html#about', 'user', 'About'],
    ['index.html#journey', 'route', 'Journey'],
    ['index.html#software', 'code', 'Software'],
    ['index.html#publications', 'book-open', 'Publications'],
    ['index.html#videos', 'video', 'Talks'],
    ['index.html#contact', 'envelope', 'Contact'],
    ['graphic.html', 'palette', 'Graphic']
  ];
  var items = links.map(function (l) {
    return '<li class="nav-item"><a class="nav-link" href="' + l[0] + '"><i class="fas fa-' + l[1] + '"></i>' + l[2] + '</a></li>';
  }).join('');
  var html =
    '<nav class="navbar navbar-expand-lg sticky-top shadow-sm"><div class="container">' +
      '<a class="navbar-brand fw-bold" href="index.html#about"><i class="fas fa-home me-2"></i>Home</a>' +
      '<div class="d-flex align-items-center order-lg-last ms-3">' +
        '<div class="theme-toggle me-3" onclick="toggleTheme()"><i class="fas fa-moon" id="themeIcon"></i></div>' +
        '<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle menu">' +
          '<span class="nav-toggle-lines"><span></span><span></span><span></span></span></button>' +
      '</div>' +
      '<div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ms-auto">' + items + '</ul></div>' +
    '</div></nav>';
  document.currentScript.insertAdjacentHTML('beforebegin', html);

  function applyTheme(t) {
    document.documentElement.setAttribute('data-bs-theme', t);
    var icon = document.getElementById('themeIcon');
    if (icon) { icon.classList.toggle('fa-sun', t === 'dark'); icon.classList.toggle('fa-moon', t !== 'dark'); }
  }
  window.toggleTheme = function () {
    var t = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(t);
    try { localStorage.setItem('theme', t); } catch (e) {}
  };
  try { var saved = localStorage.getItem('theme'); if (saved) applyTheme(saved); } catch (e) {}

  // close the mobile menu after choosing a link or tapping outside it
  document.addEventListener('click', function (e) {
    var menu = document.getElementById('navbarNav');
    if (!menu || !menu.classList.contains('show')) return;
    if (e.target.closest('.nav-link') || !e.target.closest('.navbar')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
})();
