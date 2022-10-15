const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let defaultArrN = String(n).split('');
  let biggestNumber = 0;

  for (let i = 0; i < defaultArrN.length ; i++){
    let copyOfDefaultArray = defaultArrN.slice();
    copyOfDefaultArray.splice(i, 1);
    let newNumber = +copyOfDefaultArray.join('');

    if(biggestNumber < newNumber){
      biggestNumber = newNumber;
    }
  }
  return biggestNumber
}

console.log(deleteDigit(152));

module.exports = {
  deleteDigit
};
