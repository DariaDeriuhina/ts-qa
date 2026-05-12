const a = 0;
const d  = '0';
const f = undefined;

if (typeof a === 'number') {
    console.log('a is a number');
}

if (a === d) {
    console.log(`${d} is a number too`);
} else if (a == d) {
    console.log(`${d} at least contains value of a number`);
} else {
    console.log(`${d} is not a number too`);
}

if (f) {
    console.log('f is truthy');
} else if (f === null) {
    console.log('f is null');
} else {
    console.log('f is not truthy and not null');
}
