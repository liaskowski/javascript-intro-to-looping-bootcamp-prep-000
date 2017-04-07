function forLoop(array) {
  var l = array.length + 25;
  for (let i = 0; i < l; i++) {
    if (i === 1) {
      array[i] = "I am 1 strange loop.";
    } else {
      array[i] = `I am ${i} strange loops.`
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(--n);
  }
  return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
      return Math.random() >= 0.5
    }
  do {
      array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}
