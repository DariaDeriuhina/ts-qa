const sumOfArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
};

const numbers = [1, 2, 3, 4, 5];

const strings = ["1", "2", "3"];

console.log("Sum of numbers:", sumOfArray(numbers));
console.log("Sum of strings:", sumOfArray(strings));
