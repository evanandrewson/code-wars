function solution(number){
  let str = number.toString();
  let arr = str.split('');
  arr = arr.reverse();
  return arr.map((digit, i) => {
    if(i === 0) {
      if(digit === '1') {
        return 'I';
      } else if(digit === '2') {
        return 'II';
      } else if(digit === '3') {
        return 'III';
      } else if(digit === '4') {
        return 'IV';
      } else if(digit === '5') {
        return 'V';
      } else if(digit === '6') {
        return 'VI';
      } else if(digit === '7') {
        return 'VII';
      } else if(digit === '8') {
        return 'VIII';
      } else if(digit === '9') {
        return 'IX';
      }
    } else if(i === 1) {
      if(digit === '1') {
        return 'X';
      } else if(digit === '2') {
        return 'XX';
      } else if(digit === '3') {
        return 'XXX';
      } else if(digit === '4') {
        return 'XL';
      } else if(digit === '5') {
        return 'L';
      } else if(digit === '6') {
        return 'LX';
      } else if(digit === '7') {
        return 'LXX';
      } else if(digit === '8') {
        return 'LXXX';
      } else if(digit === '9') {
        return 'XC';
      }
    } else if(i === 2) {
      if(digit === '1') {
        return 'C';
      } else if(digit === '2') {
        return 'CC';
      } else if(digit === '3') {
        return 'CCC';
      } else if(digit === '4') {
        return 'CD';
      } else if(digit === '5') {
        return 'D';
      } else if(digit === '6') {
        return 'DC';
      } else if(digit === '7') {
        return 'DCC';
      } else if(digit === '8') {
        return 'DCCC';
      } else if(digit === '9') {
        return 'CM';
      }
    } else if(i === 3) {
      if(digit === '1') {
        return 'M';
      } else if(digit === '2') {
        return 'MM';
      } else if(digit === '3') {
        return 'MMM';
      } 
    }
  }).filter(digit => digit !== '0').reverse().join('');
}

console.log(solution(1000));