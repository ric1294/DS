class Stack{
    constructor(){
        this.data = [];
        this.top = 0;
    }

    push(element) {
        //one way
        this.data.push(element)


        //second way
        this.data[this.top] = element
        this.top++;
    }

    length(){
        return this.top;
    }

    pop(element){
        if(this.data.length == 0){
            return "Underflow";
        }
        return this.data.pop();
    }

    peek(){
        if(this.data.length == 0){
            return "Underflow";
        }
        return this.data[this.data.length-1];
    }

    isEmpty(){
        return this.data.length == 0;
    }

    printStack(){
        var str = "";
        for (var i = 0; i < this.data.length; i++)
            str += this.data[i] + " ";
        return str;
    }
}

var stack = new Stack()
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(67);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack()); 