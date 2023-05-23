class LinkedListNode {
  value;
  next;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  head;

  removeItem(node) {

  }

  addToTail(value) {

  }

  toArray() {
    const array = [];
    let node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  addToHead(value) {
    const newHead = new LinkedListNode(value, this.head);
    this.head = newHead;
  }

  find(value) {

  }

  insertBefore(node, value) {

  }

  insertAfter(node, value) {

  }

  addToTail(value) {
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = new LinkedListNode(value);
  }
}

const list = new LinkedList();

list.addToHead('2');
list.addToHead('3');
list.addToHead('5');

console.log(list);
