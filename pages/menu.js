function renderMenu(){
  const t = i18n[state.lang].menu;
  document.getElementById('app').innerHTML = `
<h2>${t.title}</h2>
<div class="grid">
  ${t.items.map(item => `<div class="card tile"><h3>${item.name}</h3><p class="muted">${item.desc}</p></div>`).join('')}
</div>
`;
}
