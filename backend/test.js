const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("EXPRESS OK");
});

app.listen(8080, () => {
  console.log("EXPRESS LISTENING ON 8080");
});
