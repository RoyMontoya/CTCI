import SingleLinkedList from "DataStructures/SingleLinkedList/SingleLinkedList";
import removeDuplicates from "../RemoveDuplicates";

describe("Linked list excersice 2.1 ", () => {
  it("should delete the duplicate nodes in a sigle linked list using buffer", () => {
    const linkedList = new SingleLinkedList([1, 2, 1, 3, 5, 2]);
    const expectedList = new SingleLinkedList([1, 2, 3, 5]);

    removeDuplicates(linkedList);

    expect(linkedList).toEqual(expectedList);
  });
});
