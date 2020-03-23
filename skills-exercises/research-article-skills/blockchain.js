const SHA256 = require('crypto-js/sha256');

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
  }

  calculateHash() {
    return SHA256(
      this.index +
        this.previousHash +
        this.timestamp +
        JSON.stringify(this.data)
    ).toString();
  }
}
class Blockchain {
  constructor() {
    this.chain = [this.createGenisisBlock()];
  }

  createGenisisBlock() {
    return new Block(0, '23/03/2020', 'Genisis Block', '0');
  }

  getLatestBlock() {
    return this.chain[(this, chain.length - 1)];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().previousHash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push();
  }
    isChainValid() {
        for (let itertor = 1; iterator < this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousHash = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash())
                return false;
            if (currentBlock.previousHash !== previousBlock.hash)
                return false;
            
        }
        return true;
    }
}
