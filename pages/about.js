function renderAbout(){
  const t = i18n[state.lang].about;
  document.getElementById('app').innerHTML = `
<h2>${t.title}</h2>
${t.lines.map(line => `<div class="card tile">${line}</div>`).join('')}
`;
}
