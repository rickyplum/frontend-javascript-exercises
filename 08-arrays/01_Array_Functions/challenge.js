module.exports.reversePlusOne = function(r) {
  if (r.length > 1) {
    var myVar = r.length - 1;
    var a = [];
    for ( i = 0 ; i <= myVar ; i++ ) {
      a.unshift(r[i])
    }
    
    a.unshift(1);
    return a;
  }
}

module.exports.plusesEverywhere = function(r) {
  var array = r;
  return array.join('+');
}

module.exports.arrayQuantityPlusOne = function(r) {
  var array = r;
  return array.length + 1;
}