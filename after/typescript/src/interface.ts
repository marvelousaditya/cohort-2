interface Address {
  local: string;
  pin: number;
}
interface User {
  name: string;
  age: number;
  address?: Address; // ? means it is optional
}

function fn(user: User): void {
  console.log("hi ", user.name);
}

fn({ name: "aditya", age: 21 });
