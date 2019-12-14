function solution(list){

  const findInterval = (arr, element, start) => {
    let endIndex = start + 1;
    let startElement = element;
    let intermediateElement = arr[endIndex];
  
    while (startElement + 1 === intermediateElement) {
      startElement = intermediateElement;
      endIndex += 1;
      intermediateElement = arr[endIndex];
    };
    
    endIndex -= 1;
    const endElement = arr[endIndex];
    return [endIndex, element, endElement];
  };

  let newArr = [];
  for (let index = 0; index < list.length; index += 1){
    if (list[index] + 2 === list[index + 2]) {
      const slicedInterval = findInterval(list, list[index], index);
      index = slicedInterval[0];
      const [, startEl, endEl] = slicedInterval;
      newArr.push(`${startEl}-${endEl}`);
    } else newArr.push(list[index]);
  }

  return newArr.join(',');
}