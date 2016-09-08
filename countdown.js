//function that counts down when it is called (see below):

var countdownGenerator = function (x) {
  console.log(`T-minus ${x}`);
  return function() {
    x -= 1;
    if (x > 0) {
      console.log(`T-minus ${x}`)
    return x;
  } else if (x === 0) {
    console.log("Blast Off!")
    x = -1;
    return x;
  } else {

    console.log("Rockets already gone, bub!")
  }

  }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
