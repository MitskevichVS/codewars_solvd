function doneOrNot(board) {
  const sudokuMatrix = board;
  let flag = true;
  const checkRows = (matrix) => {
    const reducer = (acc, value) => acc + value;
    matrix.forEach((item) => {
      const summ = item.reduce(reducer);
      if (summ !== 45) {
        flag = false;
      }
    });
    return flag;
  };

  const checkCols = (matrix) => {
    let transMatrix = [];
    matrix.forEach((item) => {
      item.forEach((subItem, subIndex) => {
        if (!transMatrix[subIndex]) {
          transMatrix[subIndex] = [];
        }
        transMatrix[subIndex].push(subItem);
      });
    });
    if (checkRows(transMatrix)) {
      return true;
    } return false;
  };

  const checkRegions = (matrix) => {
    let cols = [];
    let grid = [];

    matrix.forEach(() => {
      cols.push([]);
      grid.push([]);
    });

    matrix.forEach((item, index) => {
      item.forEach((subItem, subIndex) => {
        cols[subIndex][index] = subItem;
        const gridRow = Math.floor(index / 3);
        const gridCol = Math.floor(subIndex / 3);
        const gridIndex = gridRow * 3 + gridCol;

        grid[gridIndex].push(subItem);
      });
    });

    if (checkRows(grid)) {
      return true;
    } return false;
  };

  if (checkRows(sudokuMatrix) && checkCols(sudokuMatrix) && checkRegions(sudokuMatrix)) {
    return 'Finished!';
  } return 'Try again!';
}