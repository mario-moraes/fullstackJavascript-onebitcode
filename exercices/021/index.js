// this exercice covers polimorfism and method overwriting concepts in OOP
// basic stats such as name, hp, att and def are inherited from the Character.js class 

const Thief = require("./Thief.js");
const Mage = require("./Mage.js");
const Warrior = require("./Warrior.js");

const arthur = new Mage("Arthur", 90, 4, 2, 14);
const beatrice = new Thief("Beatrice", 140, 22, 8);
const cain = new Warrior("Cain", 200, 14, 12, 4);

console.table({arthur, beatrice, cain}); // log current stats

//testing instances
cain.switchStance();
arthur.attack(cain);
beatrice.attack(arthur);

console.table({ arthur, beatrice, cain })

cain.attack(arthur);
arthur.heal(arthur);
beatrice.attack(cain);

console.table({arthur, beatrice, cain});

