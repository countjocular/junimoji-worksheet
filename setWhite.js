function setWhiteIfNotEmpty(target) {
  tile = document.getElementById(target);
  input = tile.firstElementChild;
  if (!(input.value == '' || input.value == input.defaultValue)) {
    tile.classList.add('whiteTile');
  }
}

function addJunimojiListener(tileid) {
  input = document.getElementById(tileid).firstElementChild;
  input.addEventListener("focusout", function() { setWhiteIfNotEmpty(tileid); });
}

function createJunimojiListeners() {
  var i;
  var j;

  for (i = 0; i < numberOfSections(); i++) {
    for (j = 0; j < window.tilesInASection; j++) {
      addJunimojiListener('tile-'+i+'-'+j);
    }
  }
}
