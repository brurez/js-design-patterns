const MyClass = require('./private-prop');

test('Private Property', () => {
  const my = new MyClass('Bruno');

  expect(my.name).toBeUndefined();

  expect(my.getName()).toBe('Bruno');

  my.setName('Babi');
  expect(my.getName()).toBe('Babi');
});