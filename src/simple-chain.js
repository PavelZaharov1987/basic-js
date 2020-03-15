const chainMaker = {
  chain: [], 

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (typeof (position) !== 'number' ||
      parseInt(position) !== position ||
      position > this.chain.length ||
      position < 1) {
      this.chain = [];
      throw new Error()
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishChain = this.chain.slice(0, this.chain.length);
    this.chain = [];
    return finishChain.join('~~');
  }
};

module.exports = chainMaker;