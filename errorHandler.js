const { customErrorClass } = require("./customErrorClass");

const errorHandler = (err, req, res, next) => {
  if (err instanceof customErrorClass) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: "An error ocurred" });
};

module.exports = errorHandler;
