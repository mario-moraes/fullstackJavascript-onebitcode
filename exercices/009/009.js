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
        // triangle
        case 1:
            function triangleArea(n1, n2) {
                let area = (n2*n1)/2;
                return area;
            } 
            n1 = Number(prompt(`Insira o valor da base do triângulo:`));
            n2 = Number(prompt(`Insira valor da altura do triângulo:`));
            result = triangleArea(n1, n2);
            alert(`O triângulo de base ${n1} e altura ${n2} tem área igual a ${result}`);
            break
        
        // rectangle
        case 2: 
            function retangleArea(n1, n2) {
                let area = n1*n2;
                return area;
            }
            n1 = Number(prompt(`Insira o valor da base do retângulo:`));
            n2 = Number(prompt(`Insira valor da altura do retângulo:`));
            result = retangleArea(n1, n2);
            alert(`O retângulo de base ${n1} e altura ${n2} tem área igual a ${result}`);
            break
        
        // square
        case 3: 
            function squareArea(n1, n2) {
                let area = n1**2;
                return area;
            }
            n1 = Number(prompt(`Insira o valor do lado do quadrado:`));
            result = squareArea(n1, n2);
            alert(`O quadrado de lado ${n1} tem área igual a ${result}`);
            break
        
        // trapezoid
        case 4:
            function trapezoidArea(n1, n2, n3) {
                let area = ((n1+n2)*n3)/2;
                return area;
            }
            n1 = Number(prompt(`Insira o valor da base maior do trapézio:`));
            n2 = Number(prompt(`Insira valor da base menor do trapézio:`));
            n3 = Number(prompt(`Insira valor da altura do trapézio:`));
            result = trapezoidArea(n1, n2, n3);
            alert(`O trapézio de base maior ${n1}, base menor ${n2} e altura ${n3} tem área igual a ${result}`);
            break
        
        case 5: // circle
            function circleArea(n1) {
                let area = (3.14)*(n1**2);
                return area;
            }
            n1 = Number(prompt(`Insira o valor do raio do círculo:`));
            result = circleArea(n1);
            alert(`O círculo de raio ${n1} tem área igual a ${result}`);
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