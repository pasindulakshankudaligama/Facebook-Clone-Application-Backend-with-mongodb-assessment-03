const express = require("express");
const { default: mongoose } = require("mongoose");
const item = require("./routes/Item");

const app = express();
const port = 5000;

const url ='mongodb://localhost/express'

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on("open",()=>{
  console.log("mongoDB Connected")
})

app.use(express.json());

app.use("/item", item);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  