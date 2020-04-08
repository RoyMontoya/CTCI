import SingleLinkedList from "DataStructures/SingleLinkedList/SingleLinkedList";
import removeDuplicates from "../RemoveDuplicates";
import findToLastElement from "../KthToLast";

describe("Linked list excersice 2.1 ", () => {
  it("should delete the duplicate nodes in a sigle linked list using buffer", () => {
    const linkedList = new SingleLinkedList([1, 2, 1, 3, 5, 2]);
    const expectedList = new SingleLinkedList([1, 2, 3, 5]);

    removeDuplicates(linkedList);

    expect(linkedList).toEqual(expectedList);
  });
});

describe("Linked list excercise 2.2", () => {
  it("should find Kth to last element in a linked list", () => {
    //we assumed that kth = 1 means the element right before the last one, or one before to last
    const linkedList = new SingleLinkedList([1, 2, 3, 4, 5, 6]);
    const kth = 1; //the value should be should be 5;

    const node = findToLastElement(linkedList, kth);

    expect(node.value).toEqual(5);
  });

  it("should return null if the Kth element doesnt exist", () => {
    const linkedList = new SingleLinkedList([1]);
    const kth = 1;

    const node = findToLastElement(linkedList, kth);

    expect(node).toEqual(null);
  });

  it("should return null if we pass a empty list", () => {
    const linkedList = new SingleLinkedList();
    const kth = 1;

    const node = findToLastElement(linkedList, kth);

    expect(node).toEqual(null);
  });
});
