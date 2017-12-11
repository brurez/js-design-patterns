/*
  The Factory class is used to return a set of objects that
  shares same methods and properties names.
  This make the rest of the application not aware of having
  to choose the right class to instanciate.
  Can be used to add methods commom to all classes too.
  It abstract the implementation from the rest of the application
 */

function Factory() {
  this.create = function(type) {
    let obj;
    if (type === 'pdf') {
      obj = new Pdf();
    } else if (type === 'epub') {
      obj = new Epub();
    }

    obj.getExtension = function() {
      return this.extension;
    };

    return obj;
  };
}

function Pdf() {
  this.extension = 'pdf';
  this.readFile = function(fileName) {
    return 'This is a Pdf file named ' + fileName;
  };
}

function Epub(fileName) {
  this.extension = 'epub';
  this.readFile = function(fileName) {
    return 'This is a Epub file named ' + fileName;
  };
}

module.exports = Factory;
