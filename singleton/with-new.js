const DB = (function(){
  let instance;

  const DB = function(connection){
    this.connection = connection;

    /*this.logConnection = function(){
      console.log(this.connection);
    };*/
  };

  DB.prototype.getConnection = function(){
    return this.connection;
  };

  return {
    getInstanceOf: function(connection){
      if( !instance ) instance = new DB(connection);
      return instance;
    }
  }

})();

module.exports = DB;