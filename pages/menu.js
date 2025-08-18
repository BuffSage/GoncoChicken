function renderMenu(){
document.getElementById('app').innerHTML = `
<h2>Menü</h2>
<div class="grid">
  <div class="card tile"><h3>Classic Fried Chicken</h3><p class="muted">Knuspriges Hähnchen – 9,50 €</p></div>
  <div class="card tile"><h3>Spicy Wings (8 Stk.)</h3><p class="muted">Feurig und knusprig – 8,90 €</p></div>
  <div class="card tile"><h3>Chicken Burger</h3><p class="muted">Mit Salat & Sauce – 10,50 €</p></div>
</div>
`;
}
