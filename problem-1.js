// ** using for of loop :
const numbers = [1, 3, 5, 7, 9];
const evenNumber = [];
for (const num of numbers) {
  const newNum = num + 1;
  evenNumber.push(newNum);
}
console.log("even number:", evenNumber);

// ** using map :
const evenNumber2 = numbers.map((n) => n + 1);
console.log("even number:", evenNumber2);
