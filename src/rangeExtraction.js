function solution(list) {

  // find interval indexes function
  const findInterval = (arr, element, start) => {
    // assign input variables
    let endIndex = start + 1;
    let startElement = element;
    let intermediateElement = arr[endIndex];

    // loop to find the last element of the range:
    while (startElement + 1 === intermediateElement) {
      startElement = intermediateElement;
      endIndex += 1;
      intermediateElement = arr[endIndex];
    };

    endIndex -= 1;
    const endElement = arr[endIndex];
    // return data to slice specific chunk of array:
    return [endIndex, element, endElement];
  };

  // create new array:
  let newArr = [];
  //main cycle:
  for (let index = 0; index < list.length; index += 1) {
    // check condition:
    if (list[index] + 1 === list[index + 1] && list[index] + 2 === list[index + 2]) {
      // if true, call find interval functon, it return new index,
      // outside of slice interval, and start and end items
      const slicedInterval = findInterval(list, list[index], index);
      index = slicedInterval[0];
      const [, startEl, endEl] = slicedInterval;
      // push intervat to new array
      newArr.push(`${startEl}-${endEl}`);
      // if there are no interval, push item to new array
    } else newArr.push(list[index]);
  }

  // return concatenated array, separated by comma:
  return newArr.join(',');
}