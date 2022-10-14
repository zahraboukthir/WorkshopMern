const express = require("express");
const app = express();
const cors=require('cors')
require("dotenv").config({path:"./config/.env"})
const port =  process.env.port || 6000;
const connectbd =require("./config/connectdb")
app.use(express.json())
app.use(cors())
connectbd()
app.use("/upload", express.static(__dirname + "/upload"));



app.use("/product",require("./routes/productRoutes"))
app.use("/user",require("./routes/userroutes"))
app.listen(port, (error) =>
  error
    ? console.log(error)
    : console.log(`Example app listening on port ${port}!`)
);
