const fibWithGen = {
  [Symbol.iterator]: function*(){
    let pre = 0;
    let current;

    for(;;){
      if(current)
        [ pre, current ] = [current, current + pre ];
      else
        current = 1;

      if(current < 1000)
        yield current;
      else
        break;
    }


  }
};

for(let item of fibWithGen){
  console.log(item);
}
