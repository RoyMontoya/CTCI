import Node from "../Node/Node";

class SingleLinkList {
  constructor(args) {
    this.head = new Node(args[0], null);
    this.tail = this.head;
    for (let i = 1; i <= args.length - 1; i++) {
      this.insert(args[i]);
    }
  }

  insert(value) {
    const insertNode = new Node(value, null);
    const prevTail = this.tail;
    prevTail.next = insertNode;
    this.tail = insertNode;
  }

  popHead() {
    const newHead = this.head.next;
    this.head = newHead;
  }

  popTail() {
    const prevToTail = this.findPrevToTail(this.head);
    prevToTail.next = null;
    this.tail = prevToTail;
  }

  findPrevToTail(node) {
    return node.next === this.tail ? node : this.findPrevToTail(node.next);
  }

  search(value, node = this.head) {
    if (node == this.tail && node.value !== value) {
      return null;
    }
    return node.value === value ? node : this.search(value, node.next);
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
  }
}

export default SingleLinkList;
