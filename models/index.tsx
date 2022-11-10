require('dotenv').config()
const mongoose: any = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports.Post = require('./posts')

