/*
  This example act as an alternative for the lack of interfaces
  in Javascript by checking if the registered function have a
  method defined in its prototype.
 */

function Factory() {
  this.types = [];

  this.create = function(type) {
    let obj;
    if (!this.types[type]) throw new Error('you must register the type');
    obj = new this.types[type]();

    obj.getExtension = function() {
      return this.extension;
    };

    return obj;
  };

  this.register = function(type, cls) {
    if (!cls.prototype.readFile) throw new Error('must have readfile function');
    this.types[type] = cls;
  };
}

function Pdf() {
  this.extension = 'pdf';
}
Pdf.prototype.readFile = function(fileName) {
  return 'This is a Pdf file named ' + fileName;
};

function Epub() {
  this.extension = 'epub';
}
Epub.prototype.readFile = function(fileName) {
  return 'This is a Epub file named ' + fileName;
};

module.exports = { Factory, Pdf, Epub };
