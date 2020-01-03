function solution(number){
  let array = [];
  for(let i = 0; i < number; i++) {
    array.push(i);
  }
  return array.reduce((acc, val) => {
    if(val % 3 === 0 || val % 5 === 0) acc += val;
    return acc;
  }, 0)
}

console.log(solution(10));