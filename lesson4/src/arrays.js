const strings = ['apple', 'banana', 'cherry'];

const numbers = [1, 2, 3, 4];

const booleans = [true, false, true];

const anyArray = ['text', 42, true, null];

console.log('map examples:');

const upperStrings = strings.map(str => str.toUpperCase());
console.log(upperStrings);

const squareNumbers = numbers.map(num => num * num);
console.log(squareNumbers);

const invertedBooleans = booleans.map(b => !b);
console.log(invertedBooleans);

const mappedAny = anyArray.map(el => typeof el);
console.log(mappedAny);

console.log('forEach examples:');
strings.forEach(item => console.log(item));
numbers.forEach(num => console.log(num * 2));
