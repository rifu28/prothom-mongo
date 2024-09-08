const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const users = [
  { id: 1, name: "rifat" },
  { id: 1, name: "rifat" },
  { id: 1, name: "rifat" },
  { id: 1, name: "rifat" },
  { id: 1, name: "rifat" },
];

app.get("/", (req, res) => {
  res.send("users management server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
