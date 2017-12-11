const Subject = function(){
  this.clickHandlers = [];
};

Subject.prototype = {
  onClick: function (fn) {
    this.clickHandlers.push(fn);
  },

  cancelOnClick: function (fn) {
    this.clickHandlers = this.clickHandlers.filter( item => item !== fn);
  },

  click: function (details) {
    this.clickHandlers.forEach( handler => {
      handler.call(this, details)
    })
  }
};

module.exports = { Subject };