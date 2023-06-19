// vacancy jobs program

let programRunning = true; 

let jobInfoList = [];
let jobList = [];  

while (programRunning) {
    let menuOptions = Number(prompt(`Selecione uma das opçöes a seguir:
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
    
    function showJobOfferList() {};
    
    function createJobOffer(){
        let jobName = prompt(`Insira o nome da vaga:`);
        let jobDescription = prompt(`Insira a descrição da vaga:`);
        let jobLimitDate = prompt(`Insira a data limite para aplicação da vaga:`);
        
        let jobInfo = { 
            name: jobName,
            description: jobDescription,
            limit: jobLimitDate 
        }
        jobInfoList.push(jobInfo);
        alert(`Dados inseridos com sucesso!
        - Nome da vaga:${jobInfo.name}
        - Descrição: ${jobInfo.description}
        - Data limite: ${jobInfo.limit}`);
    };
    
    function visualizeJobOffer(){};
    function applyJobOffer(){};
    function deleteJobOffer(){};

}