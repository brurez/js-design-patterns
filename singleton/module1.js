const _data = []; //private

const User = {
  add: item => _data.push(item),
  get: id => _data.find(item => item.id === id)
};

Object.freeze(User);

module.exports = User;