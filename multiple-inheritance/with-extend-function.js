/* Multiple inheritance copying constructor */

function extend(destination, source) {
  for (let k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}

const Chair = function(height) {
  if (height) this.height = height;
};

Chair.prototype.height = 60;

//Cannot be arrow function, breaks this variable
Chair.prototype.isTooTall = function() {
  return this.height >= 100;
};

const Wheel = function(material) {
  this.material = material;

  this.strong = ['steel', 'titanium'];

  this.isStrong = () => {
    return this.strong.indexOf(this.material) >= 0;
  };
};

const Battery = {
  capacity: 0,
  charge: function(amount) {
    return (this.capacity += amount);
  },
};

const WheelChair = function(height) {
  this.height = height ? height : this.height;
};

extend(WheelChair.prototype, Chair.prototype);
extend(WheelChair.prototype, Wheel.prototype);
extend(WheelChair.prototype, Battery); // no prototype

const chair = new Chair(10);
const wheel = new Wheel('steel');
const battery = Object.create(Battery);

const wheelChair = new WheelChair(200);

console.log(chair.isTooTall()); //false 10 < 100
console.log(wheel.isStrong()); //true

console.log(wheelChair.height); // 200
console.log(wheelChair.isTooTall()); // 200 > 100
console.log(wheelChair.charge(30));
console.log('Capacity: ', wheelChair.capacity); // 30

// undefined because function is defined in the constructor
console.log(typeof wheelChair.isStrong); // undefined
