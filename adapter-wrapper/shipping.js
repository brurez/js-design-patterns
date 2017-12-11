/*
  Convert the interface of a class into another interface clients expect.
  Adapter lets classes work together that couldn't otherwise because of
  incompatible interfaces.
  source: http://www.dofactory.com/javascript/adapter-design-pattern
 */

//old interface

function Shipping() {
  this.request = function(zipStart, zipEnd, weight) {
    // ...
    return '$49.75';
  };
}

//new interface

function AdvancedShipping() {
  this.login = function(credentials) {
    /* ... */
  };
  this.setStart = function(start) {
    /* ... */
  };
  this.setDestination = function(destination) {
    /* ... */
  };
  this.calculate = function(weight) {
    return '$39.50';
  };
}

//adapter interface

function ShippingAdapter(credentials) {
  const shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function(zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

module.exports = { Shipping, ShippingAdapter };
