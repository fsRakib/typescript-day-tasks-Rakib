// 1. Object & Array Manipulation
interface User {
  name: string;
  active: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.active);
}

const users: User[] = [
  { name: "Rakib", active: true },
  { name: "Arka", active: false },
  { name: "Mamun", active: true },
];

console.log(filterActiveUsers(users));

// 2. Function Overloading
// Goal: same function name, different parameters
//signature
function getArea(shape: "circle", r: number): number;
function getArea(shape: "square", a: number): number;

//implementation
function getArea(shape: "circle" | "square", size: number): number {
  if (shape == "circle") return Math.PI * size * size;
  return size * size;
}

console.log(getArea("circle", 5));
console.log(getArea("square", 5));

// 3. Async/Await Practice
//Goal: fetching data asynchronously
async function fetchData(url: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Fetch data from ${url}`), 2000);
  });
}

async () => {
  const data = await fetchData(
    "https://chatgpt.com/c/68e49661-b2f0-8324-a8d1-43844e25e1a9"
  );
  console.log("URL data ", data);
};
//A callback function is a function that you pass as an argument to another function,
// so it can be called later, not immediately.

// 4. Error Handling
function safeJSONParse(str: string): object | null {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
}

console.log(safeJSONParse('{"name":"Rakib", "age":"23"}'));
console.log(safeJSONParse("name : Rakib"));

//5. Interface + Class Implementation
interface Animal {
  name: string;
  makeSound(): string;
}

class Dog implements Animal {
  constructor(public name: string) {}
  makeSound(): string {
    return "Woof Woof";
  }
}

const dog = new Dog("Buddy");
console.log(`${dog.name}m says ${dog.makeSound()}`);

//6. Generic Function
//Goal: get last element safely
function getLastItem<T>(arr:T[]): T | null {
    return arr.length>0? arr.at(-1) ?? null: null;
}
console.log(getLastItem<number>([1, 2, 3, 4]));
console.log(getLastItem<string>(["a", "b", "c", "d"]));

//7. Module Export / Import
import {add, sub} from "./mathUtils"
console.log(add(5,3));
console.log(sub(5,3));


// 8. Simple CLI Program
// Goal: accept user input via process.argv
const name=process.argv[2];
console.log(`Hello, ${name}! Welcome to TypeScript CLI.`);
