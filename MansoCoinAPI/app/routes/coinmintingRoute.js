const express = require("express");
const cors = require("cors")
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const MansoCoin = require("../models/MansoCoin");

router.use(cors())

router.post("/mint", async (req, res) => {

    const mansoCoin = await new MansoCoin({
        owner: req.body.owner,
        uniqueid: uuidv4()
    }).save();
    res.end()   
})

router.get("/check", (req, res) => {
    MansoCoin.find().then((content) => console.log(content))
    res.send("test")
})

// const Questions = mongoose.model('Question', questionSchema) 

// const question = new Questions({
//     question: "Fuckoooo"
// })
// question.save().then(() => {
//     Questions.find().then((content) => console.log(content))
// });

module.exports = router;