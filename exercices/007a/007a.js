// pacient waiting list

const programRunning = true;
const waitingList = [];
let menuOptions = "";

while (programRunning) {
    
    let pacientsNames = "";
    for (let i = 0; i < waitingList.length; i++) {
        pacientsNames += `\n${(i+1)}º - ${waitingList[i]}`;
    }

    menuOptions = parseInt(prompt(`Lista de espera: ${pacientsNames}
    
    Escolha uma das opções a seguir:
    1. Adicionar Paciente
    2. Consultar Próximo Paciente
    3. Encerrar programa
    `));

    switch (menuOptions) {
        case 1:
            let addPacient = prompt("Insira o nome do paciente:");
            if (addPacient.length === 0 || addPacient.trim().length === 0) {
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
                alert(`Paciente ${consultedPacient} foi consultado e removido da lista de espera.`);
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




