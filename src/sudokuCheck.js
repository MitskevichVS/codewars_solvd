function doneOrNot(board) {
  const sudokuMatrix = board;
  let flag = true;

  // Validate row function:
  const checkRows = (matrix) => {
    // summ function:
    const reducer = (acc, value) => acc + value;
    // check sorted row function:
    const checkSortedRow = (row) => {
      let sortedRowFlag = true;
      row.forEach((item, index) => {
        if (item !== index + 1) {
          sortedRowFlag = false;
        }
      });
      return sortedRowFlag;
    };

    // Main checkRows cycle:
    matrix.forEach((item) => {
      // Calculate summ
      const summ = item.reduce(reducer);
      // Create new array from row:
      let sortedItem = Array.from(item);
      sortedItem = sortedItem.sort();
      // Main checkRows condition
      if (summ !== 45 && !checkSortedRow(sortedItem)) {
        flag = false;
      }
    });
    return flag;
  };

  // Check columns function:
  const checkCols = (matrix) => {
    // Create new matrix:
    let transMatrix = [];
    // Main checkCols cycle(transpose matrix to use checkRows function):
    matrix.forEach((item) => {
      item.forEach((subItem, subIndex) => {
        if (!transMatrix[subIndex]) {
          transMatrix[subIndex] = [];
        }
        transMatrix[subIndex].push(subItem);
      });
    });
    // Main checkCols condition
    if (checkRows(transMatrix)) {
      return true;
    } return false;
  };

  // check regions function:
  const checkRegions = (matrix) => {
    // create new matrix:
    let cols = [];
    let grid = [];

    matrix.forEach(() => {
      cols.push([]);
      grid.push([]);
    });

    // main checkRegions cycle (create rows from regions to use checkRows function)
    matrix.forEach((item, index) => {
      item.forEach((subItem, subIndex) => {
        cols[subIndex][index] = subItem;
        const gridRow = Math.floor(index / 3);
        const gridCol = Math.floor(subIndex / 3);
        const gridIndex = gridRow * 3 + gridCol;

        grid[gridIndex].push(subItem);
      });
    });

    // Main checkRegions condition:
    if (checkRows(grid)) {
      return true;
    } return false;
  };

  // main doneOrNot condition:
  if (checkRows(sudokuMatrix) && checkCols(sudokuMatrix) && checkRegions(sudokuMatrix)) {
    return 'Finished!';
  } return 'Try again!';
}
