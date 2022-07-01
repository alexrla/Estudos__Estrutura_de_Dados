// Arrays [Listas]

/*
    - Utilizados para armazenar coleções de dados, em uma única variável;

    - Esses dados são acessados através de índices numéricos;

    - Os índices começam em 0;

    - Podem armazenar qualquer tipo primitivo de dados;
*/

let averageTemperatureJanuary = 31.9;
let averageTemperatureFebruary = 35.3;
let averageTemperatureMarch = 42;
let averageTemperatureApril = 38;
let averageTemperatureMay = 25.5;

console.log(`Temperatura média (mês de Janeiro): ${averageTemperatureJanuary} °C`);

// Declarando um array vazio
let averageTemperatures = [];

averageTemperatures[0] = 31.9;
averageTemperatures[1] = 35.3;
averageTemperatures[2] = 42;
averageTemperatures[3] = 38;
averageTemperatures[4] = 25.5;

console.log(`Temperatura média (mês de Janeiro): ${averageTemperatures[0]} °C`);

// Outra forma de declarar um array
let daysWeek = new Array();

daysWeek[0] = "Domingo";

console.log(`Que dia é hoje? (Resposta: ${daysWeek[0]})`);

// Verificando o tamanho do array
console.log(`O tamanho do array é: ${daysWeek.length} (o array possui ${daysWeek.length} elemento(s))`);

// Definindo o tamanho do array, ao declará-lo
let monthsYear = new Array(12);
console.log(`O tamanho do array é: ${monthsYear.length} (o array possui ${monthsYear.length} elemento(s))`);


// Criando e inicializando um array
let vowelLetters = new Array("a", "e", "i", "o", "u");

// Acessando um elemento do array
console.log(`Letra: ${vowelLetters[3]}`);

// Acessando elementos de um array, através da iteração
let planets = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"];
console.log("Planetas do sistema solar:")
for(let i = 0; i < planets.length; i++) {
    console.log(`${i + 1}: ${planets[i]}`);
}

/*
    Quando tentamos acessar um elemento de um array, que não existe,
    por exemplo, temos um array de 5 elementos e tentamos acessar um 
    sexto elemento, será retornado undefined;
*/

// Sequência de Fibonacci
let fibonacci = [1, 1];

for(let i = 2; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Sequência de Fibonacci: ${fibonacci}...`);

// Inserindo elementos em um array
let numbers = [1, 2, 3, 4, 5];
console.log(`Números: ${numbers}`);

// #1
numbers[5] = 6;
console.log(`Números: ${numbers}`);

// #2
numbers[numbers.length] = 7;
console.log(`Números: ${numbers}`);

// #3 - Usando o método .push()
numbers.push(8);
console.log(`Números: ${numbers}`);

// #4 - Usando o método .unshift()
numbers.unshift(0);
console.log(`Números: ${numbers}`);

// Se adicionarmos um elemento, em uma posição que já existe,
// o elemento que ocupa aquele posição será substituído pelo novo 
// elemento;

/*
    - .push() - Insere um, ou mais elementos, no final do array;

    - .unshift() - Insere um, ou mais elementos, no início do array;
*/

// Removendo elementos de um array
let oddNumbers = [1, 3, 5, 7, 9];
console.log(`Números ímpares: ${oddNumbers}`);

// #1 - Usando o método .pop()
oddNumbers.pop();
console.log(`Números ímpares: ${oddNumbers}`);

// #2 - Usando o método .shift()
oddNumbers.shift();
console.log(`Números ímpares: ${oddNumbers}`);

/*
    - .pop() - Remove o último elemento do array;

    - .shift() - remove o primeiro elemento do array;
*/

// Inserindo e removendo elementos de uma posição específica
let evenNumbers = [2, 4, 6, 8, 10];
console.log(evenNumbers);

// # Usando o método .splice()
// Removendo
evenNumbers.splice(1, 3);
console.log(evenNumbers);

// Inserindo
evenNumbers.splice(1, 0, 4, 6, 8);
console.log(evenNumbers);

/*
    - O método splice altera o conteúdo de um array, adicionando ou removendo elementos;

    - Sintaxe:
        array.splice(posição, quantidade de elementos a serem removidos, elementos a serem adicionados);

    - Se não informarmos a quantidade de elementos a serem removidos, todos serão removidos;

    - Se a quantidade de elementos a serem removidos for igual a 0, nenhum elemento será removido;

    - Ele ainda retornar os elementos removidos (se nenhum elemento for removido, será retornado um array
    vazio);
*/

const test = [];
console.log(test.splice());

// Arrays bidimensionais (Matrizes)
let averageTemperature = [
    ["Janeiro", 31.9], 
    ["Fevereiro", 35.3], 
    ["Março", 42], 
    ["Abril", 38], 
    ["Maio", 25.5]
];

console.log(averageTemperature);

// Acessando elementos de uma matriz
console.log(`Temperatura média (mês de ${averageTemperature[0][0]}): ${averageTemperature[0][1]} °C`);

for(let i = 0; i < averageTemperature.length; i++) {
    let j = 0;
    
    console.log(`Temperatura média (mês de ${averageTemperature[i][j]}): ${averageTemperature[i][j + 1]} °C`);
}

// Mais um exemplo
let newNumbers = [
    [1, 3, 5, 7, 9],
    [2, 4, 6, 8, 10]
];

for(let i = 0; i < newNumbers.length; i++) {
    for(let j = 0; j < newNumbers[i].length; j++) {
        console.log(`${newNumbers[i][j]}`);
    }
}


// Arrays multidimensionais (tridimensionais)
let averageTemperatureWeekOne = [33, 25.2, 19, 27, 23.4, 41.6, 25];
let averageTemperatureWeekTwo = [41, 29, 33, 21.2, 19.5, 17, 33.8];
let averageTemperatureWeekThree = [13, 45.7, 18, 7, 13.4, 21.5, 15];
let averageTemperatureWeekFour = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

let firstHalfMonth = [averageTemperatureWeekOne, averageTemperatureWeekTwo];
let secondHalfMonth = [averageTemperatureWeekThree, averageTemperatureWeekFour];

let month = [firstHalfMonth, secondHalfMonth];

console.log(month);

// Exemplo
for(let i = 0; i < month.length; i++) {
    for(let j = 0; j < month[i].length; j++) {
        for(let k = 0; k < month[i][j].length; k++) {
            console.log(`${month[i][j][k]}`);
        }
    }
}