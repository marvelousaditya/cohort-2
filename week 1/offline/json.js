// JSON.parse and JSON.stringify

// if we want to send an object to another person , it might be difficult to understand the object , so we store the object in the form of string and then send it

// then accesing the objects might be proble so we use JSON

//

// const users = '{"firstName": "aditya" , "gender": "male"}';

// const user = JSON.parse(users);
// console.log(user["firstName"]);

const user = { firstName: "aditya", gender: "male" };
const newUser = JSON.stringify(user); // converts the object to string
console.log(newUser);
console.log(newUser["firstName"]); 
