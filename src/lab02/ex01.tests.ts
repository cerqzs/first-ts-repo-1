import { calcularMediaPesada, calcularPesoTotal, calcularNotasPesos } from "./functions";

    test ('As notas 13, 14, 13 com o peso 30, 30, 40 deve resultar numa média de 13.3', () => { 
        let nota1: number = 13;
        let nota2: number = 14;
        let nota3: number= 13;
        let peso1: number =30;
        let peso2: number = 30;
        let peso3:number =40;
        let pesoTotalesperado:number = 100;
        let mediaEsperada:number= 13.3;
        let notasPesosEsperado:number = 1330;
        
        mediaEsperada = calcularMediaPesada (nota1, nota2, nota3, peso1, peso2, peso3);
        pesoTotalesperado = calcularPesoTotal (peso1, peso2, peso3);
        notasPesosEsperado = calcularNotasPesos (nota1, nota2, nota3, peso1, peso2, peso3);

        expect(calcularMediaPesada).toBe(mediaEsperada);
        expect(calcularPesoTotal).toBe(pesoTotalesperado);
        expect(calcularNotasPesos).toBe(notasPesosEsperado);
    });