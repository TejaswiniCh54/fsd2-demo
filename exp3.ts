function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);
let str = identity<string>("Hi");

interface Box<T> {
  content: T;
}

let numberBox: Box<number> = { content: 100 };
let stringBox: Box<string> = { content: "Hello" };

function logLength<T extends { length: number }>(item: T): void {
  console.log("Length is:", item.length);
}

logLength("Hello");
logLength([1, 2, 3]);

class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
}

const stringStore = new DataStore<string>();
stringStore.add("Apple");
stringStore.add("Banana");
console.log(stringStore.getAll());

const numberStore = new DataStore<number>();
numberStore.add(10);
numberStore.add(20);
console.log(numberStore.getAll());
