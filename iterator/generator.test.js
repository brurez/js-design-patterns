const obj = require('./generator');

test('Iterating using generator', () => {
   const output = [];

   for (let item of obj) {
        output.push(item);
    }

    expect(output).toEqual([101, 110]);
});