function setRows(i) {
  window.numberOfRows = i;
}

function setColumns(i) {
  window.numberOfColumns = i;
}

function setRowsAndColumnsFromInputs() {
  var r = document.getElementById('rows-edit').value;
  var c = document.getElementById('columns-edit').value;
  setRows(r);
  setColumns(c);
  // TODO: Delete existing elements and redraw
}

function setInputsFromRowsAndColumns() {
  document.getElementById('rows-edit').value = window.numberOfRows;
  document.getElementById('columns-edit').value = window.numberOfColumns;
}
