/*
Remove duplicates from a unsorted link list
*/

const removeDuplicates = linkedList => {
  const prevValues = [linkedList.head.value];
  let node = linkedList.head;

  while (node.next) {
    if (prevValues.includes(node.next.value)) {
      if (node.next.next) {
        node.next = node.next.next;
      } else {
        node.next = null;
        linkedList.tail = node;
        return linkedList;
      }
    }
    prevValues.push(node.value);
    node = node.next;
  }
};

export default removeDuplicates;
