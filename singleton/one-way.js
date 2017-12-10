/* This code doesn’t give us the immutability we desire when making use of singletons.
  Code executed later could modify either one of the exposed functions */

const User = (function(){
  const store = (function(){
    const _data = []; // can't be accessed outside this scope

    function add(item){
      _data.push(item);
    }

    function get(id){
      return _data.find( item => item.id === id);
    }

    return {
      add: add,
      get: get
    }
  })();

  /* methods cannot be changed,
    nor can new methods or properties be added to it */
  return Object.freeze(store);

})();

//=============================================================

const user = User;

user.add({ id: 1, name: 'Bruno' });
console.log(user.get(1)); // { id: 1, name: 'Bruno' }

const user2 = User;

console.log(user2.get(1)); // { id: 1, name: 'Bruno' }

console.log(User._data); //undefined

