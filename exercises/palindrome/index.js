// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const palindrome = (str) => {

  // // SOLUTION 1
  // let bolPalindrome = false;

  // if (str == str.split('').reverse().join('')) {
  //   bolPalindrome = true;
  // }

  // return bolPalindrome;


  // // SOLUTION 2
  // return str == str.split('').reverse().join('');


  // SOLUTION 3
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })

}

console.log(palindrome('tit'));


module.exports = palindrome;
