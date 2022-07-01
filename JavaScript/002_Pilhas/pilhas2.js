class Stack    {
    constructor()  {
        this.items = [];
    }

    push(...element)   {
        // Adiciona um novo item a pilha
        this.items.push(...element);
    }

    pop()   {
        // Remove o item do topo da pilha
        return this.items.pop();
    }

    isEmpty() {
        // Informa se a pilha está vazia ou não
        return this.items.length === 0 ? "A Pilha está vazia!" : "A Pilha não está vazia!";
    }

    peek() {
        // Retorna o elemento que está no topo da pilha
        return this.items[this.items.length - 1];
    }

    size()  {
        // Informa o tamanho da pilha
        return this.items.length;
    }

    clear() {
        // Limpa a pilha
        this.items.splice(0, this.items.length);
        
    }

    print() {
        // Exibe os elementos da pilha
        console.log(this.items.toString());
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