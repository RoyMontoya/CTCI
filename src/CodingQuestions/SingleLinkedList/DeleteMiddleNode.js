/*
implement an algorithm to delete a node inbetween head and tail, given access to that node;
*/

const deleteMiddleNode = (linkedList, nodeToDelete) => {
  if (isHeadOrTail(linkedList, nodeToDelete)) return;
  let node = linkedList.head;
  while (node !== linkedList.tail) {
    if (node.next === nodeToDelete) {
      node.next = node.next.next;
      return;
    }
    node = node.next;
  }
};

const isHeadOrTail = (linkedList, node) => {
  return linkedList.head === node || linkedList.tail === node;
};

export default deleteMiddleNode;
