class Queue   {
    constructor()   {
        this.items = [];
    }

    enqueue(...element)   {
        // Adiciona um novo elemento da fila
        this.items.push(...element);
    }

    dequeue() {
        // Remove um elemento da fila
        return this.items.shift();
    }

    peek() {
        // Retorna o primeiro elemento da fila
        return this.items[0];
    }

    isEmpty() {
        // Verifica se a fila está vazia ou não
        return this.items.length === 0 ? "A Fila está vazia!" : "A Fila não está vazia!";
    }

    size() {
        // Informa o tamanho da fila 
        return this.items.length;
    }

    print() {
        // Exibe os elementos da fila
        console.log(this.items.toString());
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
console.log(myQueue.size()); // 8