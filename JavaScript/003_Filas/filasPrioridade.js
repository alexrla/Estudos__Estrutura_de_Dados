/* 
    Fila prioritária
        - Cada elemento está associado a um valor de prioridade;

        - Os elementos de prioridade mais alta, são antendidos primeiro;

        - Se tivermos elementos de mesma prioridade, els serão atendidos de acordo com a sua ordem na fila;

        - Os elementos de valor mais alto, associado a prioridade, são os elementos de maior prioridade;

        - Podemos assumir outros casos, onde o elemento de menor valor, associado a prioridade, são os elementos de maior prioridade;
*/

function PriorityQueue()    {
    let items = [];

    function QueueElement(element, priority)    {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function(element, priority)  {
        let myQueueElement = new QueueElement(element, priority);
        let added = false;

        for(let i = 0; i < items.length; i++)   {
            if(myQueueElement.priority < items[i].priority) {
                items.splice(i, 0, myQueueElement);

                added = true;

                break;
            }
        }

        if(!added)  {
            items.push(myQueueElement);
        }
    }

    this.dequeue = function()   {
        return items.shift();
    }

    this.peek = function() {
        return `${items[0].element} [Prioridade: ${items[0].priority}]`;
    }

    this.isEmpty = function() {
        return items.length === 0 ? "A Fila está vazia!" : "A Fila não está vazia!";
    }

    this.size = function() {
        return items.length;
    }

    this.print = function() {
        for(let i = 0; i < items.length; i++)   {
            console.log(`${items[i].element} [Prioridade: ${items[i].priority}]`);
        }
    }
}

let myPriorityQueue = new PriorityQueue();

myPriorityQueue.enqueue("Alex", 1);
myPriorityQueue.enqueue("Leandro", 2);
myPriorityQueue.enqueue("Vandete", 2);

myPriorityQueue.print(); // Alex [Prioridade: 1] -> Leandro [Prioridade: 2] -> Vandete [Prioridade: 2]

myPriorityQueue.dequeue();

myPriorityQueue.print(); // Leandro [Prioridade: 2] -> Vandete [Prioridade: 2]

console.log(myPriorityQueue.peek()); // Leandro [Prioridade: 2]

console.log(myPriorityQueue.isEmpty()); // A Fila não está vazia!

console.log(myPriorityQueue.size()); // 2