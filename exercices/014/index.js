// basic statistics (js)

//media
media(2, 6, 3, 7, 4) === 4.4
    // porque
  2 + 6 + 3 + 7 + 4 === 22
    // e 
  22 / 5 === 4.4

// media aritmetica ponderada
    // n -> número, p -> peso
  mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
    // porque
  (7 * 2) + (9 * 5) + (3 * 1) === 62
    // e
  62 / (2 + 5 + 1) === 7.75

//mediana
  mediana(2, 4, 5, 7, 42, 99) === 6
    // porque 5 e 7 estão juntos no centro da sequência e
  media(5, 7) === 6

  mediana(15, 14, 8, 7, 3) === 8
    // porque 8 está no centro da sequência

//moda
  moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) === 4
    // porque:
    // 4 aparece 4 vezes
    // 5 e 1 aparecem 2 vezes
    // 9, 7, 3, 2 e 0 aparecem 1 vez