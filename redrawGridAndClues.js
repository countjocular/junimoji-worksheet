function redrawGridAndClues() {
  var sections = document.querySelectorAll('.section');
  for (var count = 0; count < sections.length; count++) {
    sections[count].remove();
  }
  var clues = document.querySelectorAll('.clue');
  for (var count = 0; count < clues.length; count++) {
    clues[count].remove();
  }
  for (var count = 0; count < numberOfSections(); count++) {
    createSection(count);
    createClue(count);
  }
  if (window.cluesString) {
    var clues = window.cluesString.split("-");
    clues.forEach(populateClue);
  }
  var container = document.getElementById('container');
  container.style.width = window.numberOfRows * 205;
  container.style.height = window.numberOfColumns * 205;

  document.getElementById('subgrid-count').innerHTML = numberOfSections();

  createJunimojiListeners();
}
