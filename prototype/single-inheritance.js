const compare = require('./compare');

const Person = function(name) {
  this.name = name;
};

Person.prototype.getName = function() {
  return this.name;
};

const Employee = function(name, salary){
  Person.call(this, name);
  this.salary = salary;
};

const extend = function(child, parent){
  child.prototype = Object.create(parent.prototype);
  if(typeof child === 'function')
    child.prototype.constructor = child;
};

extend(Employee, Person);

const empl = new Employee('Bruno', 10000);

console.log(empl.getName());

class Person2 {
  constructor(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}

class Employee2 extends Person2 {
  constructor(name, salary){
    super(name);
    this.salary = salary;
  }
}

const empl2 = new Employee2('Bruno', 10000);

console.log(empl.getName());

console.log(compare(Employee, Employee2)); //true
console.log(compare(empl, empl2)); //false on constructor