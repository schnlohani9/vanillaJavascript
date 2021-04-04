class Wizard {
    constructor(power_level) {
      // TODO replace this line.
      power_level = this.power_level;
    }
    
    power(power_level){
        return power_level;
    }

  }
  
let Gandalf = new Wizard(100);
console.log(Gandalf.power(100));