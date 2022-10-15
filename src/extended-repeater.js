const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING',
 * {
 * repeatTimes: 3,
 * separator: '**',
 * addition: 'PLUS',
 * additionRepeatTimes: 3,
 * additionSeparator: '00'
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    str = String(str);
    let newStr = '';
    let arrMainStr = [];
    let arrAdditionStr = [];
    let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
    let separator = options.separator ? options.separator : '+';
    let addition = String(options.addition) !== 'undefined' ? options.addition : '';
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

    console.log(options.addition)

    for(let i = 0; i < repeatTimes; i++){
        arrMainStr.push(String(str))
    }

    for (let j = 0; j < additionRepeatTimes; j++){
        if (addition !== 'undefined'){
            arrAdditionStr.push(String(addition));
        }

        arrAdditionStr.push(additionSeparator);
    }
    console.log(arrAdditionStr)
    arrAdditionStr.splice(arrAdditionStr.length -1 ,1)
    console.log(arrAdditionStr)

    for (let k = 0; k < arrMainStr.length; k++){
        arrMainStr[k] += arrAdditionStr.join('');
    }

    console.log(arrMainStr)
    console.log(options.separator)

    /*for(let i = 0; i < options.repeatTimes; i++){
       newStr += str;
       for (let j = 0; j < options.additionRepeatTimes; j++){
           arrAdditionStr.push(options.addition);
           arrAdditionStr.push(options.additionSeparator);
       }
        console.log(arrAdditionStr)
       newStr += arrAdditionStr.splice(arrAdditionStr.length -1 ,1).join('')

       // newStr += options.addition ? String(options.addition) + options.additionSeparator : '';
    }*/
    return arrMainStr.join(`${separator || '+'}`)
}

/*
options является object опцией, которая содержит свойства:
    repeatTimes устанавливает number количество повторений str;
    separator является string разделяющим повторением str;
    addition является дополнительным string, который будет добавляться к каждому повторению str;
    additionRepeatTimes устанавливает number количество повторений addition;
    additionSeparator является string разделяющим повторением addition.
    */

/*console.log(repeater('STRING',
    {
        repeatTimes: 3,
        separator: '**',
        addition: 'PLUS',
        additionRepeatTimes: 3,
        additionSeparator: '00'
    }
));*/

console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' })
);

console.log(repeater('la', { repeatTimes: 3 })
);

module.exports = {
    repeater
};
