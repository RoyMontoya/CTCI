import SingleLinkedList from "../SingleLinkedList";

describe("Single Linked List", () => {
  it("should create a single linked list with head and tail", () => {
    const singleLinkedList = new SingleLinkedList([1, 2, 3]);

    expect(singleLinkedList.head.value).toEqual(1);
    expect(singleLinkedList.head.next.value).toEqual(2);
    expect(singleLinkedList.tail.value).toEqual(3);
  });

  it("should pop the head of the linked list and use the next node as new head", () => {
    const headTestLinkedList = new SingleLinkedList([1, 2]);

    headTestLinkedList.popHead();

    expect(headTestLinkedList.head.value).toEqual(2);
    expect(headTestLinkedList.head).toEqual(headTestLinkedList.tail);
  });

  it("should pop the tail and make previous node new tail", () => {
    const tailTestLinkedList = new SingleLinkedList([1, 2, 3, 4]);

    tailTestLinkedList.popTail();

    expect(tailTestLinkedList.tail.value).toEqual(3);
  });

  it("should return the node value if found", () => {
    const searchTestLinkedList = new SingleLinkedList([4, 5, 6]);

    const node = searchTestLinkedList.search(4);

    expect(node.value).toEqual(4);
  });

  it("should return null if you search for invalid value", () => {
    const searchTestLinkedList = new SingleLinkedList([4, 5, 6]);

    const node = searchTestLinkedList.search(1);

    expect(node).toEqual(null);
  });

  it("should delete the duplicate nodes in a sigle linked list using buffer", () => {
    const singleLinkedList = new SingleLinkedList([1, 2, 1, 3, 5, 2]);
    const expectedList = new SingleLinkedList([1, 2, 3, 5]);

    singleLinkedList.removeDuplicates();

    expect(singleLinkedList).toEqual(expectedList);
  });
});
