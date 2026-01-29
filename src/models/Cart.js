const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema
({
 products: 
 [
    {
        quantity: 
        {
            type: Number, 
            required: true, 
        },

        priceID: 
        {
            type: String,
            required: true
        },

        name:
        {
            type: String,
            required: true
        },
        
        img: {
            type: String,
        },

        slug: {
            type: String,
        }
    }
]

});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;