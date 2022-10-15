const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let firstString = s1.split('');
  let secondString = s2.split('');
  let count = 0;
  let firstLength = firstString.length;
  let secondLength = secondString.length;

  for (let i = 0; i < firstLength; i++){
    for (let j = 0; j < secondLength; j++){
      if (firstString[i] === secondString[j]){
        count += 1;
        secondString.splice(j, 1);
        j = 0;
        break;
      }
    }
  }
  console.log(count)
  return count
}

getCommonCharacterCount('aabcc', 'adcaa')
module.exports = {
  getCommonCharacterCount
};
