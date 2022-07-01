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

const myQueue= new Queue();

// Adicionando elementos a Fila
myQueue.enqueue(1, 2, 3, 4, 5, 6, 7, 8, 9); 

// Visualizando os elementos da Fila
myQueue.print(); // 1,2,3,4,5,6,7,8,9

// Retornando o primeiro elemento da Fila
console.log(myQueue.peek()); // 1

// Removendo elemento da Fila
myQueue.dequeue();
myQueue.print(); // 2,3,4,5,6,7,8,9

// Verificando se a Fila está vazia e retornando o tamanho da Fila
console.log(myQueue.isEmpty()); // A Fila não está vazia!
console.log(myQueue.size()); // 0