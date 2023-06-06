let userName = prompt("Qual o seu nome?");
let userTravelQuestion = prompt("Você já visitou alguma cidade diferente da sua? sim ou nao");

let visitedCities = "";
let cityCounter = 0;

while (userTravelQuestion === "sim") {
    let city = prompt("Qual o nome da cidade visitada?");
    visitedCities += `\n-${city}`;
    cityCounter++;
    
    userTravelQuestion = prompt(`Você visitou alguma outra cidade cidade além de ${city}? sim ou nao`);
}
alert(`Turista: ${userName}. \nQuantidade de cidades visitadas: ${cityCounter}. \nCidades visitadas: ${visitedCities}`);