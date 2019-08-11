const { ValuePair } = require('./value-pair');

class ValuePairLazy extends ValuePair {
    constructor(key, value, isDeleted = false) {
        super(key, value);
        this.key = key;
        this.value = value;
        this.isDeleted = isDeleted;
    }
}

module.exports = {
    ValuePairLazy: ValuePairLazy
}