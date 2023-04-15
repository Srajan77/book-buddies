const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  isbn: { type: String },
  bookVersion: { type: String },
  authorName: { type: String },
  sellerEmail: { type: String },
  sellerMobile: { type: String },
  sellerAddress: { type: String },
  imageURL: { type: String, required: true },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
