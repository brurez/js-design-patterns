const user = require('./module');

user.add({ id: 1, name: 'Bruno' });
console.log(user.get(1)); // { id: 1, name: 'Bruno' }

const user2 = require('./module');

console.log(user2.get(1)); // { id: 1, name: 'Bruno' }