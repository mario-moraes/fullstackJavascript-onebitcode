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
            text += index;
            text += job.offerName;
            `${text += job.candidates.length} candidatos`;
            return text;
            });
        alert(textOfferList);
    };
    
    function createJobOffer() {
        const offerName = prompt(`Insira o nome da vaga:`);
        const description = prompt(`Insira a descrição da vaga:`);
        const limitDate = prompt(`Insira a data limite para aplicação da vaga:`);
        
        const confirmation = confirm(`Deseja criar a vaga com os seguintes dados?
        - Nome da vaga: ${offerName}.
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
    
    function visualizeJobOffer(){
        let index = parseInt(prompt(`Insira o índice da vaga para visualizar seus detalhes:`));
        
        alert(`A vaga ${index} selecionada é:
            Cargo: ${jobOfferList[index].offerName}.
            Descrição: ${jobOfferList[index].description}.
            Data limite: ${jobOfferList[index].limitDate}.
            Candidatos: ${jobOfferList[index].candidates.map(candidate => candidate.candidateName).join(', ')}.`);
    };

    function registerCandidate() {
        const index = prompt(`Qual o índice da vaga?`);
        const candidateName = prompt(`Qual o nome do canditado a vaga?`);
        const confirmation = alert(`Aplicar o candidato ${candidateName} na vaga de ${jobOfferList[index]} `)
        
        if (confirmation == "sim") {
            const candidate = {
                candidateName
            };
            jobOfferList[index].candidates.push(candidate);
        } else {
            return programRunning = true
        }
    };

    function deleteJobOffer() {;
        const index = parseInt(prompt(`Qual o índice da vaga que você gostaria de deletar?`));
        
        const confirmation = prompt(`o índice ${index} se refere a vaga:
            Cargo: ${jobOfferList[index].name}.
            Descrição: ${jobInfoList[index].description}.
            Data limite: ${jobInfoList[index].limit}.
            
            Gostaria realmente de deletar esta vaga e seus dados associados? Sim/Não`);
        
        if (confirmation == "sim") {
            jobOfferList.splice(index, 1);
        } else {
            return programRunning = true
        }
    }
}