function populateClue(value, index, array) {
  // var clueNumber = index +1;
  var clueInput = document.getElementById("clue-"+index+"-input");
  clueInput.value = value;
}

function populateTitle(title) {
  var titleSpan = document.getElementById("title");
  titleSpan.innerHTML = title;
  var titleEdit = document.getElementById("title-edit");
  titleEdit.value = title;
  window.title = title;
}

function populateAuthor(author) {
  var authorSpan = document.getElementById("author");
  authorSpan.innerHTML = author;
  var authorEdit = document.getElementById("author-edit");
  authorEdit.value = author;
  window.author = author;
}
