function renderHome(){
document.getElementById('app').innerHTML = `
<section class="hero">
  <div class="card copy">
    <div class="kicker">Ellenz-Poltersdorf • Mosel</div>
    <h1>Knuspriges Hähnchen, <br/>frisch & saftig – jeden Tag</h1>
    <p class="lead">Willkommen bei <strong>Gonco Chicken</strong>. Bei uns gibt’s gold-knuspriges Hähnchen,
    hausgemachte Saucen und Beilagen, die wirklich satt machen. Perfekt zum Mitnehmen oder zum Genießen vor Ort.</p>
    <div class="cta">
      <a class="btn primary" href="#menu">Zum Menü</a>
      <a class="btn" href="#about">Mehr über uns</a>
    </div>
  </div>
  <div class="card media">
    <img class="plate" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop">
    <div class="badges"><div class="badge">Täglich 11–21 Uhr</div><div class="badge">Frisch frittiert</div></div>
  </div>
</section>

<section class="card tile" style="margin-top:18px"><h3>So findest du uns</h3>
<iframe class="map" loading="lazy" src="https://www.google.com/maps?q=Moselweinstra%C3%9Fe%2014B%2C%2056821%20Ellenz-Poltersdorf&output=embed"></iframe>
</section>
`;
}
