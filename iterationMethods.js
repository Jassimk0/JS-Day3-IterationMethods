const numbers = [10, 13, 20, 25, 38, 35, 40];

let num25 = [];

numbers.forEach((num) => {
  if (num > 25) {
    num25.push(num);
  }
});

console.log(num25);

const result = numbers.filter((num) => {
  if (num > 25) {
    return true;
  }
});

console.log(result);

const result2 = numbers.filter((num) => {
  if (num % 5 === 0) {
    return true;
  }
});

console.log(result2);

const result3 = numbers.map((num) => {
  return num ** 2;
});

console.log(result3);

const result4 = numbers.map((num) => {
  return num * 2;
});

console.log(result4);

let numx25 = [];

numbers.forEach((num) => {
  if (num >= 20) {
    numx25.push(num ** 2);
  }
});

console.log(numx25);

let numdivide5 = [];

numbers.forEach((num) => {
  if (num % 5 === 0) {
    numdivide5.push(num * 3);
  }
});

console.log(numdivide5);
