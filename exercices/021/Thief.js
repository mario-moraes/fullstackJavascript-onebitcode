const Character = require("./Character.js");

class Thief extends Character {
  attack(targetCharacter){
    targetCharacter.hp -= 2*(this.att - targetCharacter.def); 
  }
}

module.exports = Thief;
