const mongoose = require('mongoose')
require('dotenv').config()
const User = require("./../models/user");

/**
 * connectin to db with provided url
 */
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    // below code is unsupported for vmongodb > 6
    // useCreateIndex: true 
}).then(() => {
    console.log("database connected !! ")
}).catch((e) => {
    console.log("database connection error: "+e)
})

// const user = {
//     name: " xyz",
//     email: "abc@gmail.com",
//     password: "pab@123",
//     age: 21
// };

// new User(user).save();
// // user.generateAuthToken();
