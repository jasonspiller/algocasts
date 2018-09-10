// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  // // SOLUTION 1
  // if (Math.sign(n) < 0) {
  //   return parseInt(n.toString().split('').reverse().join('')) * -1;
  // } else {
  //   return parseInt(n.toString().split('').reverse().join(''));
  // }

  // // SOLUTION 2
  // return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);

  // SOLUTION 3
  const reverseInt = n
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reverseInt) * Math.sign(n);

}

console.log(reverseInt(-15))

module.exports = reverseInt;
