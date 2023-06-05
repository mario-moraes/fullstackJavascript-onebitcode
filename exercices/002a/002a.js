let firstCarName = prompt("Qual o nome do primeiro veículo?");
let firstCarVel = Number(prompt("Qual a velocidade dele?"));

let secondCarName = prompt("Qual o nome do segundo veículo?");
let secondCarVel = Number(prompt("Qual a velocidade dele?"));

if (firstCarVel === secondCarVel) {
    alert(`A análise indica que ${firstCarName} e ${secondCarName} possuem velocidades iguais de ${firstCarVel} km/h!`);
} else if(firstCarVel > secondCarVel) {
    alert(`O veículo ${firstCarName}, com ${firstCarVel}km/h, está mais rápido que o veículo ${secondCarName}, que está a ${secondCarVel} km/h.`);
}  else if(firstCarVel < secondCarVel) {
    alert(`O veículo ${secondCarName}, com ${secondCarVel}km/h, está mais rápido que o veículo ${firstCarName}, que está a ${firstCarVel} km/h.`);
}