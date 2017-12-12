class MyIterable {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.items.length) {
          return {
            value: this.items[this.index++],
            done: false
          };
        } else {
          this.index = 0;
          return {
            done: true
          };
        }
      }
    };
  }
}

module.exports = MyIterable;
