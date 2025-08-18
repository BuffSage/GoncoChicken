function renderHeader(){
  document.getElementById('site-header').innerHTML = `
  <div class="container nav">
    <a class="brand" href="#home"><span class="logo"></span><span>Gonco Chicken</span></a>
    <nav class="navlinks">
      <a class="btn" href="#menu">${i18n[state.lang].nav.menu}</a>
      <a class="btn" href="#about">${i18n[state.lang].nav.about}</a>
      <a class="btn" href="#contact">${i18n[state.lang].nav.contact}</a>
      <a class="btn primary" href="tel:+4926712411502">${i18n[state.lang].nav.call}</a>
      <button id="lang-toggle" class="btn">${state.lang === 'de' ? 'EN' : 'DE'}</button>
      <button id="theme-toggle" class="btn">${state.theme === 'dark' ? '🌙' : '☀️'}</button>
    </nav>
    <button class="btn mobile" onclick="document.querySelector('.nav').classList.toggle('open')">☰</button>
  </div>`;
}
