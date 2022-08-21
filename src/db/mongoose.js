const mongoose = require('mongoose')
// const User = require("./../models/user");

/**
 * connectin to db with provided url
 */
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-nodejs', {
    useNewUrlParser: true,
    // below code is umsupported for vmongodb > 6
    // useCreateIndex: true 
}).then(() => {
    console.log("database connected !! ")
}).catch((e) => {
    console.log("we got error: "+e)
})

// const user = {
//     name: " prince",
//     email: "test1@gmail.com",
//     password: "test1@123",
//     age: 21
// };

// new User(user).save();
