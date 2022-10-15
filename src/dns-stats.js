const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    return domains.reduce((acc, item) => {
        let array = item.split('.').reverse();
        let str = '';
        for (let i = 0; i < array.length; i++) {
            str += `.${array[i]}`;
            acc.hasOwnProperty(str) ? acc[str] += 1 : acc[str] = 1;
        }
        return acc
    }, {})
}

console.log(getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
]));

module.exports = {
    getDNSStats
};
