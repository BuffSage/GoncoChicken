function renderFooter(){
  document.getElementById('site-footer').innerHTML = `
  <div class="container foot">
    <div>© ${new Date().getFullYear()} Gonco Chicken • Moselweinstraße 14B, 56821 Ellenz-Poltersdorf</div>
    <div class="muted">${i18n[state.lang].footer.allergens}</div>
    <a class="btn" href="#impressum">${i18n[state.lang].footer.impressum}</a>
    <button id="cookie-settings-btn" class="btn cookie-btn" type="button">Cookie-Einstellungen</button>
  </div>`;
}
