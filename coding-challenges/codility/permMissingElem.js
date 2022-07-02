// Solution 1: using brute force
function perMissingElem1(arr) {
  for (let i = 1; i <= arr.length + 1; i++) {
    // O(n+1)
    if (arr.indexOf(i) === -1) {
      // O(n)
      return i;
    }
  }
}

// Time Complexity: O(n(n+1)) = O (n^2 + n) = O(n^2)
// Space Complexity: O(1)

// Solution 2 using Hash Table
function perMissingElem2(arr) {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    hashTable[arr[i]] = arr[i]; // O(n)
  }

  for (let j = 1; j <= arr.length + 1; j++) {
    // O(n + 1)
    if (!hashTable[j]) {
      return j;
    }
  }
}

// CPU: O(n + n + 1) = O(n)
// MEM: O(n)

// Solution 3
function perMissingElem(arr) {
  let maxNumber = arr.length + 1;
  let grandTotal = (maxNumber * (maxNumber + 1)) / 2; // O(1)
  let total = arr.reduce((prevValue, currValue) => prevValue + currValue, 0); // O(n)
  return grandTotal - total;
}

// CPU: O(n)
// MEM: O(1)

//==== Test ====
console.log(perMissingElem([2, 3, 1, 5])); // 4
console.log(perMissingElem([1, 2, 3, 4, 5, 6, 7, 8, 9])); // 5
// Edge case
console.log(perMissingElem([])); // 1 ->
