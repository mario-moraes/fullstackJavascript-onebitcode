const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, hp, att, def, shi) {
    super(name, hp, att, def);
    this.shi = shi;
    this.stance = "attacking";
  }
  attack(targetCharacter) {
    if (this.stance === "attacking") {
      super.attack(targetCharacter);
    }
  }
  switchStance() {
    if(this.stance === "attacking") {
      this.stance = "defending";
      this.def += this.shi;
    } else {
      this.stance = "attacking";
      this.def -= this.shi;
    }
  }
}

module.exports = Warrior;
