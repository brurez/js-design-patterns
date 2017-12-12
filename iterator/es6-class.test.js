const MyIterable = require('./es6-class');

test('ES6 Iterable Class', () => {
    const my = new MyIterable(['a', 'b', 'c']);

    const res = [];

    for (let item of my) {
        res.push(item);
    }

    expect(res).toEqual(['a', 'b', 'c']);

    const iterator = my[Symbol.iterator]();

    expect(iterator.next().value).toBe('a');

    expect(iterator.next().value).toBe('b');
});
