function renderHome(){
  const t = i18n[state.lang].home;
  document.getElementById('app').innerHTML = `
<section class="hero">
  <div class="card copy">
    <div class="kicker">${t.kicker}</div>
    <h1>${t.headline}</h1>
    <p class="lead">${t.lead}</p>
    <div class="cta">
      <a class="btn primary" href="#menu">${t.btnMenu}</a>
      <a class="btn" href="#about">${t.btnAbout}</a>
    </div>
  </div>
  <div class="card media">
    <img class="plate" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop">
    <div class="badges"><div class="badge">${t.badgeHours}</div><div class="badge">${t.badgeFresh}</div></div>
  </div>
</section>

<section class="card tile" style="margin-top:18px"><h3>${t.findUs}</h3>
<iframe class="map" loading="lazy" src="https://www.google.com/maps?q=Moselweinstra%C3%9Fe%2014B%2C%2056821%20Ellenz-Poltersdorf&output=embed"></iframe>
</section>
`;
}
