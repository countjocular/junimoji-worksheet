const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cluesString = urlParams.get('clues');

var clues = cluesString.split("-")

clues.forEach(populateClue);

function populateClue(value, index, array) {
  var clueNumber = index +1;
  var clueInput = document.getElementById("clue-"+clueNumber+"-input");
  clueInput.value = value;
}
