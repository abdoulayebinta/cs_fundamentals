const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
};

//====== Test ====== //
const nums1 = [34, 23, 10, 55, 66, 1, 4, 5];
const nums2 = [9, 5, 3, 2, 1, 4, 6, 7, 8];
console.log(selectionSort(nums1));
console.log(selectionSort(nums2));
