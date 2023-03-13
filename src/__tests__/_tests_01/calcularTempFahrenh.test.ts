import { calcularTemperaturaFahrenheit } from "../../lab01/ex06";

describe ('Testar função calcular temperatura Fahre...', () => {
    test (' 42º celsius deve resultar em 107.6', () => {
    
//Arrange

    const celsius:number = 42;
    const fabreEsperado:number = 107.6;

//Act
let fabre:number = calcularTemperaturaFahrenheit(celsius);

//ASSERT

expect(fabre).toBe(fabreEsperado);

    })
})