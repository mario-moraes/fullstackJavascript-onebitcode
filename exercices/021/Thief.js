import { Character } from "./Character.js";

export class Thief extends Character {
  constructor(name, hp, att, def) {
    super("Thief", name, hp, att, def)
  }
  attack(character){
    const damage = 2*(this.att - character.def);
    return (damage - character.hp)
  }
}