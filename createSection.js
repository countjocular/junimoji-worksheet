function createSection(sectionNumber) {
  const container = document.querySelector('#container');
  const section = document.createElement('div');
  section.classList.add('section');
  section.setAttribute('id', 'section-'+sectionNumber);
  for (i = 0; i < window.tilesInASection; i++) {
    var tile = document.createElement('div');
    const tileid = 'tile-'+sectionNumber+'-'+i;
    tile.classList.add('tile');
    tile.setAttribute('id', tileid);
    var tileStyle = sectionNumber % (window.tilesInASection);
    tile.classList.add('tile-style-'+tileStyle);
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.addEventListener("dblclick", function() { toggleBlack(tileid); });
    tile.appendChild(input);
    section.appendChild(tile);
  }

  container.appendChild(section);
}
