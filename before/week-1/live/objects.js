let obj = [
  { firstName: "aditya", gender: "male" },
  { firstName: "sweta", gender: "female" },
  { firstName: "anant", gender: "male" },
  { firstName: "anu", gender: "female" },
];

for (let i = 0; i < obj.length; i++) {
  if (obj[i].gender == "male") console.log(obj[i]["firstName"]);
}
