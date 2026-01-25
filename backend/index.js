const express = require("express");

const axios = require("axios").default;


const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const dashboardRoutes = require("./routes/DashboardRoutes");

const app = express();
const cookiePaser = require("cookie-parser");


app.use(
  cors({
    origin: ["http://localhost:3000","http://localhost:5173"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());

app.use("/", authRoute);
app.use("/api/dashboard", dashboardRoutes);

app.get("/", (req, res) => {
  res.send("Request Accepted");
  console.log("Request Accepred");
});

module.exports = app;