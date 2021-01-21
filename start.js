for (var count = 0; count < numberOfSections; count++) {
  createSection(count);
  createClue(count);
}

createJunimojiListeners();

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

var container = document.getElementById('container');
container.style.width = numberOfRows * 205;
container.style.height = numberOfColumns * 205;

setInputsFromRowsAndColumns();

document.getElementById('subgrid-count').innerHTML = numberOfSections;
