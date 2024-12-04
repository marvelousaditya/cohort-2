// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log("ID: " + id);
// }
// /*
// or
// function printId(id: (string | number)) {
//     console.log('ID: ' + id);
// }

// */

// printId(101); // ID: 101
// printId("202"); // ID: 202

//
// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Manager = {
//   name: string;
//   department: string;
// };

// type TeamLead = Employee & Manager;

// const teamLead: TeamLead = {
//   name: "Harkirat",
//   startDate: new Date(),
//   department: "Software developer",
// };

//
// function maxOfArr(arr: number[]): number {
//   let maxValue: number = 0;
//   for (let i = 0; i < arr.length; i++) {
//     maxValue = arr[i] > maxValue ? arr[i] : maxValue;
//   }
//   return maxValue;
// }

// /**
//  * or
//  * type NumberArr = number[];
//  * function maxOfArr(arr: NumberArr) {....}
//  */

// let arr = [5, 2, 51, 25, 61];
// console.log(maxOfArr(arr));

//
// interface User {
//   firstName: string;
//   lasName: string;
//   age: number;
// }

// function areLegal(users: User[]) {
//   const filter = users.filter((user) => {
//     return user.age >= 18;
//   });
// }

//
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

// we can also use
// type Direction = "Up" | "Down" | "Left" | "Right"

function doSomething(keyPressed: Direction) {
  // do something based on the direction
  if (keyPressed == Direction.Up) {
  }
}

doSomething(Direction.Up);

console.log(Direction.Up);
console.log(Direction.Down);

//

enum ResponseStatus {
  Success = 200,
  NotFound = 404,
  Error = 500,
}

app.get("/", (req, res) => {
  if (!req.query.userId) {
    res.status(ResponseStatus.Error).json({});
    1;
  }
  // and so on...
  res.status(ResponseStatus.Success).json({});
});
