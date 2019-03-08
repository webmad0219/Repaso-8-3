require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const users = [
  {
    name: "Abel Colmenares",
    age: 0,
    text: ""
  },
  {
    name: "Baltasar Torres Garcia",
    age: 0,
    text: ""
  },
  {
    name: "Carlos Eduardo Lores Hernández",
    age: 0,
    text: ""
  },
  {
    name: "Carlos Martínez Crespo",
    age: 0,
    text: ""
  },
  {
    name: "Cristina Blanco",
    age: 0,
    text: ""
  },
  {
    name: "Dan Mihai Grigoriciuc",
    age: 0,
    text: ""
  },
  {
    name: "Daniel Herrero",
    age: 0,
    text: ""
  },
  {
    name: "David Gómez Ortiz",
    age: 0,
    text: ""
  },
  {
    name: "Enrique Anaya",
    age: 0,
    text: ""
  },
  {
    name: "Isabel Rodriguez Godoy",
    age: 0,
    text: ""
  },
  {
    name: "Javier Pérez-Chao Rodríguez",
    age: 0,
    text: ""
  },
  {
    name: "Jose Manuel Ocaña Martos",
    age: 0,
    text: ""
  },
  {
    name: "Raluca Andreea Dana",
    age: 0,
    text: ""
  },
  {
    name: "Sofia Jordan",
    age: 0,
    text: ""
  },
  {
    name: "German",
    age: 0,
    text: "Wunderbar"
  },
  {
    name: "Sonia Ruiz",
    age: 0,
    text: "El amor de la clase"
  },
  {
    name: "Alberto Soler",
    age: 0,
    text: "Maestro de Maps"
  },
  {
    name: "Gabriel Cebrián",
    age: 0,
    text: "Pepe"
  }
]


mongoose.connect(process.env.DB,  {useNewUrlParser: true})
.then(() => {
  console.log(`Connect to mongo ${process.env.DBURL}`)
  return User.deleteMany();
})
.then(() => User.insertMany(users))
.then((users) => {
  console.log(`User save ${users}`)
  return mongoose.connection.close()
})
.then(() => console.log("Disconnect"))
.catch(err => console.log(err));