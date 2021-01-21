function populateClue(value, index, array) {
  // var clueNumber = index +1;
  var clueInput = document.getElementById("clue-"+index+"-input");
  clueInput.value = value;
}

function populateTitle(title) {
  var titleSpan = document.getElementById("title");
  titleSpan.innerHTML = title;
}

function populateAuthor(author) {
  var authorSpan = document.getElementById("author");
  authorSpan.innerHTML = author;
}
