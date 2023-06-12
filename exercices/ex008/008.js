// real estate register

let programaRunning = true;
let propertyLog = [];
while (programaRunning) {
    let menuOptions = parseInt(prompt(`
    Quantidade de imóveis cadastrados: ${propertyLog.length}.

    O que você gostaria de fazer?
    1 - Cadastrar um novo imóvel
    2 - Mostrar imóveis salvos
    3 - Encerrar  programa`));
    
    switch(menuOptions) {
        case 1: 
            let ownerName = prompt(`Insira o nome do proprietário:`);
            let bedroomNumber = parseInt(prompt(`Insira a quantidade de quartos`));
            let bathroomNumber = parseInt(prompt(`Insira a quantidade de banheiros:`));
            let garageNumber = prompt(`O imóvel possui garagem? Sim ou Não.`)
            
            let propertyRegister = {
                name: ownerName,
                bedrooms: bedroomNumber,
                bathrooms: bathroomNumber,
                garage: garageNumber
            }
            propertyLog.push(propertyRegister);
            break
        case 2:
            alert(`Os imóveis cadastrados até então:
            ${propertyLog}`);
            break
        case 3: 
            programaRunning = false;
            alert("Programa encerrado.");
            break
        default:
            alert(`[ERRO] Por favor selecione uma opção entre 1 e 3`);
    }
}