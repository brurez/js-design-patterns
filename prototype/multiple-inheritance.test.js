const Chair = require('./multiple-inheritance').Chair;
const Wheel = require('./multiple-inheritance').Wheel;
const WheelChair = require('./multiple-inheritance').WheelChair;

test('Multiple Inheritance using a function to extend', () => {
  const chair = new Chair(10);
  const wheel = new Wheel('steel');

  const wheelChair = new WheelChair(200);

  expect(chair.isTooTall()).toBeFalsy(); //false 10 < 100
  expect(wheel.isStrong()).toBeTruthy(); //true

  expect(wheelChair.height).toBe(200); // 200
  expect(wheelChair.isTooTall()).toBeTruthy(); // 200 > 100

  wheelChair.charge(30);
  expect(wheelChair.capacity).toBe(30); // 30

// undefined because function is defined in the constructor
  expect(wheelChair.isStrong).toBeUndefined(); // undefined
});