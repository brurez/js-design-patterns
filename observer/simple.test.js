const { Subject } = require('./simple');

test('Observer Simple Test', () => {
  let output = [];

  const subject = new Subject();

  const observer = function(e){
    output[0] = e + ' fired!' ;
  };

  subject.onClick(observer);

  subject.onClick( function(e){
    output[1] = e + ' has also been fired here!';
  });

  subject.click('event 1');

  expect(output[0]).toBe('event 1 fired!');
  expect(output[1]).toBe('event 1 has also been fired here!');

  subject.cancelOnClick(observer);

  output = [];

  subject.click('event 2');

  expect(output[0]).toBeUndefined();
  expect(output[1]).toBe('event 2 has also been fired here!');
});

