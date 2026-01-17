require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios").default;


const bodyParser = require("body-parser");
const cors = require("cors");
const authRoute = require("./routes/AuthRoute");
const dashboardRoutes = require("./routes/DashboardRoutes");

const app = express();
const cookiePaser = require("cookie-parser");

const { HoldingModel } = require("./models/HoldingModel");
const { PositionModel } = require("./models/PositionModels");
const { OrderModel } = require("./models/OrderModel");

const PORT = process.env.PORT || 5000;
const db_url = process.env.ATLAS_MONGO_URL;

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
mongoose
  .connect(db_url)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("Request Accepted");
  console.log("Request Accepred");
});

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = data.holdings;
//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingModel({
//         name: item.name,
//         qty: item.qty,
//         avg: item.avg,
//         price: item.price,
//         net: item.net,
//         day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Request has been accepted.");
// });
// app.get("/addPositions", async (req, res) => {
//   try {
//     await PositionModel.insertMany(data.positions);
//     res.send("Positions inserted successfully ");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Insert failed ");
//   }
// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  try {
    const order = await OrderModel.create(req.body);
    res.status(201).send("Order Success");
  } catch (err) {
    console.error("Insert Error:", err.message);
    res.status(500).send(err.message);
  }
});

app
  .listen(8080, (req, res) => {
    console.log("Server is listening on the port: ", 8080);
  })
  .on("error", (err) => {
    console.error("Server failed to start:", err.message);
  });

// app.get("/stock", async (req, res)=> {
//   const options = {
//     method: "GET",
//     url: "https://stock.indianapi.in/stock",
//     headers: { Accept: "*/*", "x-api-key": process.env.STOCK_SECRET_TOKEN },
//   };

//   try {
//     const { data } = await axios.request(options);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// });
