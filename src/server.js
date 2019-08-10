const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0-nogya.mongodb.net/omnistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

server.use(express.json());
server.use(cors());

server.use(routes);

server.listen(3333);
