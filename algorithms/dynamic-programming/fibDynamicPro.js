let nbCalculation = 0;

// Time complexity: O(2^n)
// Space complexity: O(1)?
function fibonacci(n) {
  // nbCalculation++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Fibonacci using Dynamic Programming
// Time complexity: O(n)
// Space complexity: O(n)
function fibonacciDP() {
  let cache = {};
  return function fib(n) {
    nbCalculation++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

// DP bottom up approach
function fibonacciDP2(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i - 2] + answer[i - 1]);
  }
  return answer.pop();
}

// ==== Test ====
console.log(fibonacci(10));
// console.log(`Number of calucation: ${nbCalculation}`);

const fibDP = fibonacciDP();
console.log('DP', fibDP(10));
console.log(`Number of calucation: ${nbCalculation}`);
