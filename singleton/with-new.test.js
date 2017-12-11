const DB = require('./with-new');

test('Singleton using New keyword', () => {
  const db = DB.getInstanceOf('mysql');

  const db2 = DB.getInstanceOf('mysql');

  expect(db).toEqual(db2);
  expect(db.getConnection()).toBe('mysql')
});