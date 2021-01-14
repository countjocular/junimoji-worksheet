var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var cluesString = urlParams.get('clues');
var numberOfRows = urlParams.get('r');
var numberOfColumns = urlParams.get('c');
if (numberOfColumns == null) {
  numberOfColumns = 3;
}
if (numberOfRows == null) {
  numberOfRows = 3;
}

var numberOfSections = numberOfRows * numberOfColumns;
var tilesInASection = 9;
