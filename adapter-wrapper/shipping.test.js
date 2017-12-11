const { Shipping, ShippingAdapter } = require('./shipping');

test('Adapter / Wrapper Pattern of Shipping', () => {
  const shipping = new Shipping();

  // original shipping object and interface

  const cost = shipping.request('12345', '54321', '2kg');

  expect(cost).toBe('$49.75');

  // new shipping object with adapted interface

  const credentials = { token: '30a8-6ee1' };
  const adapter = new ShippingAdapter(credentials);

  const cost2 = adapter.request('12345', '54321', '2kg');

  expect(cost2).toBe('$39.50');
});
