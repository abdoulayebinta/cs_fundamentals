// Solution 1
function intersection1(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}

// Time complexity: O(m x n) = O(n^2)
// Space complexity: O(n)

// Solution 2
function intersection(arr1, arr2) {
  let dict = {};
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    dict[arr1[i]] = arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] === dict[arr2[j]]) {
      result.push(arr2[j]);
    }
  }

  return result;
}

// Time complexity: O(m + n) = O(N)
// Space complexity: O(N)

//========== Test =======
let arr1 = [3, 1, 4, 2, 7, 9];
let arr2 = [8, 2, 5, 4, 6, 9];

console.log(intersection(arr1, arr2));
