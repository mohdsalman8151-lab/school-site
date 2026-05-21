/* EduCore — Navbar Component */
function renderNav(activePage, prefix) {
  prefix = prefix || '';
  const links = [
    { page: 'index.html', label: 'Home', href: prefix + 'index.html' },
    { page: 'about.html', label: 'About', href: prefix + 'pages/about.html' },
    { page: 'academics.html', label: 'Academics', href: prefix + 'pages/academics.html' },
    { page: 'faculty.html', label: 'Faculty', href: prefix + 'pages/faculty.html' },
    { page: 'admissions.html', label: 'Admissions', href: prefix + 'pages/admissions.html' },
    { page: 'events.html', label: 'Events', href: prefix + 'pages/events.html' },
    { page: 'gallery.html', label: 'Gallery', href: prefix + 'pages/gallery.html' },
    { page: 'contact.html', label: 'Contact', href: prefix + 'pages/contact.html' },
  ];

  const navLinksHTML = links.map(l => `
    <a class="nav-link${l.page === activePage ? ' active' : ''}" data-page="${l.page}" href="${l.href}">${l.label}</a>
  `).join('');

  const mobileLinksHTML = links.map(l => `
    <a class="nav-link${l.page === activePage ? ' active' : ''}" data-page="${l.page}" href="${l.href}">${l.label}</a>
  `).join('') + `<a class="btn btn-accent" href="${prefix}pages/admissions.html">Apply Now</a>`;

  const navHTML = `
    <nav class="navbar" id="navbar">
      <a class="nav-logo" href="${prefix}index.html">
        <div class="nav-logo-mark">
          <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div>
          <div class="nav-logo-text">EduCore</div>
          <div class="nav-logo-sub">School of Excellence</div>
        </div>
      </a>
      <div class="nav-links">${navLinksHTML}</div>
      <div class="nav-actions">
        <button class="dark-toggle" onclick="toggleDarkMode()" title="Toggle theme">
          <svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        </button>
        <a class="btn btn-accent" href="${prefix}pages/admissions.html">Apply Now</a>
        <button class="nav-hamburger" id="hamburger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div class="nav-mobile" id="mobileMenu">${mobileLinksHTML}</div>
  `;
  document.getElementById('nav-placeholder').innerHTML = navHTML;
}
