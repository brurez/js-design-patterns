'use strict';

const obj = {
  f: function(){
    //console.log(this);
    const self = this;

    function run(){
      console.log('this', self);
    }

    return run();
  },
  a: 1
};

console.log(obj.f());

