class MyClass {
  constructor(name){
    let _name = name; //private

    this.setName = function(name){
      _name = name;
    };

    this.getName = function (name) {
      return _name;
    }
  }
}

module.exports =  MyClass;