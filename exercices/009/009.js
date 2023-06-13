// common geometric forms area calculator

let programRunning = true;

function CalcTriangleArea(base, height) {
    let area = (base*height)/2;
    return area;
} 
function CalcRetangleArea(base, height) {
    let area = base*height;
    return area;
}
function CalcSquareArea(side) {
    let area = side**2;
    return area;
}
function CalcTrapezoidArea(majorbase, minorbase, height) {
    let area = ((majorbase+minorbase)*height)/2;
    return area;
}
function CalcCircleArea(radius) {
    let area = (3.14)*(radius**2);
    return area;
}

while (programRunning) {
    let menuOptions = parseInt(prompt(`Qual área você gostaria de calcular?
    1 - Área do triângulo
    2 - Área do retângulo
    3 - Área do quadrado
    4 - Área do trapézio
    5 - Área do círculo
    6 - Encerrar programa.`));

    switch(menuOptions) {
        // triangle
        case 1:
            base = Number(prompt(`Insira o valor da base do triângulo:`));
            height = Number(prompt(`Insira valor da altura do triângulo:`));
            alert(`O triângulo de base ${base} e altura ${height} tem área igual a ${CalcTriangleArea(base, height)}`);
            break
        
        // rectangle
        case 2: 
            base = Number(prompt(`Insira o valor da base do retângulo:`));
            height = Number(prompt(`Insira valor da altura do retângulo:`));
            alert(`O retângulo de base ${base} e altura ${height} tem área igual a ${CalcRetangleArea(base, height)}`);
            break
        
        // square
        case 3: 
            side = Number(prompt(`Insira o valor do lado do quadrado:`));
            alert(`O quadrado de lado ${side} tem área igual a ${CalcSquareArea(side)}`);
            break
        
        // trapezoid
        case 4:
            majorbase = Number(prompt(`Insira o valor da base maior do trapézio:`));
            minorbase = Number(prompt(`Insira valor da base menor do trapézio:`));
            height = Number(prompt(`Insira valor da altura do trapézio:`));
            alert(`O trapézio de base maior ${majorbase}, base menor ${minorbase} e altura ${height} tem área igual a ${CalcTrapezoidArea(majorbase, minorbase, height)}`);
            break
        
        // circle
        case 5:
            radius = Number(prompt(`Insira o valor do raio do círculo:`));
            alert(`O círculo de raio ${radius} tem área igual a ${CalcCircleArea(radius)}`);
            break
        
        // close program
        case 6:
            programRunning = false;
            alert(`Programa encerrado.`);
            break

        // validation
        default:
            alert(`[ERRO] Opção inválida. Escolha entre as opções 1 a 6.`);
    }
}