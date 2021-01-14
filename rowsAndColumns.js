function setRows(i) {
  window.numberOfRows = i;
}

function setColumns(i) {
  window.numberOfColumns = i;
}

function setRowsAndColumnsFromInputs() {
  var r = document.getElementById('rows-count').value;
  var c = document.getElementById('columns-count').value;
  setRows(r);
  setColumns(c);
  // TODO: Delete existing elements and redraw
}

function setInputsFromRowsAndColumns() {
  document.getElementById('rows-count').value = window.numberOfRows;
  document.getElementById('columns-count').value = window.numberOfColumns;
}
