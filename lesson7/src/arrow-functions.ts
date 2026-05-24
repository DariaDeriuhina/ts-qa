const sumOfArrayTs = (arr: (number | string)[]): number => {
    let sum = 0;
    for (const item of arr) {
        sum += Number(item);
    }

    return sum;
    return sum;
};

const numbersTs: number[] = [1, 2, 3, 4, 5];

const stringsTs: string[] = ["1", "2", "3"];

console.log("Sum of numbers:", sumOfArrayTs(numbersTs));
console.log("Sum of strings:", sumOfArrayTs(stringsTs));
