const isValidParentheses = (s) => {
  if (s.length === 0) {
    return false;
  }

  let stack = [];
  let pairsHashMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (pairsHashMap[char]) {
      stack.push(char);
    } else if (pairsHashMap[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

//== Test cases
console.log(isValidParentheses('()'));
console.log(isValidParentheses('({[]})'));
console.log(isValidParentheses('({[]})){'));
console.log(isValidParentheses('()[]{}'));
console.log(isValidParentheses('(]'));
console.log(isValidParentheses('('));

// ==== Analysis
// Time complexity: O(n) we iterate through input string just once
// Space complexity: O(n) In worst case,
