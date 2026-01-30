
const mongoose = require('mongoose');

const collarSchema = new mongoose.Schema(
    {
        idProd: {
        type: String,
        required: true,
        unique: true,
        },

        priceID: {
        type: String,
        required: true,
       
        },

        currency: {
        type: String,
        required: true,
        },

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

    img: {
        type: String,
        required: true,
    },

    slug: {
        type: String,
        required: true,
        unique: true,
    },
}, 

{
    timestamps: true,
    collection: 'collares'
}

);

const Collar = mongoose.model('Collar', collarSchema);

module.exports = Collar;