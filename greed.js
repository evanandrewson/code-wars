function score( dice ) {
  let library = {};
  let score = 0
  dice.forEach(die => {
    if(library[die]) {
      library[die]++
    } else {
      library[die] = 1
    }
  });
  for (const key in library) {
    switch(key) {
      case '1':
        if(library[key] === 3) {
          score += 1000
        } else if(library[key] === 1) {
          score += 100
        } else if(library[key] === 2) {
          score += 200
        } else if(library[key] === 4) {
          score += 1100
        } else {
          score += 1200
        }
        break;
      case '2':
        if(library[key] >= 3) {
          score += 200
        }
        break;
      case '3':
        if(library[key] >= 3) {
          score += 300
        }
        break;
      case '4':
        if(library[key] >= 3) {
          score += 400
        }
        break;
      case '5':
        if(library[key] === 3) {
          score += 500
        } else if(library[key] === 1) {
          score += 50
        } else if(library[key] === 2) {
          score += 100
        } else if(library[key] === 4) {
          score += 550
        } else {
          score += 600
        }
        break;
      case '6':
        if(library[key] >= 3) {
          score += 600
        }
        break;  
    }
  }
  return score;
}