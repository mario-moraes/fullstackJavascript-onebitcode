import { Character } from "./Character.js";

export class Warrior extends Character {
  constructor(pos, shi) {
    this.pos = pos
    this.shield = shi
    super(pos, shi, name, hp, att, def)
  }
  attack(){
    if (this.pos === "attack") {
      
    }
  }
  position(change){
    this.pos = change;
  }
}