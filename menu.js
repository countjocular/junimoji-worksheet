const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
const rowsEdit = document.querySelector('#rows-edit');
const columnsEdit = document.querySelector('#columns-edit');
const authorEdit = document.querySelector('#author-edit');
const titleEdit = document.querySelector('#title-edit');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})

rowsEdit.addEventListener('focusout', () => {
  window.setRows(rowsEdit.value);
  window.redrawGridAndClues();
  window.showPermalink();
})

columnsEdit.addEventListener('focusout', () => {
  window.setColumns(columnsEdit.value);
  window.redrawGridAndClues();
  window.showPermalink();
})

authorEdit.addEventListener('focusout', () => {
  // TODO: This is a bit recursive, because populateAuthor() overrides the
  // value of #author-edit, but it's not destructive
  window.populateAuthor(authorEdit.value);
  window.showPermalink();
})

titleEdit.addEventListener('focusout', () => {
  // TODO: This is a bit recursive, because populateTitle() overrides the
  // value of #title-edit, but it's not destructive
  window.populateTitle(titleEdit.value);
  window.showPermalink();
})
