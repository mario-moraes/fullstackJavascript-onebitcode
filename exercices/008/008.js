// real estate register

const programaRunning = true;
const propertyLog = [];

while (programaRunning) {
    let menuOptions = parseInt(prompt(`
    Quantidade de imóveis cadastrados: ${propertyLog.length}.

    O que você gostaria de fazer?
    1 - Cadastrar um novo imóvel
    2 - Mostrar imóveis salvos
    3 - Encerrar  programa`));
    
    switch(menuOptions) {
        case 1: 
            const propertyRegister = {};

            propertyRegister.ownerName = prompt(`Insira o nome do proprietário:`);
            propertyRegister.bedroomNumber = parseInt(prompt(`Insira a quantidade de quartos`));
            propertyRegister.bathroomNumber = parseInt(prompt(`Insira a quantidade de banheiros:`));
            propertyRegister.garage = prompt(`O imóvel possui garagem? Sim ou Não.`);
            propertyLog.push(propertyRegister);
            break
        
            case 2:
            for (i = 0; i < propertyLog.length; i++) {
                alert(`Imóvel ${i+1}:
                Dono: ${propertyLog[i].ownerName}.
                Quartos: ${propertyLog[i].bedroomNumber}.
                Banheiros: ${propertyLog[i].bathroomNumber}.
                Possui garagem: ${propertyLog[i].garage}.`);
            }
            break
        
        case 3: 
            programaRunning = false;
            alert("Programa encerrado.");
            break
        
        default:
            alert(`[ERRO] Por favor selecione uma opção entre 1 e 3`);
    }
}