let numArray = [5,7,12,90,2,45]
let people = [
  {
    name: 'Jeremy',
    age: 26
  }, {
    name: 'Alice',
    age: 24
  }, {
    name: 'Quinton',
    age: 25
  }, {
    name: 'Penny',
    age: 23
  }, {
    name: 'Margot',
    age: 24
  }]

function multiplyNumbers(array) {
  return array.reduce((acc, el) => {
    return acc * el;
  }, 1)
}
