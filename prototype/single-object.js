const person = {
  name: 'Bruno'
};


const employee = Object.create(person);

console.log(employee.name);

employee.name = 'Babi';

console.log(employee.name, person.name);