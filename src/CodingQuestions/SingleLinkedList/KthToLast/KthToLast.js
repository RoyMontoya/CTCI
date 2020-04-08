/*
Implement an algorithm to fing th Kth to last element in a linked list
*/

const findToLastElement = (linkedList, kth) => {
  const length = calculateLinkedListLength(linkedList);
  let position = length - kth - 1; //-1 represents the tail.
  if (position > 0) {
    let node = linkedList.head;
    while (position > 0) {
      node = node.next;
      position--;
    }
    return node;
  }
  return null;
};

const calculateLinkedListLength = linkedList => {
  if (!linkedList.head) return 0;
  let length = 1;
  let node = linkedList.head;
  while (node.next) {
    node = node.next;
    length++;
  }
  return length;
};

export default findToLastElement;
