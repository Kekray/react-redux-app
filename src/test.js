function* generatorFunction() {
  for (let i=0; i<5; i++) {
    yield i;
  }
}

const iter = generatorFunction()

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// { value: undefined, done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }