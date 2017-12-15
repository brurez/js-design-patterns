test('Proxy pattern as a singleton cache', () => {
  const proxy = require('./cache');
  expect(proxy.getPopulation('santos')).toBe(1231321323);
  const proxy2 = require('./cache');
  expect(proxy2._isCached('santos')).toBeTruthy(); //cache persisted
  expect(proxy._getCityObj()).toBe(proxy2._getCityObj()); //same Object
});