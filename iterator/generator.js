const obj = { value: 100 };

obj[Symbol.iterator] = function*() {
  yield this.value + 1;
  yield this.value + 10;
};

module.exports = obj;
