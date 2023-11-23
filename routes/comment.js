// models/comment.js
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hetauda-city-college-form-submission-data")

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Comment', commentSchema);

