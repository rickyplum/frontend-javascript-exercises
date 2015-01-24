module.exports.addItem = function (arg1, arg2) {
var list = arg2.length-1;
for (i = 0 ; i <= list ; i++) {
  if (arg2[i] == arg1) {
    return arg2;
  }
  arg2.push(arg1)
  return arg2
 }
}

module.exports.reverseSortedList = function (anArray) {
  
  var newArray = anArray.sort(function (a, b) {
    if (a > b) {
      return -1;
    }
    else if (a < b) {
      return 1;
    }
    else if (a == b) {
      return 0;
    }
  });

  return newArray;
}