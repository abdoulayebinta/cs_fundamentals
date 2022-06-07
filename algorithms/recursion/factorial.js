// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop.

const factorialRecursive = (number) => {
  if (number === 0 || number === 1) return number;

  return number * factorialRecursive(number - 1);
};

const factorialIterative = (number) => {
  let product = 1;
  if (number === 2) {
    product = 2;
  }

  for (let i = 2; i <= number; i++) {
    product *= i;
  }

  return product;
};

//=== Test === //
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log('-----------------------');
console.log(factorialIterative(4));
console.log(factorialIterative(5));
console.log(factorialIterative(3));
