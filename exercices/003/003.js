// unit converter program

let userValue = Number(prompt("Qual o valor em metros da sua medida?"));
let conversionUnit = prompt("Digite a unidade de medida para qual você gostaria de converter o valor inserido: mm, cm, dm, dam, hm, km");

switch(conversionUnit) {
    case "mm": result = userValue / 0.001
    alert(`O valor ${userValue}m convertido para milímetros é igual a ${result}mm.`);
        break
    case "cm": result = userValue / 0.01
    alert(`O valor ${userValue}m convertido para centímetros é igual a ${result}cm.`);
        break
    case "dm": result = userValue / 0.1
    alert(`O valor ${userValue}m convertido para decímetros é igual a ${result}dm.`);
        break
    case "dam": result = userValue / 10
    alert(`O valor ${userValue}m convertido para decâmetros é igual a ${result}dam.`);
        break
    case "hm": result = userValue / 100
    alert(`O valor ${userValue}m convertido para hectômetros é igual a ${result}hm.`);
        break
    case "km": result = userValue / 1000
    alert(`O valor ${userValue}m convertido para quilômetros é igual a ${result}km.`);
        break
    default:
    alert("Desculpe, opção inválida.");
}