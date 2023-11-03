/* complex_program.js */

// This code demonstrates a sophisticated program that calculates the Fibonacci series up to a given number
// It employs recursion, memoization, and dynamic programming techniques to optimize performance

// Function to calculate the Fibonacci series using memoization
function fibonacci(n, cache = {}) {
  if (n in cache) {
    return cache[n];
  }
  
  if (n <= 2) {
    return 1;
  }
  
  const result = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);
  cache[n] = result;
  
  return result;
}

// Function to generate a Fibonacci series up to a given number
function generateFibonacciSeries(limit) {
  const fibonacciSeries = [];
  
  for (let n = 1; fibonacci(n) <= limit; n++) {
    fibonacciSeries.push(fibonacci(n));
  }
  
  return fibonacciSeries;
}

// Main program logic
function main() {
  const limit = 10000;
  const fibonacciSeries = generateFibonacciSeries(limit);
  
  console.log(`Fibonacci series up to ${limit}:`);
  console.log(fibonacciSeries);
}

main();