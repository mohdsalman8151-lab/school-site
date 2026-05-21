/* EduCore — Footer Component */
function renderFooter(prefix) {
  prefix = prefix || '';
  const html = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="nav-logo" href="${prefix}index.html" style="margin-bottom:0">
            <div class="nav-logo-mark">
              <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <div class="nav-logo-text">EduCore</div>
              <div class="nav-logo-sub">School of Excellence</div>
            </div>
          </a>
          <p class="footer-desc">Nurturing young minds since 1994. EduCore is committed to holistic education that empowers every student to reach their fullest potential.</p>
          <div class="footer-social">
            <a href="#" title="Facebook"><svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="#" title="Twitter"><svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>
            <a href="#" title="Instagram"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="#" title="YouTube"><svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>
          </div>
        </div>

        <div>
          <div class="footer-col-title">Quick Links</div>
          <div class="footer-links">
            <a href="${prefix}index.html">Home</a>
            <a href="${prefix}pages/about.html">About Us</a>
            <a href="${prefix}pages/academics.html">Academics</a>
            <a href="${prefix}pages/faculty.html">Faculty</a>
            <a href="${prefix}pages/admissions.html">Admissions</a>
            <a href="${prefix}pages/events.html">Events</a>
            <a href="${prefix}pages/gallery.html">Gallery</a>
            <a href="${prefix}pages/contact.html">Contact</a>
          </div>
        </div>

        <div>
          <div class="footer-col-title">Programs</div>
          <div class="footer-links">
            <a href="${prefix}pages/academics.html">Pre-Primary (Nursery–KG)</a>
            <a href="${prefix}pages/academics.html">Primary School (I–V)</a>
            <a href="${prefix}pages/academics.html">Middle School (VI–VIII)</a>
            <a href="${prefix}pages/academics.html">Secondary (IX–X)</a>
            <a href="${prefix}pages/academics.html">Senior Secondary (XI–XII)</a>
            <a href="${prefix}pages/academics.html">Extra-Curriculars</a>
          </div>
        </div>

        <div>
          <div class="footer-col-title">Contact Us</div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>EduCore Campus, Sector 15, Green Valley, New Delhi – 110001</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.07-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+91 11 2345 6789</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>info@educore.edu.in</span>
          </div>
          <div class="footer-contact-item">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Mon–Sat: 8:00 AM – 4:00 PM</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="footer-bottom">
        <span class="footer-bottom-text">© 2025 EduCore School of Excellence. All rights reserved.</span>
        <span class="footer-bottom-text">Affiliated to CBSE · Estd. 1994</span>
      </div>
    </div>
  </footer>
  `;
  const el = document.getElementById('footer-placeholder');
  if (el) el.innerHTML = html;
}
