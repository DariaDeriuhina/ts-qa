function sumOfArrayV2(arr: (number | string)[]): number {
    let sum = 0;
    for (const item of arr) {
        sum += Number(item);
    }

    return sum;
}

const numbersV2: number[] = [1, 2, 3, 4, 5];

const stringsV2: string[] = ["1", "2", "3"];

console.log("Sum of numbers:", sumOfArrayV2(numbersV2));
console.log("Sum of strings:", sumOfArrayV2(stringsV2));
