// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {

  // // SOLUTION 1
  // for (let i = 0; i < n; i++) {
    
  //   let strStep = '';

  //   for (let j = 0; j < n; j++) {
  //     if (i >= j) {
  //       strStep += '#';
  //     } else {
  //       strStep += ' ';
  //     }        
  //   }

  //   console.log(strStep);
    
  // }

  // SOLUTION 2
  
  // base case
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair)
}

steps(10);


module.exports = steps;
