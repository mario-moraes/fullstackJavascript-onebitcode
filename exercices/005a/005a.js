//interactive bank menu

let userInput= "";
do {
    userInput = parseInt(prompt("Escolha uma das opções a seguir: \n1.Verificar saldo \n2.Verificar extrato \n3.Verificar pacote \n4.Falar com atendente \n5.Encerrar"));
    switch(userInput) {
        case 1: alert(`Opção 1 escolhida: verificar saldo em conta.`);
            break;
        case 2: alert(`Opção 2 escolhida: verificar extrato.`);
            break;
        case 3: alert(`Opção 3 escolhida: verificar pacote.`);
            break;
        case 4: alert(`Opção 4 escolhida: falar com atendente.`);
            break;
        case 5: alert("Operação encerrada.");
            break;
        default: alert("[ERRO] Opção inválida: apenas opções de 1 a 5 são permitidas. Programa encerrado.");
    }
} while (userInput < 5 && userInput > 0);