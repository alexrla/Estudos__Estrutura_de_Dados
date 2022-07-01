class Stack    {
    constructor()  {
        this.items = [];
    }

    push(...element)   {
        // Adiciona um novo item a Pilha
        this.items.push(...element);
    }

    pop()   {
        // Remove o item do topo da Pilha
        return this.items.pop();
    }

    isEmpty() {
        // Verifica se a Pilha está vazia ou não
        return this.items.length === 0 ? "A Pilha está vazia!" : "A Pilha não está vazia!";
    }

    peek() {
        // Retorna o elemento que está no topo da Pilha
        return this.items[this.items.length - 1];
    }

    size()  {
        // Informa o tamanho da Pilha
        return this.items.length;
    }

    clear() {
        // Limpa a Pilha
        this.items.splice(0, this.items.length);
        
    }

    print() {
        // Exibe os elementos da Pilha
        console.log(this.items.toString());
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