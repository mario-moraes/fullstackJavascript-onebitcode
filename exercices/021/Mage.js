const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, hp, att, def, mp) {
    super(name, hp, att, def);
    this.mp = mp;
  }
  attack(targetCharacter) {
    targetCharacter.hp -= ((this.att + this.mp) - targetCharacter.def);
  }
  heal(targetCharacter) {
    targetCharacter.hp += (this.mp * 2);
  }
}

module.exports = Mage;
