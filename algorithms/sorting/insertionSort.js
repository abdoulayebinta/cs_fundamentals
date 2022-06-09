const insertionSort = (array) => {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where to insert the number
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the correct position
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
};

// Complexity Analysis
// Time Complexity: O(n^2) in the worst case, the best case O(n) when data is sorted
// Space Complexity: 0(1)

//==== Test =====
const numbers = [32, 15, 4, 1, 45, 60, 0, 35];
const numbers2 = [102, 99, 3, 2, 50, 34, 1, 35];
console.log(insertionSort(numbers));
console.log(insertionSort(numbers2));
