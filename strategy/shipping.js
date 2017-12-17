const Shipping = function(company) {
  this.company = company;
};

Shipping.prototype = {
  setStrategy: function(company) {
    this.company = company;
  },
  calculate: function(zipCode) {
    return this.company.calculate(zipCode);
  },
};

const Correios = function() {
  this.calculate = function(zipCode) {
    return 100;
  };
};

const UPS = function() {
  this.calculate = function(zipCode) {
    return 101;
  };
};

module.exports = { Shipping, Correios, UPS };
