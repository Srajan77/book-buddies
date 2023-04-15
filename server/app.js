const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {router} = require("./routes/users");
const booksRouter = require("./routes/books");
const app = express();

// sharmasrajan90;
// wRvV9oNGRWtdFRwt;

app.use(express.json());
app.use(cors());

app.use("/auth", router);   // userRouter
app.use("/book", booksRouter);

mongoose.connect(
  "mongodb+srv://sharmasrajan90:wRvV9oNGRWtdFRwt@book-store.l9srkwa.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas!");
});


app.listen(3001, ()=>{
    console.log("Server started on port 3001");
})