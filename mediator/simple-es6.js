class Participant {
  constructor(name){
    this.name = name;
    this.chatroom =  null;
  }

  send(message, to){
    this.chatroom.send(message, this, to);
  }

  receive(message, from){
    console.log(from.name + " to " + this.name + ": " + message);
  }
}

// Singleton
const Chatroom = (function(){
  const participants = {}; //private
  let instance = null;
  return class {
    constructor(){
      if(!instance) instance = this;
      return instance; 
    }
    register(participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    }

    send(message, from, to) {
      if (to) {
        to.receive(message, from);
      } else {
        for (let key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    }
  }
})();

function run() {
  var yoko = new Participant("Yoko");
  var john = new Participant("John");
  var paul = new Participant("Paul");
  var ringo = new Participant("Ringo");

  var chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);
  chatroom.register(ringo);

  yoko.send("All you need is love.");
  yoko.send("I love you John.");
  john.send("Hey, no need to broadcast", yoko);
  paul.send("Ha, I heard that!");
  ringo.send("Paul, what do you think?", paul);

  var chatroom2 = new Chatroom();

  console.log('Is same instance: ', chatroom === chatroom2);

}

run();
