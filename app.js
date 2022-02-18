const errorHandler = require("./errorHandler");
const connectDB = require("./connect");
const notFound = require("./notFound");
const express = require("express");
const router = require("./routes");
const app = express();
const port = process.env.port || 5000;

app.use(express.json());

app.use("/app", router);

app.use(notFound);

app.use(errorHandler);

const start = async () => {
  try {
    await connectDB;
    app.listen(port, () => {
      console.log(`Port ${port} is listening`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
