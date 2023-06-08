// pacient waiting list

let waitingList = [];
let programRunning = true;
let menuOptions = "";

while (programRunning) {
    menuOptions = parseInt(prompt(`Escolha uma das opções a seguir:
    1. Adicionar Paciente
    2. Consultar Paciente
    3. Encerrar programa`));

    switch (menuOptions) {
        case 1:
            let addPacient = prompt("Insira o nome do paciente:");
            if (addPacient.length === 0 | addPacient.trim().length === 0) {
                alert(`[ERRO] Inserção inválida.`);
            } else {
                waitingList.push(addPacient);
                alert(`Paciente ${addPacient} adicionado à lista de espera.`);
            }
            break;
        case 2:
            if (waitingList.length === 0) {
                alert("Atenção: a lista de espera está vazia.");
            } else {
                let consultedPacient = waitingList.shift();
                alert(`${consultedPacient} pode entrar! O doutor te espera.`);
            }
            break;
        case 3:
            alert("Programa encerrado.");
            programRunning = false;
            break;
        default:
            alert("[ERRO] Opção inválida: escolha a opção 1, 2 ou 3.");
            break;
    }
}




