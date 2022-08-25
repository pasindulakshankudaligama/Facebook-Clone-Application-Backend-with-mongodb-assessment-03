const express = require("express");
const app =express();
const router = express.Router();
app.use(express.json())

const req = require("express/lib/request");
const res = require("express/lib/response");


module.exports = router;