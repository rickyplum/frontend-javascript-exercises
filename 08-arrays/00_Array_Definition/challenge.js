module.exports.newArray = function (num1, num2, num3, num4) {
	var anArray = [num1, num2, num3, num4];
	return anArray;
}

module.exports.firstAndLast = function (a) {
  var lastIndex = a.length - 1;
  var newArray = [a[0], a[lastIndex]];
  return newArray;
}