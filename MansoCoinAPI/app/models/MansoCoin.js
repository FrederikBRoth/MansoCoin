const mongoose = require("mongoose");

const mansoCoinSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    uniqueid: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("MansoCoin", mansoCoinSchema);