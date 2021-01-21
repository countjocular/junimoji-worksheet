function getJSON() {
  // json = { "author": encodeURIComponent(window.author)};
  // json["name"] = encodeURIComponent(window.title);
  json = { "author": window.author };
  json["name"] = window.title;
  json["url"] = window.location.href;
  json["size"] = window.numberOfRows * window.numberOfColumns;
  json["andrewturl"] = getAndrewTUrl();
  return (JSON.stringify(json));
}

function getAndrewTUrl() {
  var str = window.location.href;
  var res = str.split('?');
  var querystring = res[1];
  var querys = querystring.split('&');
  var queryHash = {};
  for (var i=0; i<querys.length; i++) {
    kv = querys[i].split('=')
    queryHash[kv[0]] = kv[1];
  }
  result = "https://github.andrewt.net/junimoji/#";
  result = result + queryHash["title"] + ";";
  result = result + queryHash["author"] + ";3,3,";
  result = result + queryHash["r"] + ',' + queryHash["c"]+',';
  clues = queryHash["clues"].split('-').join().toUpperCase();
  result = result + clues;
  return result;
}
