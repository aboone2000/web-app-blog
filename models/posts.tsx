import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    post: {type: String, required: true},
    pic: {type: String, required: false},
    user: {type: String, required: true},
})

module.exports = mongoose.model('Post', postSchema)