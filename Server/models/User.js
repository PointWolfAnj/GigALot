const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Username:{
        type:String,
        require: true,
        mins: 3,
        max: 20,
        unique: true
    },
    email
}) 