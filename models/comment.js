const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    content: {
        type: String,
        required: true
    },
    pic: {
        type: String, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)