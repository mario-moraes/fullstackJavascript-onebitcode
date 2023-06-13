// common geometric forms area calculator

let programRunning = true;

while (programRunning) {
    let menuOptions = parseInt(prompt(`Qual área você gostaria de calcular?
    1 - Área do triângulo
    2 - Área do retângulo
    3 - Área do quadrado
    4 - Área do trapézio
    5 - Área do círculo
    6 - Encerrar programa.`));

    switch(menuOptions) {
        case 1:
            CalcTriangleArea();
            alert(`O triângulo de base ${base} e altura ${height} tem área igual a ${area}.`);
            break
        case 2: 
            CalcRetangleArea();
            alert(`O retângulo de base ${base} e altura ${height} tem área igual a ${area}.`);
            break
        case 3:
            CalcSquareArea(); 
            alert(`O quadrado de lado ${side} tem área igual a ${area}.`);
            break
        case 4:
            CalcTrapezoidArea();
            alert(`O trapézio de base maior ${majorbase}, base menor ${minorbase} e altura ${height} tem área igual a ${area}.`);
            break
        case 5:
            CalcCircleArea();
            alert(`O círculo de raio ${radius} tem área igual a ${area}.`);
            break
        case 6:
            programRunning = false;
            alert(`Programa encerrado.`);
            break
        default:
            alert(`[ERRO] Opção inválida. Escolha entre as opções 1 a 6.`);
    }
    
    function CalcTriangleArea() {
        base = Number(prompt(`Insira o valor da base do triângulo:`));
        height = Number(prompt(`Insira valor da altura do triângulo:`));
        area = (base*height)/2;
        return area;
    } 
    function CalcRetangleArea() {
        base = Number(prompt(`Insira o valor da base do retângulo:`));
        height = Number(prompt(`Insira valor da altura do retângulo:`));
        area = base*height;
        return area;
    }
    function CalcSquareArea() {
        side = Number(prompt(`Insira o valor do lado do quadrado:`));
        area = side*side;
        return area;
    }
    function CalcTrapezoidArea() {
        majorbase = Number(prompt(`Insira o valor da base maior do trapézio:`));
        minorbase = Number(prompt(`Insira valor da base menor do trapézio:`));
        height = Number(prompt(`Insira valor da altura do trapézio:`));
        area = ((majorbase+minorbase)*height)/2;
        return area;
    }
    function CalcCircleArea() {
        radius = Number(prompt(`Insira o valor do raio do círculo:`));
        area = (3.14)*(radius**2);
        return area;
    }
}