//https://www.youtube.com/watch?v=dq3F3e9o2DM&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&index=11

var newNode = require('./create.js');

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }


    insert(element){
        var node =  new newNode(element);
      //  var temp; // taking temp variable to traverse till end
        //check weather linked list is empty or not
        if(this.head == null){
            this.head = node; //simply assign new node to head
            this.size++;
        }else{
            //insert at the begining of the array
            node.value = element;
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    }

    insertAtEnd(element){
        var node =  new newNode(element);
        var temp; // taking temp variable to traverse till end
        //check weather linked list is empty or not
        if(this.head == null){
            this.head = node; //simply assign new node to head
            this.size++;
        }else{
            // node.value = element;
            // node.next = 0;
            temp = this.head
            while(temp.next){
                temp = temp.next;
            }
            temp.next = node;
            this.size++;
        } 
    }


    insertAtPost(element , pos){
        var node =  new newNode(element);
        var temp; // taking temp variable to traverse till end
        if(pos > this.size){
            console.log("Incorrect Position");
            return;
        }else{
            temp = this.head;  
            var i = 1;
            while(i<pos){ //we have to traverse till we reach the position
                temp = temp.next;
                i++;

            }
            node.next = temp.next;
            temp.next = node;
            this.size++    
           
        }
        temp = temp.next;
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

var list = new LinkedList();
list.insert(10);

list.insert(20);
list.printList();
list.insertAtEnd(30);
list.printList();
list.insertAtPost(70 , 1);
list.printList();