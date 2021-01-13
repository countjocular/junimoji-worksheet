function createClue(sectionNumber) {
  const ol = document.querySelector('#clue-container > ol');
  const li = document.createElement('li')
  li.classList.add('clue');
  li.setAttribute('id', 'clue-'+sectionNumber);
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'clue-'+sectionNumber+'-input');
  var clueStyle = sectionNumber % window.tilesInASection;
  input.classList.add('clue-style-'+clueStyle);
  input.addEventListener("focusout", function() { showPermalink(); });
  li.appendChild(input);
  ol.appendChild(li);
}
