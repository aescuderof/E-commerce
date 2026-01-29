
const mongoose = require('mongoose');

const collarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        default: '',
        trim: true,
    },
}, 

{
    timestamps: true,
}

);

const Collar = mongoose.model('Collar', collarSchema);

module.exports = Collar;