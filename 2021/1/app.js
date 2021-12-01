const fs = require('fs');
const input = fs.readFileSync('./input').toString().split("\n");


// part 1
let lastValue = input[0];
let increment = 0;

input.forEach((number) => {
    if (+number > lastValue) {
        increment++;
    }
    lastValue = +number;
});

console.log(increment);
