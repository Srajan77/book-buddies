const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  isbn: { type: String },
  bookVersion: { type: String },
  authorName: { type: String },
  imageURL: { type: String, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
