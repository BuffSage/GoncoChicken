document.getElementById('site-header').innerHTML = `
<div class="container nav">
  <a class="brand" href="#home"><span class="logo"></span><span>Gonco Chicken</span></a>
  <nav class="navlinks">
    <a class="btn" href="#menu">Menü</a>
    <a class="btn" href="#about">Über uns</a>
    <a class="btn" href="#contact">Kontakt</a>
    <a class="btn primary" href="tel:+4926712411502">Anrufen</a>
  </nav>
  <button class="btn mobile" onclick="document.querySelector('.nav').classList.toggle('open')">☰</button>
</div>
`;
