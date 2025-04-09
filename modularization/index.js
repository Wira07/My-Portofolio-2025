class Tiger {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  growl() {
    console.log('Grrrr!');
  }
}

class Wolf {
  constructor() {
    this.strength = Math.floor(Math.random() * 100);
  }

  howl() {
    console.log('Awooo!');
  }
}
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const tiger = new Tiger();
const wolf = new Wolf();
 
fighting(tiger, wolf);