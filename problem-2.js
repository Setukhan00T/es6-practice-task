// **using filter :
const numbers = [33, 50, 79, 78, 90, 101, 30];
const result = numbers.filter((n) => n % 10 === 0);
console.log("Divided by 10 :", result);

// **using find :
const result2 = numbers.find((n) => n % 10 === 0);
console.log("Divided by 10 :", result2); //only show one result
