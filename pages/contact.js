function renderContact(){
  const t = i18n[state.lang].contact;
  document.getElementById('app').innerHTML = `
<h2>${t.title}</h2>
<div class="card tile">${t.info}</div>
<form class="card tile" action="https://formspree.io/f/xnnzyrka" method="POST">
  <label>${t.form.name}<br><input type="text" name="name" required></label>
  <label>${t.form.email}<br><input type="email" name="_replyto" required></label>
  <label>${t.form.message}<br><textarea name="message" required></textarea></label>
  <button class="btn primary" type="submit">${t.form.send}</button>
</form>
`;
}
