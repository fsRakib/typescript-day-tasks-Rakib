// 1. Basic Type & Interface Practice
interface User {
  name: string;
  email: string;
  phone?: string;
  active?: boolean;
}

const user1: User = {
  name: "Rakib",
  email: "rakib@student.sust.edu",
  phone: "123-456-7890",
  active: true,
};
const user2: User = {
  name: "emran",
  email: "emran@student.sust.edu",
  phone: "987-654-3210",
  active: false,
};

// Union & Type Narrowing

function printId(id: number | string) {
  if (typeof id == "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(123);
printId("Rakib is in at SUST");

// 3. Array & Object Typing
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}
const products: Product[] = [
  {
    name: "Laptop",
    price: 1000,
    inStock: true,
  },
  {
    name: "Phone",
    price: 500,
    inStock: true,
  },
  {
    name: "Tablet",
    price: 300,
    inStock: false,
  },
];

// 4. Function with Generics
function getFirstItem<T>(arr: T[]): T | null {
  return arr[0] ?? null;
}

console.log(getFirstItem<number>([111, 2, 3, 4]));
console.log(getFirstItem<string>(["SUST", "b", "c", "x"]));

// 5. Readonly & Partial Utility Types
interface User {
  name: string;
  email: string;
  phone?: string;
}

const user3: Readonly<User> = {
  name: "Rakib",
  email: "fsrakiba50@gmail.com",
};
// user3.name="Arka";
const user4: Partial<User> = {
  name: "Arka",
  email: "fsrakiba50@gmail.com",
};
user4.name = "Emran";
console.log(user4.name);

// 6. Type Assertion & Casting
let value: unknown = "Assertion & Casting";
if (typeof value === "string") {
  let str = value as string;
  console.log(str.toUpperCase());
}

// 7. Enum & Literal Type
enum Role {
  Admin,
  User,
}

let role: Role = Role.User;
console.log(role);

let status: "success" | "error" | "loading";
status = "success";
console.log(status);
status = "error";
console.log(status);

// 8. Function Return Type Practice
interface User {
  name: string;
  email: string;
}

async function fetchUsers(): Promise<User[]> {
  // Promise<User[]> means “this async function will eventually return an array of Users
  return [
    { name: "Rakib", email: "fsraki@gmail.com" },
    { name: "Emran", email: "emran@gmail.com" },
  ];
}

(async () => {
  const user = await fetchUsers();
  console.log(user);
})();
