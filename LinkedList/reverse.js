var newNode = require('./create.js');

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    reverse(node){
        let prevNode = null;
        let currentNode = newNode;
        let nextNode = null;

       
        while(currentNode != null){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        newNode = prevNode;
        return newNode;
    }

    printList(node)
    {
        while (node != null) {
            console.log(node.value + " ");
            node = node.next;
        }
    }
}

var list = new LinkedList();
this.head = new newNode(20);
this.head.next = new newNode(56);
this.head.next.next = new newNode(70);
this.head.next.next.next = new newNode(12);

list.printList(this.head);
this.head = list.reverse(this.head);
list.printList(this.head);