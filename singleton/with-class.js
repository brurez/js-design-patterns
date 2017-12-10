const User = (function(){

  const dataKey = Symbol();

  class Store {
    constructor(){
      this[dataKey] = [];
    }

    add(item){
      this[dataKey].push(item);
    }

    get(id){
      return this[dataKey].find(d => d.id === id);
    }
  }

  const instance = new Store();
  return Object.freeze(instance);
})();

//=====================================================================

const user = User;

user.add({ id: 1, name: 'Bruno' });
console.log(user.get(1)); // { id: 1, name: 'Bruno' }

const user2 = User;

console.log(user2.get(1)); // { id: 1, name: 'Bruno' }

console.log(User._data); //undefined