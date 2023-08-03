import { Character } from "./Character.js";

export class Mage extends Character {
  constructor(mag, name, hp, att, def) {
    this.mag = mag;
    super("Mage", mag, name, hp, att, def)
  }
  attack(character){
    const damage = ((this.att + this.mag) - character.def);
    return (damage - character.hp)
  }
}