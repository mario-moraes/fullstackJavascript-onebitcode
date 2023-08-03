class Character {
  constructor(name, hp, att, def) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this. def = def;
  }
  attack(targetCharacter){
    const damage = (this.att - targetCharacter.def);
    return (targetCharacter.hp - damage)
  }
}

module.exports = Character;
