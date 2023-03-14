const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const routerAuth = require("./routes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(routerAuth);
app.set("PORT", process.env.PORT || 5000);

app.listen(app.get("PORT"), () => {
  console.log(`Servidor ejecutándose en puerto
    ${app.get("PORT")}`);
});
