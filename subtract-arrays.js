const array_diff = (arr1, arr2) => {
  let result = arr1;
  arr2.forEach(item => {
    result = result.filter(element => element !== item);
  })
  return result;
}