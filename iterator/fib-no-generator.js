const fibNoGen = {
  [Symbol.iterator]() {
    let pre = 0;
    let current;
    return {
      next(){
        if(current)
          [ pre, current ] = [current, current + pre ];
        else
          current = 1;

        return {
          done: current > 1000,
          value: current
        }
      }
    }
  }
};

for( let item of fibNoGen ){
  console.log(item);
}
