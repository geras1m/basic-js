const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
    if (!Array.isArray(arr)) {
        throw Error(`'arr' parameter must be an instance of the Array!`);
    }

    let copyOfArray = arr.slice();
    let newArray = [];
    let result = [];

    for (let i = 0; i < copyOfArray.length; i++) {

        if (copyOfArray[i] === '--discard-next') {
            if (i + 1 > copyOfArray.length) {
                delete copyOfArray[i]
                newArray = copyOfArray.slice()
                i = 0
            } else {
                copyOfArray.splice(i + 1, 1);
                delete copyOfArray[i]
                newArray = copyOfArray.slice()
                i = 0
            }
        }
        if (copyOfArray[i] === '--discard-prev') {
            if (i - 1 < 0) {
                delete copyOfArray[i]
                newArray = copyOfArray.slice()
                i = 0
            } else {
                delete copyOfArray[i]
                copyOfArray.splice(i - 1, 1);
                newArray = copyOfArray.slice()
                i = 0
            }
        }
        if (copyOfArray[i] === '--double-next') {
            if (i + 1 > copyOfArray.length - 1) {
                delete copyOfArray[i]
                newArray = copyOfArray.slice()
                i = 0
            } else {
                copyOfArray.splice(i + 1, 0, copyOfArray[i + 1]);
                delete copyOfArray[i]
                newArray = copyOfArray.slice()
                i = 0
            }
        }
        if (copyOfArray[i] === '--double-prev') {
            if (i - 1 < 0) {
                delete copyOfArray[i]
                newArray = copyOfArray.slice()
                i = 0
            } else {
                delete copyOfArray[i]
                copyOfArray.splice(i - 1, 0, copyOfArray[i - 1]);
                newArray = copyOfArray.slice()
                i = 0
            }
        }

    }

    for(let j = 0; j < newArray.length; j++){
        if (newArray[j]){
            result.push(newArray[j])
        }
    }

    return result
}

console.log(transform([]))
/*console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
console.log(transform([ 2, 3, '--double-next',7]))
console.log(transform([ 2, 3, '--discard-prev',7]))
console.log(transform([ 2, 3, '--double-prev',7]))
console.log('--------------------------------------------')
console.log(transform([ 2, 3, 7, '--discard-next']))
console.log(transform([ 2, 3, 7, '--double-next']))
console.log(transform([ '--discard-prev',2, 3, 7]))
console.log(transform([ '--double-prev', 2, 3, 7]))*/

/*
--discard-next исключает следующий элемент массива из преобразованного массива.
--discard-prev исключает предыдущий элемент массива из преобразованного массива.
--double-next дублирует следующий элемент массива в преобразованном массиве.
--double-prev дублирует предыдущий элемент массива в преобразованном массиве.
* */

module.exports = {
    transform
};
