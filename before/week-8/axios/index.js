function main() {
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}


const axios = require("axios");
async function viaAxios() {
  const response = await axios.get("http://localhost:3000/todos");
  console.log(response.data);
}
// main();
viaAxios();


