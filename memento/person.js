const Person = function(name, street, city, state) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
};

Person.prototype = {
  hydrate: function() {
    return JSON.stringify(this);
  },
  dehydrate: function(memento) {
    const m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  },
};

const Backup = function() {};
Backup.data = {}; //static
Backup.prototype.store = function(key, memento) {
  Backup.data[key] = memento;
};
Backup.prototype.restore = function(key) {
  return Backup.data[key];
};

module.exports = { Person, Backup };
