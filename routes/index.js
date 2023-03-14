const express = require("express");
const holaMundo = require("../controllers/holaMundo");

//import { postLogin } from '../controllers/postControllers';

const routerAuth = express.Router();

/*const holaMundo = async (req, res) => {
  console.log("req", req);
  res.json({ success: true, mensaje: "hola-mundo" });
};*/

routerAuth.get("/hola-mundo", (req, res) => {
  let respuesta = holaMundo.get();
  res.json(respuesta);
});

routerAuth.post("/hola-mundo", (req, res) => {
  let respuesta = holaMundo.post(req.body);
  res.json(respuesta);
});

module.exports = routerAuth;
