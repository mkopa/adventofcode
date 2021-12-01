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

// part 2
lastValue = -1;
increment = 0;

for (let i = 2; i < input.length; i++) {
  const number = (+input[i-2]) + (+input[i-1]) + (+input[i]);
  if (number > lastValue) {
    if (i >= 3){
      increment++;
    }
  }
  lastValue = number;
}


console.log(increment);
