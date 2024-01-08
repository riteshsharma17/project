require ("../config/db");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : String,
    username : String,
    password : String,
    state : String,
    city : String,
    contact : String,
    gender : String,
    address : String
})


module.exports = mongoose.model("user", UserSchema);