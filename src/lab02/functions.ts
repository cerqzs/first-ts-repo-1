export function calcularMediaPesada (nota1:number , nota2:number, nota3:number, peso1:number, peso2:number, peso3:number): number {
    let mediaPesada:number;
    mediaPesada = (nota1 * peso1 + nota2 * peso2 + nota3* peso3 ) / (peso1+peso2+peso3);
    return mediaPesada
}

export function calcularPesoTotal (peso1:number , peso2:number, peso3:number) :number {
    let total: number;
    total = peso1 + peso2 +peso3;
    return total
}

export function calcularNotasPesos (nota1:number , nota2:number, nota3:number, peso1:number, peso2:number, peso3:number): number {
    let notasPesos: number;
    notasPesos = (nota1 * peso1 + nota2 * peso2 + nota3* peso3 );
    return notasPesos
}

export function analisarValor (nota1:number): boolean {
    return nota1 >= 8;
     
}

export function distanciaEntrePontos (x1:number, x2: number, y1:number, y2: number ): number {
    let distancia: number;
    distancia = Math.sqrt ((x2-x1)**2 +(y2-y1)**2);
    return distancia;
}

export function operadoresDivisao(numero: number): number {
    let digito1: number, digito2: number, digito3: number;
  
    if (numero < 100 || numero > 999) {
      console.log("Número não tem 3 dígitos");
      digito1 = -1;
    } else {
      digito3 = numero % 10;
      digito2 = Math.floor(numero / 10) % 10;
      digito1 = Math.floor(numero / 100) % 10;
    }
  
    return digito1;
  }
  
export function numeroPar (num:number): boolean {
    return num %2 ===0; 
}

export function calculoFuncaoMat (x: number) : number {
    if ( x<0) {
        return x;
} else if ( x = 0) {
    return 0;
} else {
    return x*2- 2* x ;
}
}

export function volumeCubo (area:number, aresta:number): number {
let volume: number; 
if (area >0 ) {
    aresta= Math.sqrt (area/6);
    volume = aresta **3;
} else {
    volume = -1;
}
volume = volume /1000; 
if(volume <=1) {
    console.log("Pequeno");
}  else if (1 < volume || volume <=2) {
    console.log("médio");
} else {
    console.log("Grande");
}
 return volume;
}

export function saudacaoHoraDia (num:number):number {
    if (num >= 21601 && num <= 43200 ) {
        console.log ("Bom dia");
    } else if(num >= 43201 && num <= 72000) {
        console.log ("Boa Tarde");
    } else {
        console.log("Boa noite");
    }
    return num;
} 

export function saudacaoDoDia (segundos: number): string {
    const hora = new Date(segundos * 1000).getHours(); // converter segundos em objeto Date e obter hora
    if (hora >= 6 && hora < 12) {
      return "Bom dia";
    } else if (hora >= 12 && hora < 20) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  }
  