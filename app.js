// ? Task:Find Average of Numbers


// Solution 1

const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 2, 3, 4));
// Result: 2.5

// ! Explanation: Find the average between multiple numbers using reduce method.
