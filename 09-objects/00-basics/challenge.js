module.exports.createCourse = function (courseTitle, courseDuration, courseStudents) {
  var courseInfo = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents,
    }
  return courseInfo;
}
module.exports.addProperty = function(object, newProp, newValue) {
  var exObj = object;
  exObj[newProp] = newValue;
  return object;
}

module.exports.formLetter = function (theLetter) {
  var string = "Hello " + theLetter.recipient + ",\n\n" + theLetter.msg + "\n\nSincerely,\n" + theLetter.sender;
  return string;
};

module.exports.canIGet = function (item, money) {
  
  var appleStore = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  }
  
  return appleStore[item] <= money;
};