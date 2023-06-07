// bank atm prompts

let currentMoney = Number(prompt("Qual sua quantida monetária inicial?"));
let deposit = 0;
let withdraw = 0;

if (isNaN(currentMoney)) {
    alert(`[ERRO] Operação inválida: escolha uma opção de 1 a 3.`);
} else {
    do {
        userInput = Number(prompt(`O seu saldo é de R$${currentMoney}. O que você gostaria de fazer? \n1. Depositar dinheiro \n2.Sacar dinheiro \n3.Encerrar operação.`));
        switch (userInput) {
            case 1: 
                deposit = Number(prompt("Qual quantia você quer depositar?"));
                currentMoney += deposit;
                alert(`Você fez um depósito de R$${deposit} e seu saldo atual é R$${currentMoney}.`);
            break
            case 2: 
                withdraw = Number(prompt("Qual quantia você quer sacar?"));
                currentMoney -= withdraw;
                alert(`Você fez um saque de R$${withdraw} e seu saldo atual é R$${currentMoney}.`); 
            break
            case 3:
                alert(`Operação encerrada. Seu saldo atual é de R$${currentMoney}.`);
            break
            default:
                alert(`[ERRO] Operação inválida: escolha uma opção de 1 a 3.`);
        }
    } while (userInput < 3);
}
