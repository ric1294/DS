var newNode = require('../LinkedList/create.js');

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(element){
        let newNode = new newNode();
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode
        }

        this.size++;
    }

    dequeue(){
        let current = this.first;
        if(this.first == this.last){
            this.last = null;
        }
        if(current){
            let element = current.element;
            current = current.next;
            this.first = current;
            this.size--;
            return element
        }
        return null;
    }

    
}