function City(){
  this.getPopulation = function(city) {
    city = city.toLowerCase();
    switch (city) {
      case 'santos':
        return 1231321323;
      case 'florianopolis':
        return 878978797;
      default:
        return '';
    }
  }
}

function cityProxy(){
  return (function(){
    let city;
    if(!city) city = new City(); // static, singleton
    let cache;
    if(!cache) cache = {}; // static

    return {
      getPopulation: function(name){
        if(!cache[name]){
          cache[name] = city.getPopulation(name);
        }
        return cache[name];
      },
      _isCached: function (name) {
        return !!cache[name];
      },
      _getCityObj: function () {
        return city;
      }
    }
  })();

}

module.exports = cityProxy();