const Mortgage = require('./mortgage');

test('Facade pattern - Mortgage', () => {
  const mortgage = new Mortgage('Bruno');

  expect(mortgage.apply(1000000)).toEqual(
    'Bruno has been approved for a 1000000 mortgage',
  );
});
