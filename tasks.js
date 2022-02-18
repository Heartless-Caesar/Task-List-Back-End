const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: [200, "Max length of 200 characters"],
  },
  /*
  complete : {
    type : boolean,
    default : false,
  } 
  */
});

module.exports = mongoose.model("Blades", taskSchema);
