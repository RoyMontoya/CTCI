import SingleLinkedList from "../SingleLinkedList";

describe("Single Linked List", () => {
  const singleLinkedList = new SingleLinkedList([1, 2, 3, 4]);

  it("should create a single linked list with head and tail", () => {
    const singleLinkedList = new SingleLinkedList([1, 2, 3, 4]);

    expect(singleLinkedList.head.value).toEqual(1);
  });
});
