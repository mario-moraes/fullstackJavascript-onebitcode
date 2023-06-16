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
    
    log.innerHTML = `<p>- Stats personagem 1<br>Nome: ${firstCharName}<br>Dano: ${firstCharDamage}</p><p>- Stats personagem 2<br>Nome: ${secondCharName}<br> Vida: ${secondCharHealth}<br> Defesa: ${secondCharDefense}<br> Escudo: ${secondCharShield}</p><p>Logo, ${firstCharName} não causou nenhum dano em ${secondCharName}, o deixando com seus ${secondCharHealth} pontos de vida iniciais.</p>`;
}

if (firstCharDamage > secondCharDefense && secondCharShield === "nao") {
    let damageCaused = firstCharDamage - secondCharDefense;
    let finalHealth = secondCharHealth - damageCaused;
    
    log.innerHTML = `<p>- Stats personagem 1<br>Nome: ${firstCharName}<br>Dano: ${firstCharDamage}</p><p>- Stats personagem 2<br>Nome: ${secondCharName}<br> Vida: ${secondCharHealth}<br> Defesa: ${secondCharDefense}<br> Escudo: ${secondCharShield}</p><p>Logo, ${firstCharName} causou um dano de ${damageCaused} em ${secondCharName}, o deixando com ${finalHealth} pontos de vida.</p>`;
}

if (firstCharDamage > secondCharDefense && secondCharShield === "sim") {
    let damageCaused = (firstCharDamage - secondCharDefense) / 2;
    let finalHealth = secondCharHealth - damageCaused;

    log.innerHTML = `<p>- Stats personagem 1<br>Nome: ${firstCharName}<br>Dano: ${firstCharDamage}</p><p>- Stats personagem 2<br>Nome: ${secondCharName}<br> Vida: ${secondCharHealth}<br> Defesa: ${secondCharDefense}<br> Escudo: ${secondCharShield}</p><p>Logo, ${firstCharName} causou um dano de ${damageCaused} em ${secondCharName}, o deixando com ${finalHealth} pontos de vida.</p>`
}
