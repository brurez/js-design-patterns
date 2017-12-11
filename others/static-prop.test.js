const MyClass = require('./static-prop');

test('Static Property', () => {
  const my = new MyClass();
  expect(MyClass.staticProp).toBe(10);
  MyClass.addToStaticProp(5);
  expect(MyClass.getStaticProp()).toBe(15);
  expect(my.name).toBe('Bruno');
});


