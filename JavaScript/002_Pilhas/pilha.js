function Stack()    {
    let items = [];

    this.push = function(...element)   {
        // Adiciona um novo elemento a Pilha
        items.push(...element);
    }

    this.pop = function()   {
        // Remove o elemento do topo da Pilha
        return items.pop();
    }

    this.isEmpty = function() {
        // Verifica se a Pilha está vazia ou não
        return items.length === 0 ? "A Pilha está vazia!" : "A Pilha não está vazia!";
    }

    this.peek = function() {
        // Retorna o elemento que está no topo da Pilha
        return items[items.length - 1];
    }

    this.size = function()  {
        // Informa o tamanho da Pilha
        return items.length;
    }

    this.clear = function() {
        // Limpa a Pilha
        items = [];
    }

    this.print = function() {
        // Exibe os elementos da Pilha
        console.log(items.toString());
    }
}

const myStack = new Stack();

// Adicionando elementos a Pilha
myStack.push(1, 2, 3, 4, 5, 6, 7, 8, 9); 

// Visualizando os elementos da Pilha
myStack.print(); // 1,2,3,4,5,6,7,8,9

// Retornando elemento do topo da Pilha (o último elemento)
console.log(myStack.peek()); // 9

// Removendo elemento da Pilha
myStack.pop();
myStack.print(); // 1,2,3,4,5,6,7,8

// Limpando a Pilha
myStack.clear();
myStack.print(); // Vazio

// Verificando se a Pilha está vazia e retornando o tamanho da Pilha
console.log(myStack.isEmpty()); // A Pilha está vazia!
console.log(myStack.size()); // 0