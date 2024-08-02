const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
  const { user, password } = req.query;
  res.send(`Standard GET response ${user}`);
});

app.post("/register", (req, res) => {
  const { user, password } = req.body;
  res.send(`Standard POST response.Welcome  ${user}!`);
});

app.listen(port, () => {
  console.log(`listening on port${port}`);
});



