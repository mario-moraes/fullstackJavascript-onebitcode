export class Character {
  constructor(name, hp, att, def) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this. def = def;
  }
  attack(character){
    const damage = (this.att - character.def);
    return (damage - character.hp)
  }
}