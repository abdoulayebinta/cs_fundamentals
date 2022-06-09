function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // split array into left and right
  let length = array.length;
  let middle = Math.floor(length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//===== Test =========
const numbers = [9, 99, 0, 5, 87, 13, 1, 2];
const numbers2 = [9, 1, 3, 2, 7, 8, 4, 6, 5];
console.log(mergeSort(numbers));
console.log(mergeSort(numbers2));
