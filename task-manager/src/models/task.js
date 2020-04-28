
const mongoose = require("mongoose");
const validator = require("validator");



const schema = new mongoose.Schema({
    description: {
        type: String,
        minlength: [7, 'Description too short'],
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner : {
        type: mongoose.Schema.Types.ObjectId,
        required :true,
        ref: "User"
    }
}, {timestamps: true})

const Task = mongoose.model("Task", schema);

module.exports = Task;