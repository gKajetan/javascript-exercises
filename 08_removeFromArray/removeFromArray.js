const removeFromArray = function (array, ...removeElem) {
  const setToRemove = new Set(removeElem);
  
  const newArr = array.filter(function (element) {
    return !setToRemove.has(element);
  });

  return newArr;
};