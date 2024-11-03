function main() {
  fetch(" https://httpdump.app/dumps/1f949a34-a079-4664-97e5-a70fc789d4f1", {
    method: "POST",
    body: { username: "kaddu", password: "123" },
    headers: { Authorization: "Bearer 123" },
  }).then(async (res) => {
    const json = await res.json();
    console.log(json);
  });
}
main();
const axios = require("axios");
async function viaAxios() {
  const response = await axios.post(
    " https://httpdump.app/dumps/1f949a34-a079-4664-97e5-a70fc789d4f1",
    {
      username: "kaddu",
      password: "123",
    },
    { headers: { Authorization: "Bearer 123" } }
  );
  console.log(response.data);
}

// viaAxios();
