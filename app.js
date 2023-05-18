const numbers = [47, 45, 67, 56, 78, 8, 37];
console.log(numbers);

// foreache
function foreachFunction(value, index, array) {
  console.log(value);
}

numbers.forEach(foreachFunction);

//map
function mapFunction(value) {
  return value * 2;
}

const mapNumber = numbers.map(mapFunction);

console.log(mapNumber);

//filter
function filterFunction(value, index, array) {
  return value > 10;
}

const filterNumber = numbers.filter(filterFunction);

console.log(filterNumber);

// reduce
function reduceFunction(total, value) {
  return total + value;
}
const reduceNumber = numbers.reduce(reduceFunction);
console.log(reduceNumber);

// every
function everyFunction(value) {
  return value > 8;
}
const everyNumber = numbers.every(everyFunction);
console.log(everyNumber);

// find
function findFunction(value) {
  return value > 50;
}
const findNumber = numbers.find(findFunction);
console.log(findNumber);

const animalNames = [
  "Lion",
  "Elephant",
  "Tiger",
  "Giraffe",
  "Monkey",
  "Zebra",
  "Kangaroo",
  "Panda",
  "Koala",
  "Leopard",
];

let indexV = animalNames.indexOf("Zebra") + 1;

console.log(indexV);

console.log(Array.from("abdullah"));

console.log(animalNames.keys());

console.log(new Date());

console.log(Math.floor(Math.random() * 10) + 1);

// Second lession done
