function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mult(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

const Command = function(execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

const AddCommand = function(value) {
  return new Command(add, sub, value);
};
const SubCommand = function(value) {
  return new Command(sub, add, value);
};
const MultCommand = function(value) {
  return new Command(mult, div, value);
};
const DivCommand = function(value) {
  return new Command(div, mult, value);
};

const Calculator = function() {
  let current = 0;
  const commands = [];

  function action(command) {
    return command.execute.name;
  }

  return {
    execute: function(command) {
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(action(command) + ': ' + command.value);
    },

    undo: function() {
      const command = commands.pop();
      current = command.undo(current, command.value);
      console.log('Undo ' + action(command) + ': ' + command.value);
    },

    getCurrentValue: function() {
      return current;
    },
  };
};

function run() {
  const calculator = new Calculator();

  console.log('current: ', calculator.getCurrentValue());
  calculator.execute(new AddCommand(100));
  console.log('current: ', calculator.getCurrentValue());
  calculator.execute(new SubCommand(24));
  console.log('current: ', calculator.getCurrentValue());
  calculator.execute(new MultCommand(6));
  console.log('current: ', calculator.getCurrentValue());
  calculator.execute(new DivCommand(2));

  // reverse last two commands
  console.log('current: ', calculator.getCurrentValue());
  calculator.undo();
  console.log('current: ', calculator.getCurrentValue());
  calculator.undo();

  console.log('Value: ' + calculator.getCurrentValue());
}

run();
