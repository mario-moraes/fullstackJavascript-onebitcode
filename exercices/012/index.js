// developers register program (DOM exercice)

const addTech = document.querySelector(`#addtech`);
const formDev = document.querySelector(`#formdev`);
const developers = [];
let inputRows = 0;

function createLabel(text, htmlFor) {
    const label = document.createElement(`label`);
    label.innerText = text;
    label.htmlFor = htmlFor;
    return label
}

function createInput(name, id, value, type = `text`, placeholder = ``) {
    const input = document.createElement(`input`);
    input.name = name;
    input.id = id;
    input.value = value;
    input.type = type;
    input.placeholder = placeholder;
    return input
}

function createTech(ev) {
    const techList = document.querySelector(`#techlist`);
    const newRow = document.createElement(`li`);
    const rowIndex = inputRows;
    inputRows++;
    newRow.id = `inputRow-${rowIndex}`;
    newRow.className = `inputRow`;

    const techNameLabel = createLabel(`Nome: `, `techName-${rowIndex}`);
    const techNameInput = createInput(`techName-${rowIndex}`,`techName-${rowIndex}`, null);

    const expLabel = createLabel(`Experiência:`);
    
    const id1 = `expRadio-${rowIndex}.1`;
    const expRadio1 = createInput(`techExp-${rowIndex}`, id1,`0-2 anos`, `radio`);

    const expLabel1 = createLabel(`0-2 anos`, id1);
    const id2 = `expRadio-${rowIndex}.2`;
    const expRadio2 = createInput(`techExp-${rowIndex}`, id2, `3-4 anos`, `radio`);

    const expLabel2 = createLabel(`3-4 anos`, id2);
    const id3 = `expRadio-${rowIndex}.3`;
    const expRadio3 = createInput(`techExp-${rowIndex}`, id3,`5+ anos`, `radio`);

    const expLabel3 = createLabel(`5+ anos`, id3);

    const removeRowBtn = document.createElement(`button`);
    removeRowBtn.type = `button`;
    removeRowBtn.innerText = `Remover`;
    removeRowBtn.addEventListener(`click`, function() {
        techList.removeChild(newRow);
    });

    newRow.append(
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
        );
    techList.appendChild(newRow);
};
addTech.addEventListener(`click`, createTech);




function submitForm(ev) {
    ev.preventDefault();

    const fullnameInput = document.getElementById(`fullname`);
    const inputRows = document.querySelectorAll(`.inputRow`);
    let technologies = [];
    inputRows.forEach(function (row) {
        const techName = document.querySelector(`#${row.idinput}[name="techName"]`).value;
        const techExp = document.querySelector(`#${row.idinput}[type="radio"]:checked`).value;
        technologies.push({ 
            name: techName, 
            exp: techExp 
        });
    });

    const newDev = { 
        fullname: fullnameInput.value, 
        technologies: technologies 
    }
    
    developers.push(newDev);
    alert(`Desenvolvedor cadastrado com sucesso!`);
    fullnameInput.value = ``;
    
    inputRows.forEach(function (row) {
        row.remove();
    })
    console.log(developers);
}

addTech.addEventListener(`click`, createTech);
formDev.addEventListener(`submit`, submitForm);