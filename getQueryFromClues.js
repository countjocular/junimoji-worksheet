function showPermalink() {
  var paramsString = ""; // empty
  for(var i=0; i<numberOfSections; i++) {
    if(i != 0) {paramsString = paramsString+'-';}
    paramsString = paramsString + document.getElementById("clue-"+i+"-input").value;
  }
  var permalink = window.location.href.split('?')[0];
  permalink = permalink+'?r='+window.numberOfRows;
  permalink = permalink+'&c='+window.numberOfColumns;
  permalink = permalink+'&title='+ encodeURIComponent(sanitizeString(window.title));
  permalink = permalink+'&author='+ encodeURIComponent(sanitizeString(window.author));
  permalink = permalink+'&clues='+paramsString;
  document.getElementById("show-permalink").innerHTML = "If you want to link directly to this specific junimoji, use this link:<br /><a href=\""+permalink+"\">"+permalink+"</a><br /><small>Please note: this is beta functionality. Links may not work with later versions of this page.</small>"
}
