// rpg damage calculator

// first character stats:
let firstCharName = prompt("Insira o nome do primeiro personagem");
let firstCharDamage = Number(prompt("Insira o valor do dano do primeiro personagem"));

// second character stats:
let secondCharName = prompt("Insira o nome do segundo personagem");
let secondCharHealth = Number(prompt("Insira os pontos de vida do segundo personagem")); 
let secondCharDefense = Number(prompt("Insira o valor de defesa do segundo personagem"));
let secondCharShield = prompt("O segundo personagem possui um escudo? Digite sim ou nao");

let log = document.querySelector("div#log");

// damage calc:
if (firstCharDamage <= secondCharDefense) {
    
    alert(`- Stats personagem 1
    Nome: ${firstCharName}.
    Dano: ${firstCharDamage}.
    - Stats personagem 2
    Nome: ${secondCharName}.
    Vida: ${secondCharHealth}.
    Defesa: ${secondCharDefense}.
    Escudo: ${secondCharShield}.
    Logo, ${firstCharName} não causou nenhum dano em ${secondCharName}, o deixando com seus ${secondCharHealth} pontos de vida iniciais.`);
}

if (firstCharDamage > secondCharDefense && secondCharShield === "nao") {
    let damageCaused = firstCharDamage - secondCharDefense;
    let finalHealth = secondCharHealth - damageCaused;
    
    alert(`- Stats personagem 1
    Nome: ${firstCharName}.
    Dano: ${firstCharDamage}.
    - Stats personagem 2
    Nome: ${secondCharName}.
    Vida: ${secondCharHealth}.
    Defesa: ${secondCharDefense}.
    Escudo: ${secondCharShield}.
    Logo, ${firstCharName} causou um dano de ${damageCaused} em ${secondCharName}, o deixando com ${finalHealth} pontos de vida.`);
}

if (firstCharDamage > secondCharDefense && secondCharShield === "sim") {
    let damageCaused = (firstCharDamage - secondCharDefense) / 2;
    let finalHealth = secondCharHealth - damageCaused;

    alert(`- Stats personagem 1
    Nome: ${firstCharName}.
    Dano: ${firstCharDamage}
    - Stats personagem 2
    Nome: ${secondCharName}.
    Vida: ${secondCharHealth}.
    Defesa: ${secondCharDefense}.
    Escudo: ${secondCharShield}.
    Logo, ${firstCharName} causou um dano de ${damageCaused} em ${secondCharName}, o deixando com ${finalHealth} pontos de vida.`);
}
