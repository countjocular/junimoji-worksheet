var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var cluesString = urlParams.get('clues');
var author = urlParams.get('author');
var title = urlParams.get('title');
var numberOfRows = urlParams.get('r');
var numberOfColumns = urlParams.get('c');
if (numberOfColumns == null) {
  numberOfColumns = 3;
}
if (numberOfRows == null) {
  numberOfRows = 3;
}

var tilesInASection = 9;

function sanitizeString(str){
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
    return str.trim();
}

function numberOfSections() {
  return numberOfRows * numberOfColumns;
}
