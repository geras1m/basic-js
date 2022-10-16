const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arrayOfChains: [],

  getLength() {
    return this.arrayOfChains.length;
  },

  addLink( value ) {
    this.arrayOfChains.push(`( ${String(value)} )`);
    return this;
  },
  removeLink( position ) {
    // if(typeof position !== 'number' || position % 1 !== 0 || position - 1 < 0 || position - 1 > this.arrayOfChains.length){
    //   throw new Error("You can't remove incorrect link!");
    // }
    if(typeof position === 'number' && position % 1 === 0 && position - 1 >= 0 && position - 1 < this.arrayOfChains.length) {
      this.arrayOfChains.splice(position - 1, 1);
      return this;
    }
    this.arrayOfChains = []
    throw new Error("You can't remove incorrect link!");
  },
  reverseChain() {
    this.arrayOfChains.reverse();
    return this;
  },
  finishChain() {
    console.log(this.arrayOfChains)
    let str = this.arrayOfChains.join('~~')
    this.arrayOfChains = []
    return str;
  }
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())
// console.log(chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain())
console.log(chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain())
console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())

/*
getLength возвращает текущую длину цепочки в виде числа;
addLink(value)добавляет ссылку, содержащую string представление в value цепочку;
removeLink(position)убирает звено цепи в указанном положении;
reverseChain переворачивает цепь;
finishChain заканчивается цепочка и returns она.
*/

module.exports = {
  chainMaker
};
