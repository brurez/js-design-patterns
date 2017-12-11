
const Test = (function(){

  let value;

  return function(initial){
    value = initial;

    this.add = function() {
      value++;
    };
    this.getValue = function() {
      return value;
    }
  };


})();

const test = new Test(10);
test.add();
test.log();