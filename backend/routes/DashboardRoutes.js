const router = require("express").Router();

const { HoldingModel } = require("../models/HoldingModel");
const { PositionModel } = require("../models/PositionModels");
const { OrderModel } = require("../models/OrderModel");

const {userVerification} = require("../middlewares/AuthMiddleware");

router.get("/dashboard-data", userVerification, (req, res) => {
  res.json({ message: "Dashboard access granted", user: req.user });
});

router.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
})

router.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
});

router.post("/newOrder", async (req, res) => {
  try {
    const order = await OrderModel.create(req.body);
    res.status(201).send("Order Success");
  } catch (err) {
    console.error("Insert Error:", err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;