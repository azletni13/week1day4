var id = (function () {
  var counter = -1;

  return function () {
    counter += 1;
    return counter;
  }

})();

console.log(id()); // 0
console.log(id()); // 1
console.log(id()); // 2
console.log(id()); // 3