class LinkedList {
  constructor() {}

  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
    }
  }

  prepend(value) {
    const newNode = new Node(value, this.headNode);
    this.headNode = newNode;
  }

  size() {
    let size = 1;
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      size++;
      currentNode = currentNode.nextNode;
    }
    return size;
  }

  head() {
    return this.headNode;
  }

  tail() {
    let tailNode = this.headNode;
    while (tailNode.nextNode !== null) {
      tailNode = tailNode.nextNode;
    }
    return tailNode;
  }

  at(index) {
    let i = 0;
    let currentNode = this.headNode;
    while (i < index) {
      i++;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  pop() {
    let index = this.size() - 2;
    const newTail = this.at(index);
    const oldTail = this.at(index + 1);
    newTail.nextNode = null;

    return oldTail;
  }

  contains(value) {
    let currentNode = this.headNode;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      if (currentNode.value === value) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    let currentNode = this.headNode;
    let i = 0;

    // if the value is in the first item
    if (this.headNode.value === value) {
      return i;
    }

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
      i++;
      if (currentNode.value === value) {
        return i;
      }
    }
    return new Error("Cannot find value in Linked List");
  }

  toString() {
    let string = "";
    let currentNode = this.headNode;
    while (currentNode.nextNode !== null) {
      string = string.concat(`(${currentNode.value}) -> `);
      currentNode = currentNode.nextNode;
    }

    string = string.concat("(null)");

    return string;
  }

  insertAt(value, index) {
    const originalNode = this.at(index);
    const previousNode = this.at(index - 1);
    const newNode = new Node(value, originalNode);
    previousNode.nextNode = newNode;
  }

  removeAt(index) {
    const originalNode = this.at(index);
    const previousNode = this.at(index - 1);

    previousNode.nextNode = originalNode.nextNode;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
