function routeCompiler(string) {
  var rawString = "^\\/";
  var pathSegs;
  var parsedSeg;
  var colon;
  var i;

  if (string.charAt(0) === '/') string = string.slice(1);

  pathSegs = string.split('/');

  for (i = 0; i < pathSegs.length; ++i) {
    parsedSeg = "";
    colon = pathSegs[i].indexOf(':');
    if (colon === 0) {
      parsedSeg += "(.*)"
    } else if (colon > 0) {
      parsedSeg += pathSegs[i].slice(0, colon) + "(.*)";
    } else {
      parsedSeg += pathSegs[i];
    }
    parsedSeg += (i === pathSegs.length - 1) ? "" : "\\/"
    rawString += parsedSeg;
  }

  rawString += "$";

  return new RegExp(rawString);
}

module.exports = routeCompiler;