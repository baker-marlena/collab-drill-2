let numArray = [5,7,12,90,2,45]

function multiplyNumbers(array) {
  return array.reduce((acc, el) => {
    return acc * el;
  }, 1)
}
