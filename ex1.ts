export type User = string | number;

interface Person {
  name: string;
  age: number;
  occupation: string;
}

export const users: Person[] = [
  {
    name: "Wilker",
    age: 25,
    occupation: "Backend developer",
  },
  {
    name: "Bob",
    age: 23,
    occupation: "Product Manager",
  },
];

export function logPerson(user: Person) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);
