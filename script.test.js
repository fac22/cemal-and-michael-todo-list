// Number 1: add items to the list
test("Submitting a new task adds it to the list", () => {
    const arr = ["Wash dishes", "Make bed", "Brush teeth"]
    add(arr, "Do the washing");
    equal(arr, ["Wash dishes", "Make bed", "Brush teeth", "Do the washing"])

    newLength++
    equal(arr.length, newLength)
});

// Number 3: remove items from list after checked
test('Deleting an entry removes it from the list', () => {
    // test goes here
    const arr = ["Wash dishes", "Make bed", "Brush teeth"]
    delete(arr, 2) // Has array and index to delete
    equal(arr, ["Wash dishes", "Make bed"])
  });