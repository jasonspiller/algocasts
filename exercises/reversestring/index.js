// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) => {
  
  // // SOLUTION 1
  // var arrString = str.split('');
  // var strReverseString = '';

  // for (var i = arrString.length - 1; i >= 0; i--) {
  //   strReverseString += arrString[i];
  // }

  // return strReverseString;

  // // SOLUTION 2
  // return str.split('').reverse().join('');

  // // SOLUTION 3
  // let strReverseString = '';

  // for (let character of str) {
  //   strReverseString = character + strReverseString;
  // }

  // return strReverseString;

  // SOLUTION 4
  debugger;
  return str.split('').reduce((reverse, char) => char + reverse, '');
}

console.log(reverse('apple'));

module.exports = reverse;
