for (var count = 0; count < numberOfSections; count++) {
  createSection(count);
  createClue(count);
}

createJunimojiListeners();

var clues = window.cluesString.split("-");
clues.forEach(populateClue);

var container = document.getElementById('container');
container.style.width = numberOfRows * 205;
container.style.height = numberOfColumns * 205;
