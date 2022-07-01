/*
    Fila Circular
        - Versão extendida da "fila normal";

        - O último elemento está conectado ao primeiro;
*/

function Queue()    {
    let items = [];

    this.enqueue = function(...element)   {
        // Adiciona um novo elemento da Fila
        items.push(...element);
    }

    this.dequeue = function() {
        // Remove um elemento da Fila
        return items.shift();
    }

    this.peek = function() {
        // Retorna o primeiro elemento da Fila
        return items[0];
    }

    this.isEmpty = function() {
        // Verifica se a Fila está vazia ou não
        return items.length === 0 ? "A Fila está vazia!" : "A Fila não está vazia!";
    }

    this.size = function() {
        // Informa o tamanho da Fila 
        return items.length;
    }

    this.print = function() {
        // Exibe os elementos da Fila
        console.log(items.toString());
    }
}

// Hot Potato Game (Jogo da batata quente)
function CircularQueue(nameList, number)    {
    let myQueue = new Queue();

    // Adicionando o array, a instãncia de Queue
    for(let i = 0; i < nameList.length; i++) {
        myQueue.enqueue(nameList[i]);
    }

    let eliminated = "";

    // O tamanho de myQueue é 5, tem 5 elementos
    while(myQueue.size() > 1)   {
        // Girando a fila, colocando no final, o elemento do começo (além de remover esse elemento do começo)
        for(let i = 0; i < number; i++) {
            myQueue.enqueue(myQueue.dequeue());
        }

        // Elemento eliminado - primeiro da fila
        eliminated = myQueue.dequeue();
        console.log(`${eliminated} was eliminated from the Hot Potato Game!`);
    }

    // Retornando o último elemento da fila
    return myQueue.dequeue();
}

let names = ["Betania", "Leandro", "Bianca", "Theo", "Vandete"];
let winner = CircularQueue(names, 7);

console.log(`The winner is: ${winner}`);