// vacancy jobs program

let programRunning = true; 

const jobInfoList = [];

while (programRunning) {
    let menuOptions = parseInt(prompt(`Selecione uma das opçöes a seguir:
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
        
        case 4: applyJobOffer();
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
    
    function showJobOfferList(){
        alert(`Lista de vagas: ${jobInfoList.map(jobInfo => {jobInfo.name}).join(', ')}`);
    };
    
    function createJobOffer(){
        let jobName = prompt(`Insira o nome da vaga:`);
        let jobDescription = prompt(`Insira a descrição da vaga:`);
        let jobLimitDate = prompt(`Insira a data limite para aplicação da vaga:`);
        
        const jobInfo = { 
            name: jobName,
            description: jobDescription,
            limit: jobLimitDate, 
            candidates: []
        };
        jobInfoList.push(jobInfo);
        alert(`Dados inseridos com sucesso!
        - Nome da vaga:${jobInfo.name}
        - Descrição: ${jobInfo.description}
        - Data limite: ${jobInfo.limit}`);
    };
    
    function visualizeJobOffer(){
        let index = parseInt(prompt(`Insira o índice da vaga para visualizar seus detalhes:`));
        alert(`A vaga ${index} selecionada é:
            Cargo: ${jobInfoList[index].name}.
            Descrição: ${jobInfoList[index].description}.
            Data limite: ${jobInfoList[index].limit}.
            Candidatos: ${jobInfoList[index].candidates.map(candidate => candidate.candidateName).join(', ')}.`);
    };

    function applyJobOffer(){
        let index = prompt(`Qual o índice da vaga?`);
        let candidateName = prompt(`Qual o nome do canditado a vaga?`);
        let confirmation = alert(`Aplicar o candidato ${candidateName} na vaga de ${jobInfoList[index]} `)
        
        if (confirmation == "sim") {
            const candidate = {
                candidateName
            };
            jobInfoList[index].candidates.push(candidate);
        } else {
            return programRunning = true
        }
    };

    function deleteJobOffer(){;
        let index = parseInt(prompt(`Qual o índice da vaga que você gostaria de deletar?`));
        
        let confirmation = prompt(`o índice ${index} se refere a vaga:
            Cargo: ${jobInfoList[index].name}.
            Descrição: ${jobInfoList[index].description}.
            Data limite: ${jobInfoList[index].limit}.
            
            Gostaria realmente de deletar esta vaga e seus dados associados? Sim/Não`);
        
        if (confirmation == "sim") {
            jobInfoList.splice(index, 1);
        } else {
            return programRunning = true
        }
    }
}