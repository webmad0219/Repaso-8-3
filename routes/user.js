const Router = require("express").Router();
const User = require("../models/User");

// Esto es lo mismo que hacemos siempre pero en una sola linea
/* 
  const express = require("express");
  const Router = express.Router();
*/

//Escribir aquí el cógido.


// Router.get("/", (req, res) => {
// console.log('test')
//   User.find()
//  .then(users => res.render('index'), {users})
//  .catch(err => console.log(err))
// })

Router.get("/show", (req, res) => {

  User.find()
 .then(users => res.render('index', {users}))
 .catch(err => console.log(err))
})

Router.get("/update/:id", (req, res )=>{
 console.log(req.params)
  User.findById({_id : req.params.id})
.then(users => res.render("update",{users}))
.catch(err => console.log(err))
})

Router.post("/update/:id",(req,res)=>{
  const {name, age, text} = req.body
  User.findByIdAndUpdate(req.params.id, {$set:{name, age ,text}}, {new:true})
  .then(users => {console.log('test');res.redirect("/user/show")})
  .catch(err => console.log(err))

})



module.exports = Router;