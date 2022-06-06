/** Count the number of islands
 * @param {character[][]} grid
 * @return {number}
 */

const numIslands = (grid) => {
  let numIsland = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        numIsland++;
        sinkIsland(grid, row, col);
      }
    }
  }

  function sinkIsland(grid, row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      grid[row][col] === '0'
    ) {
      return;
    }

    grid[row][col] = '0';
    sinkIsland(grid, row - 1, col);
    sinkIsland(grid, row + 1, col);
    sinkIsland(grid, row, col - 1);
    sinkIsland(grid, row, col + 1);
  }

  return numIsland;
};

// Time Analysis
// Time complexity: O(MxN); N and M as heigjt and width of
// the matrix
// or O(N); N as the number of cells in the matrix
// Space complexity: O(1) we only modify the input matrix

let grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

let grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid1));
console.log(numIslands(grid2));
