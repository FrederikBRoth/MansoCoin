const mongoose = require("mongoose")
const express = require("express");
const app = express();
const path = require('path');
const cors = require("cors")

const port = process.env.PORT || 3000;

//MongoDB Connection
try {
    mongoose.connect("mongodb://mongoadmin:secret@mansocoindb:27017/admin")
} catch (error) {
    console.log(error);
}

//Middleware
app.use(cors());
app.use(express.json());

//Routes
const coinmintingRoute = require("./routes/coinmintingRoute")

//Route middleware
app.use("/minting", coinmintingRoute)

app.get("/testing", (req, res) => {
  console.log("please work")
})
//Temporary HTML serving
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});





app.listen(port);