
class MyClass {

  constructor(){
    this.name = 'Bruno';
  }

  static getStaticProp(){
    return MyClass.staticProp;
  }
  static addToStaticProp(num = 1){
    MyClass.staticProp += num;
  }
}

MyClass.staticProp = 10;

module.exports = MyClass;