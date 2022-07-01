function Stack()    {
    let items = [];

    this.push = function(...element)   {
        // Adiciona um novo elemento a pilha
        items.push(...element);
    }

    this.pop = function()   {
        // Remove o elemento do topo da pilha
        return items.pop();
    }

    this.isEmpty = function() {
        // Informa se a pilha está vazia ou não
        return items.length === 0 ? "A Pilha está vazia!" : "A Pilha não está vazia!";
    }

    this.peek = function() {
        // Retorna o elemento que está no topo da pilha
        return items[items.length - 1];
    }

    this.size = function()  {
        // Informa o tamanho da pilha
        return items.length;
    }

    this.clear = function() {
        // Limpa a pilha
        items = [];
    }

    this.print = function() {
        // Exibe os elementos da pilha
        console.log(items.toString());
    }
}

const myStack = new Stack();

// Adicionando elementos a Pilha
myStack.push(1, 2, 3, 4, 5, 6, 7, 8, 9); // 1,2,3,4,5,6,7,8,9

// Visualizando os elementos da Pilhas
myStack.print();

// Retornando elemento do topo da pilha (o último elemento)
console.log(myStack.peek()); // 1,2,3,4,5,6,7,8,9

// Removendo elemento da pilha
myStack.pop();
myStack.print(); // 1,2,3,4,5,6,7,8

// Limpando a pilha
myStack.clear();
myStack.print(); // Vazio

// Verificando se a pilha está vazia e retornando o tamanho da pilha
console.log(myStack.isEmpty()); // A Pilha está vazia!
console.log(myStack.size()); // 0