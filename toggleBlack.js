function toggleBlack(element) {
  var elementName = element;
  var target = document.getElementById(element);
  if (target.classList.contains('blackTile')) {
    target.classList.remove('blackTile');
    target.classList.add('whiteTile');
  } else if (target.classList.contains('whiteTile')){
    target.classList.remove('whiteTile');
    target.classList.remove('blackTile');
  } else {
    target.classList.add('blackTile');
    target.classList.remove('whiteTile');
  }
}
