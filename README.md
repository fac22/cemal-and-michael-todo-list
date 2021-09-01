### 📝 TO DO LIST README

1 - Add tasks to a list so that I can keep track of them

```js
test("Submitting a new task adds it to the list", () => {
    1 - check length of array is +1 compared to what it was before
    2 - Check last element of array is last element added
});
```

2- Check things off my list so that I can see what I’ve done

```js
test('Checking an entry marks it as complete', () => {

     const obj = {
        item: 'Do the washing',
        checked: false,
        unqiueId:
    }

  1 - If check box is checked then object `checked` value is `true` else `false`
  2 - Check that item has `checked` === true
});
```

3 - Delete things from the list if I don’t need to do them anymore

```js
test('Deleting an entry removes it from the list', () => {
  // test goes here
    1 - check length of array is -1 compared to what it was before
});
```

```js
const list = [
  { item: 'Washing', checked: true },
  { item: 'Write book', checked: false },
];
```
