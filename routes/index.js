const express = require("express");

//import { postLogin } from '../controllers/postControllers';

const routerAuth = express.Router();

const holaMundo = async (req, res) => {
  res.json({ success: true, hola: "mundo" });
};

routerAuth.get("/hola-mundo", holaMundo);

module.exports = routerAuth;
