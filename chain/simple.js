/*
    Chain of responsability example
*/

const Request = function(amount){
  this.amount = amount;
  //console.log('Ammount added', amount);
};

Request.prototype.get = function(bill){
  const count = Math.floor(this.amount / bill);
  this.amount -= bill * count;
  //console.log('Discounted ' + bill, count);
  return this;
};


module.exports = Request;