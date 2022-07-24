// CPU: O(1)
// MEM: O(1)
function frogJump2(x, y, d) {
  let firstJump = x + d;
  let countJump = 1;
  // D'ont jump when x === y
  if (x === y) {
    return 0;
  }
  if (firstJump >= y) {
    return countJump;
  } else {
    while (firstJump < y) {
      firstJump += d;
      countJump++;
    }
    return countJump;
  }
}

function frogJump(x, y, d) {
  return Math.ceil((y - x) / d);
}

// console.log(frugJump(10, 85, 80)); // 1 jump
// console.log(frugJump(10, 85, 30)); // 3 jump
// console.log(frugJump(0, 100, 25)); // 4 jumps
// console.log(frugJump(0, 100, 100)); // 1
// console.log(frugJump(0, 100, 10));
// console.log(frugJump(20, 100, 10));
// console.log(frogJump(20, 20, 25)); // 0
console.log(frogJump(1, 1, 3)); // 0
