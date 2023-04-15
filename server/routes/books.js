const express = require("express");
const nodemailer = require("nodemailer");
const Book = require("../models/Book");
const User = require("../models/Users");
const Order = require("../models/Orders");
const { verifyToken } = require("./users");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const response = await Book.find({});
    // console.log(response);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.post("/", verifyToken, async (req, res) => {
  const book = new Book(req.body);
  console.log(req.body);
  try {
    const response = await book.save();
    console.log(response);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});


router.put("/", verifyToken, async (req, res) => {
  try {
    const book = await Book.findById(req.body.bookID);
    const user = await User.findById(req.body.userID);
    // console.log("user  ", user);
    // console.log("book  ", book);
    console.log(req.body.bookID);
    user.savedBook.push(book);
    await user.save();
    res.json({ savedBook: user.savedBook });
  } catch (err) {
    res.json(err);
  }
});


router.put("/deleteSavedBook", async (req, res) => {
  try {
    const book = await Book.findById(req.body.bookID);
    const user = await User.findById(req.body.userID);

    const idx = user.savedBook.indexOf(req.body.bookID);
    if (idx > -1) {
      user.savedBook.splice(idx, 1);
    }
    
    await user.save();
    res.json({ savedBook: user.savedBook });
  } catch (err) {
    res.json(err);
  }
});


router.get("/savedBook/ids/:userID", async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
    res.json({ savedBook: user?.savedBook });
  } catch (err) {
    res.json(err);
  }
});


router.get("/savedBook/:userID", async (req, res) => {
  try {
    const user = await User.findById(req.params.userID);
    const savedBook = await Book.find({
      _id: { $in: user.savedBook },
    });

   
    res.status(201).json({ savedBook });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post("/order", verifyToken, async (req, res) => {
  const order = new Order(req.body);
  
  try {
    
    const response = await order.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});


router.get("/order", async (req, res) => {
  try {
    const response = await Order.find({});
    // console.log(response);
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});


router.post("/order-details", async (req, res) => {
  // console.log(req.body);
  if (req.body.email !== "") {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // SMTP server address (usually mail.your-domain.com)
      port: 465, // Port for SMTP (usually 465)
      secure: true, // Usually true if connecting to port 465
      auth: {
        user: "", // Your email address
        pass: "", // Password (for gmail, your app password)
      },
    });

    let info = await transporter.sendMail({
      from: "sharmasrajan90@gmail.com",
      to: req.body.email,
      subject: "OTP for order",
      text: "Your OTP for order is 4290",
    });
    console.log(info.messageId);
  }
});

module.exports = router;
