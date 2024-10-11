const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose= require("Passport-local-mongoose");

const userSchema = new Schema({
email:{
    type:String,
    require: true
    }
});

userSchema.plugin(passportLocalMongoose);//To store password

module.exports = mongoose.model("User",userSchema);