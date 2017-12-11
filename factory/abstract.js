/*
  The Factory class is used to return a set of objects that
  shares same methods and properties names.
  This make the rest of the application not aware of having
  to choose the right class to instanciate.
  Can be used to add methods commom to all classes too.
 */

function Factory(){
  this.types = [];

  this.create = function(type){
    let obj;
    if(!this.types[type])
      throw new Error('you must register the type');
    obj = new this.types[type]();

    obj.getExtension = function(){
      return this.extension;
    };

    return obj;
  };
  
  this.register = function(type, cls){
    if(!cls.prototype.readFile)
      throw new Error('must have readfile function');
    this.types[type] = cls;
  }
}

function Pdf(){
  this.extension = 'pdf';
}
Pdf.prototype.readFile = function(fileName){
  return 'This is a Pdf file named ' + fileName;
};

function Epub(fileName){
  this.extension = 'epub';
}
Epub.prototype.readFile = function(fileName){
  return 'This is a Epub file named ' + fileName;
};

module.exports = { Factory, Pdf, Epub };