'use strict';

const Mortage = function(name) {
  this._name = name;
};

Mortage.prototype = {
  apply: function(amount) {
    let result = 'approved';
    if (!new Bank().verify(this._name, amount)) {
      result = 'denied';
    } else if (!new Credit().verify(this._name, amount)) {
      result = 'denied';
    } else if (!new Background().verify(this._name, amount)) {
      result = 'denied';
    }
    return (
      this._name + ' has been ' + result + ' for a ' + amount + ' mortgage'
    );
  },
};

const Bank = function() {
  this.verify = function(name, amount) {
    // complex logic
    return true;
  };
};
const Credit = function() {
  this.verify = function(name, amount) {
    // complex logic
    return true;
  };
};
const Background = function() {
  this.verify = function(name, amount) {
    // complex logic
    return true;
  };
};

module.exports = Mortage;
