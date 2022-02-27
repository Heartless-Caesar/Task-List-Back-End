class customErrorClass extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const customError = (msg, statusCode) => {
  return new customErrorClass(msg, statusCode);
};

module.exports = { customErrorClass, customError };
