const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/*str*/) {
/*    let array = str.split('');
    let acc = {};
    let newStr = '';
    for (let i = 0; i < array.length; i++){
        if (array[i] === array[i+1]){
            acc.hasOwnProperty(i) ? acc[i] += 1 : acc[i] = 1;
        }
    }


    for (const accKey in acc) {
        if(acc[accKey] === 1){
            newStr += accKey
        }else {
            newStr += `${acc[accKey]}${accKey}`
        }
    }
    return newStr*/

    // let array = str.split('');
    // let newStr = '';
    // let count = 1;
    // for (let i = 0; i < array.length; i++){
    //     if(array[i] === array[i+1]){
    //         count++;
    //
    //     }else {
    //         newStr += array[i]
    //     }
    // }
    // return newStr
}

console.log(encodeLine('aabbbc'))

module.exports = {
    encodeLine
};
