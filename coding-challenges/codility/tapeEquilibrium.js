function equilibrium1(arr) {
  let minimum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    arr.slice(0, i).forEach((number) => (leftSum += number));
    arr.slice(i).forEach((number) => (rightSum += number));

    if (Math.abs(leftSum - rightSum) < minimum) {
      minimum = Math.abs(leftSum - rightSum);
    }
  }

  return minimum;
}

// CPU: O(n^2)
// MEM: O(n)

function equilibrium(arr) {
  let leftSum = arr[0];
  let rightSum = 0;
  arr.slice(1).forEach((number) => (rightSum += number));

  let diff = Math.abs(leftSum - rightSum);
  for (let i = 1; i < arr.length - 1; i++) {
    leftSum += arr[i];
    rightSum -= arr[i];
    let currentDiff = Math.abs(leftSum - rightSum);

    if (currentDiff < diff) {
      diff = currentDiff;
    }
  }

  return diff;
}
// CPU: O(n)
// MEM: O(1)

console.log(equilibrium([3, 1, 2, 4, 3]));
