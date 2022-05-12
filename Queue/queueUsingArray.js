class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
    //this will add the element at the rear
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length > 0) {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    } else {
      return "Underflow";
    }
  }
  front() {
    // peek()
    if (this.items.length == 0) {
      return "Queue is empty";
    } else {
      return this.items[this.head];
    }
  }

  isEmpty() {
    return this.items.length == 0;
  }

  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i] + "";
    }
    return str;
  }
}

var queue = new Queue();
console.log(queue.dequeue());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.front());
console.log(queue.dequeue());
console.log(queue.printQueue());
