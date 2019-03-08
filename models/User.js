const {Schema, model} = require("mongoose");
// Esto es igual a lo que hacemos siempre que es:
/*
  const mongoose = require("mongoose");
  const Schema = mongoose.Schema;
*/


const userSchema = new Schema({
  name: String,
  age: Number,
  text: String
})

const User = model("User", userSchema);

module.exports = User; 