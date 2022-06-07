// Given a number N return the index value of the Fibonacci
// sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// Time complexity: O(n)
// Space complexity: O(n)
function fibonacciIterative(n) {
  let sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence[n];
}

// Time complexity: O(2^n)
// Space complexity: O(1) ?
function fibonacciRecursive(n) {
  if (n === 0 || n === 1) return n; // or if (n < 2)

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//==== Test ===
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(8));
console.log('-------------------');
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(8));
