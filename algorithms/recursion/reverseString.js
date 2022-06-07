// Reverse a string using iteration and then recursion

function reverseStringIterative(str) {
  // handle edges cases
  if (str.length === 0) {
    return '';
  }

  //return str.split('').reverse().join('');

  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    reverseStr += char;
  }

  return reverseStr;
}

function reverseStringRecursively(str) {
  console.log(str);
  if (str.length === 0) {
    return '';
  } else {
    return reverseStringRecursively(str.substring(1)) + str.charAt(0);
  }
}

//===== Test ======
console.log(reverseStringIterative('alpha'));
console.log(reverseStringIterative('mango'));
console.log(reverseStringIterative('orange'));
console.log(reverseStringIterative('yoyo mastery'));
console.log('-----------------------');
console.log(reverseStringRecursively('yoyo mastery'));
console.log(reverseStringRecursively('avocado'));
