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
  
  export function tempoDoDia (segundos:number): string {
    const horas:number = Math.floor(segundos / 3600);
    const minutos:number = Math.floor(( segundos %3600) /60);
    const sec:number = segundos % 60;

    return `${horas.toString().padStart(2,'0')}:${minutos.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  }

  export function multiplosCheck (x:number , y:number) : boolean {
    return x % y === 0 || y % x ===0;
  }

  export function imprimeMensagemMultiplos (x:number, y:number ): string {
    if( x % y === 0) {
    return `${x} é multiplo de ${y}`;
    } else if (y % x ===0) {
    return `${y} é multiplo de ${x}`;
    } else {
        return `${x} não é multiplo nem divisor de ${y}`;
    } 
    }
    
export function numeroDeTresDigitos (numero:number): string {
    if (numero <100 || numero > 999) {
        throw new Error("O numero deve ter 3 digitos");     
    }
    const centenas:number = Math.floor(numero /100);
    const dezenas:number = Math.floor(numero/10) %10;
    const unidades:number = numero %10; 

        if(unidades > dezenas && dezenas > centenas) {
        return "A sequencia é crescente.";
    } else {
        return "A sequencia não é crescente.";
    }
}

export function artigoSaldo (preco:number) : number {
    if (preco > 200) {
    return preco= preco *0.6; 
} else if (100 <preco &&  preco<=200) {
    return preco = preco *0.4;
} else if (50 < preco && preco <=100) {
return preco=preco*0.3; 
}else { 
    return preco= preco*0.2;
}
}

export function notasTurma (aprovados:number, limiteMin:number, limiteMax:number): string {
    if( aprovados <limiteMin || aprovados >limiteMax ) {
        return "Valor invalido";
    } else if(aprovados < 0.2) {
        return "Turma má";
    } else if(aprovados <0.5) {
        return "Turma fraca";
    } else if(aprovados<0.7) {
        return "Turma razoavel";
    } else if(aprovados <0.9) {
        return "Turma Boa";
    } else {
        return "Turma Excelente";
    }
    }

    export function indicePoluicao (poluicao:number): string {
        if(poluicao > 0.3 && poluicao <=0.4) {
            return "As industrias do 1º grupo devem suspender as suas atividades"
        } else if(poluicao> 0.4 && poluicao <=0.5) {
            return "As industrias do 1º e 2º devem suspender as suas atividades"
        } else if(poluicao > 0.5) {
            return "As industrias dos 3 grupos devem suspender as suas atividades"
        } else {
            return "O indice de poluição é aceitavel"
        }
    }

    export function calculoGastos (grama:number, arvores:number, arbustos: number): number {
        grama= grama *10;
        arvores= arvores *20;
        arbustos= arbustos *15;

        let tempoGrama = grama*300;
        let tempoArvores= arvores *600;
        let tempoArbustos = arbustos*400;
        
        let tempoTotal = (tempoArbustos + tempoArvores +tempoArbustos) / 3600;
        let custoTotal = grama + arvores + arbustos;
        return tempoTotal;
        return custoTotal;
    }