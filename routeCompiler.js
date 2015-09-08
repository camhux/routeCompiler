function routeCompiler(string) {
  var rawString = "^\\/";
  var pathSegs;
  var rawSeg;
  var parsedSeg;
  var colon;
  var optional;
  var end;
  var i;

  if (string.charAt(0) === '/') string = string.slice(1);

  pathSegs = string.split('/');

  for (i = 0; i < pathSegs.length; ++i) {
    end = (i === pathSegs.length - 1);
    rawSeg = pathSegs[i];
    parsedSeg = "";
    colon = rawSeg.indexOf(':');
    if (colon > -1) {
      optional = rawSeg.indexOf('?') > -1;
      parsedSeg += rawSeg.slice(0, colon) + "(.*";
      if (optional) {
        parsedSeg += "\\/)"
      }
    }






    // if (colon === 0) {
    //   parsedSeg += "(.*)"
    // } else if (colon > 0) {
    //   parsedSeg += rawSeg.slice(0, colon) + "(.*)";
    // } else {
    //   parsedSeg += rawSeg;
    // }
    // parsedSeg += (i === pathSegs.length - 1) ? "" : "\\/"
    rawString += parsedSeg;
  }

  rawString += "$";

  return new RegExp(rawString);
}