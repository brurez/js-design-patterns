const User = (function() {
  let instance;

  const init = data => {
    const _data = data ? data : []; // can't be accessed outside this scope

    function add(item) {
      _data.push(item);
    }

    function get(id) {
      return _data.find(item => item.id === id);
    }

    return {
      add: add,
      get: get,
    };
  };

  /* methods cannot be changed,
    nor can new methods or properties be added to it */
  return {
    getInstance: data => {
      if (!instance) {
        instance = init(data);
      }
      return instance;
    },
  };
})();

//=============================================================

const user = User.getInstance([{ id: 1, name: 'Bruno' }]);

user.add({ id: 2, name: 'Babi' });
console.log(user.get(1)); // { id: 1, name: 'Bruno' }

const user2 = User.getInstance();

console.log(user2.get(2)); // { id: 2, name: 'Babi' }

console.log(User._data); //undefined