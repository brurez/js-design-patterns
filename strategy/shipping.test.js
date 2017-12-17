const { Shipping, UPS, Correios } = require('./shipping');

test('Strategy design pattern shipping', () => {
  const shipping = new Shipping();

  shipping.setStrategy(new UPS());
  expect(shipping.calculate('11025020')).toBe(101);

  shipping.setStrategy(new Correios());
  expect(shipping.calculate('11025020')).toBe(100);
});
