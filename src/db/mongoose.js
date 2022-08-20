const mongoose = require('mongoose')


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
