redrawGridAndClues();

if (window.cluesString) {
  var clues = window.cluesString.split("-");
  clues.forEach(populateClue);
}

if (window.author) {
  populateAuthor(window.author);
}

if (window.title) {
  populateTitle(window.title);
} else {
  document.getElementById('pagetitle').innerHTML = "Junimoji Workspace";
}

setInputsFromRowsAndColumns();


window.showPermalink();
