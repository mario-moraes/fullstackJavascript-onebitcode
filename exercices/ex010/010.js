// job offer register program

let programRunning = true; 

const jobOfferList = [];

while (programRunning) {
    const menuOptions = parseInt(prompt(`Selecione uma das opçöes a seguir:
    1. Listar vagas disponíveis
    2. Criar um nova vaga
    3. Visualizar uma vaga
    4. Inscrever um candidato em uma vaga
    5. Excluir uma vaga
    6. Sair`));

    switch(menuOptions) {
        case 1: showJobOfferList();
            break;
        
        case 2: createJobOffer();
            break;
        
        case 3: visualizeJobOffer();
            break;
        
        case 4: registerCandidate();
            break;
        
        case 5: deleteJobOffer();
            break;
        
        case 6:
            programRunning = false;
            alert(`Programa encerrado.`);
            break;
        
        default:
            alert(`[ERRO] Opção inválida, escolha entre as opções 1 a 6.`);
    }
    
    function showJobOfferList() {
        const textOfferList = jobOfferList.reduce((text, job, index) => {
            text += `${index}. ` 
            text += `${job.offerName} ` 
            text += `(${job.candidates.length} candidatos)\n`;
            return text;
            }, ``);
            
        alert(`Índice / Cargo / Concorrentes: 
        ${textOfferList}`);
    };
    
    function createJobOffer() {
        const offerName = prompt(`Insira o nome da vaga (cargo):`);
        const description = prompt(`Insira a descrição da vaga:`);
        const limitDate = prompt(`Insira a data limite (dd/mm/aaaa) para aplicação da vaga:`);
        
        const confirmation = confirm(`Deseja criar a vaga com os seguintes dados?
        - Cargo: ${offerName}.
        - Descrição: ${description}.
        - Data limite: ${limitDate}.`);
        
        if (confirmation) {
            const jobInfo = { 
                offerName,
                description,
                limitDate, 
                candidates: []
                };
                
            jobOfferList.push(jobInfo);
            alert(`Vaga de ${jobInfo.offerName} cadastrada com sucesso!`);
        }
    };
    
    function visualizeJobOffer() {
        const index = parseInt(prompt(`Insira o índice da vaga para visualizar seus detalhes:`));
        
        alert(`A vaga ${index} selecionada é:
            - Cargo: ${jobOfferList[index].offerName}.
            - Descrição: ${jobOfferList[index].description}.
            - Data limite: ${jobOfferList[index].limitDate}.
            - Candidatos: ${jobOfferList[index].candidates}`);
    };

    function registerCandidate() {
        const index = prompt(`Qual o índice da vaga?`);
        const candidateName = prompt(`Qual o nome do canditado(a) a vaga?`);
        const confirmation = confirm(`Aplicar o candidato ${candidateName} na vaga de ${jobOfferList[index].offerName}?`);
        
        if (confirmation) {
            jobOfferList[index].candidates.push(candidateName);
            alert(`Candidato(a) ${candidateName} inscrito com sucesso.`);
        };
    };

    function deleteJobOffer() {;
        const index = parseInt(prompt(`Qual o índice da vaga que você gostaria de deletar?`));
        
        const confirmation = confirm(`o índice ${index} escolhido se refere a vaga com seguintes dados:
            - Cargo: ${jobOfferList[index].offerName}.
            - Descrição: ${jobOfferList[index].description}.
            - Data limite: ${jobOfferList[index].limitDate}.
        Gostaria realmente de deletar esta vaga e seus dados associados?`);
        
        if (confirmation) {
            alert(`Vaga ${jobOfferList[index].offerName} deletada com sucesso.`);
            jobOfferList.splice(index, 1);
        } 
    }
}