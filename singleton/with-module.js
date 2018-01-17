const user = require('./module1');

user.add({ id: 1, name: 'Bruno' });
//console.log(user.get(1)); // { id: 1, name: 'Bruno' }

const user2 = require('./module1');

//console.log(user2.get(1)); // { id: 1, name: 'Bruno' }

require('./module2');

console.log(user.get(2));
