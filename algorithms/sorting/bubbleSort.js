const bubbleSort = (arr) => {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        // let tmp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = tmp;
      }
    }
  }

  return arr;
};

// Bubble sort
// Time complexity: O(n^2)
// Space complexity: O(1)

//===== Test ===== //
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));
console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));
console.log(bubbleSort([]));
console.log(bubbleSort([6, 2]));
console.log(bubbleSort(numbers));
