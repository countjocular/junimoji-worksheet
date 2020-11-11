function showPermalink() {
  var cluesString = ""; // empty
  for(var i=1; i<10; i++) {
    if(i != 1) {cluesString = cluesString+'-';}
    cluesString = cluesString + document.getElementById("clue-"+i+"-input").value;
  }
  var permalink = document.location.host+document.location.pathname+'/?clues='+cluesString;
  document.getElementById("show-permalink").innerHTML = "If you want to link directly to this specific junimoji, use this link:<br /><a href=\""+permalink+"\">"+permalink+"</a><br /><small>Please note: this is beta functionality. Links may not work with later versions of this page.</small>"
}
