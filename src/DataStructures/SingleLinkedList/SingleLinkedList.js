import Node from "../Node/Node";

class SingleLinkList {
  constructor(args) {
    if (!args) {
      this._initializeEmpty();
    } else {
      this.head = new Node(args[0], null);
      this.tail = this.head;
      for (let i = 1; i <= args.length - 1; i++) {
        this.insert(args[i]);
      }
    }
  }

  _initializeEmpty() {
    this.head = null;
    this.tail = null;
  }

  _initializeHead(value) {
    this.head = new Node(value);
    this.tail = this.head;
  }

  insert(value) {
    if (this.head === null) {
      return this._initializeHead(value);
    }
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
    const prevToTail = this._findPrevToTail(this.head);
    prevToTail.next = null;
    this.tail = prevToTail;
  }

  _findPrevToTail(node) {
    return node.next === this.tail ? node : this._findPrevToTail(node.next);
  }

  search(value, node = this.head) {
    if (node == this.tail && node.value !== value) {
      return null;
    }
    return node.value === value ? node : this.search(value, node.next);
  }

  prepend(value) {
    if (this.head === null) {
      return this._initializeHead(value);
    }
    const node = new Node(value, this.head);
    this.head = node;
  }
}

export default SingleLinkList;
