const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  mode: {
    type: String,
    required: true,
    enum: ["BUY", "SELL"], // prevents invalid values
  },
});

module.exports = { OrderSchema };
