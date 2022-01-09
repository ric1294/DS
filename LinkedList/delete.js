//https://www.youtube.com/watch?v=ClvYytk5Rlg&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&index=12

var newNode = require('./create.js');

class Delete{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    deletefromBeg(element){
      //  var node =  new newNode(element);
        var temp; // taking temp variable to store head value
        //check weather linked list is empty or not
        if(this.head == null){
            console.log("Linked List is empty!!You can not delete any element")
        }else{
            temp = this.head;
            this.head = this.head.next;
            this.size--;
        }
    }

    deleteFromEnd(element){
        var node =  new newNode(element);
        var temp; // taking temp variable to traverse till end
        //check weather linked list is empty or not

        if(!this.head){
            return null;
        }

        //if only one node in the list
        if(!this.head.next){
            this.head - null
        }
        let previous = this.head;
        let tail = this.head.next; 

        while(tail.next != null){
            previous = tail;
            tail= tail.next;
        }

        previous.next = null;
        
    }


    deleteFromAnyPosition(element , pos){
        var node =  new newNode(element);
        var previous;
        if(pos > this.size){
            console.log("Incorrect Position");
            return;
        }else{

            previous = this.head;  
            var i = 1;
            while(i<pos){ //we have to traverse till we reach the position
                temp = temp.next;
                i++;
            }
            node = previous.next;
            previous.next = node.next
            this.size--;    
           
        }
    }

    printList()
    {
        var curr = this.head;
        var str = "";
       // console.log(curr);
        while (curr) {
            str += curr.value + " ";
            curr = curr.next;
        }
        console.log(str);
    }
}

// var list = new LinkedList();
// list.insert(10);

// list.insert(20);
// list.printList();
// list.insertAtEnd(30);
// list.printList();
// list.insertAtPost(70 , 1);
// list.printList();