// models/formModel.js

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/hetauda-city-college-form-submission-data")

const formSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        // Add any email validation if needed
    },
    message: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    // Add other fields as needed
});
module.exports = mongoose.model('Form', formSchema);
