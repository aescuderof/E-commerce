const mongoose = require('mongoose');
const Collar = require('../models/Collar');
const stripe = require('stripe')(process.env.STRIPE_KEY);
// traer modelo de Collares
exports.getAllCollares = async (req, res) => {
    try {
        const collares = await Collar.find({});
        return res.status(200).json({ collares });
    } catch (error) {
        return res.status(500).json({
            message: 'Error encontrando collares',
            error: error.message,
        });
    }
};

// obtener una collar por id
exports.getCollarById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Formato de id inválido' });
        }
        const collar = await Collar .findById(id);
        if (!collar) {
            return res.status(404).json({ error: 'Collar no encontrado' });
        }
        return res.status(200).json({ collar });
    } catch (error) {
        return res.status(500).json({
            message: 'Error buscando collar por ID',
            error: error.message,
        });
    }
};

// completar los controladores para las rutas POST, PUT y DELETE
exports.createCollar = async (req, res) => {
     try {
        const { name, price, description, img, currency, slug } = req.body;
        const product = await stripe.products.create({
            name,
            description,
            images: [img],
            metadata: { 
                productDescription: description,
                slug: slug,
             },
        });
        
        const stripePrice = await stripe.prices.create({
            unit_amount: price,
            currency,
            product: product.id,
        });


        const newCollar = await Collar.create({ 
            idProd: product.id,
            priceID: stripePrice.id,
            currency,
            name: product.name,
            price: stripePrice.unit_amount,
            description,
            img,
            currency,
            slug, 
        });
        
        if (!newCollar) return res.status(400).json({ error: 'No fue posible crear la collar' });
        
        return res.status(201).json( {datos: newCollar });

    } catch (error) {
        return res.status(500).json({
            message: 'Error creando collar',
            error: error.message,
        });
    }
};

// completar los controladores para las rutas POST, PUT y DELETE
exports.updateCollar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Formato de id inválido' });
        }
        const { name, price, description } = req.body;
        const updatedCollar = await Collar.findByIdAndUpdate(
            id,
            { name, price, description },
            { new: true, runValidators: true }
        );
        if (!updatedCollar) {
            return res.status(404).json({ error: 'Collar not found' });
        }
        return res.status(200).json({ collarraActualizada: updatedCollar });
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating collar',
            error: error.message,
        });
    }
};

// borrar collar
exports.deleteCollar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Formato de id inválido' });
        }
        const deleteCollar = await Collar.findByIdAndDelete(id);
        if (!deleteCollar) {
            return res.status(404).json({ error: 'Collar not found' });
        }
        return res.status(200).json({ message: 'Collar deleted successfully' });
    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting collar',
            error: error.message,
        });
    }
};

// completar los controladores para las rutas POST, PUT y DELETE
exports.deleteCollar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Formato de id inválido' });
        }
        const deleteCollar = await Collar.findByIdAndDelete(id);
        if (!deleteCollar) {
            return res.status(404).json({ error: 'Collar not found' });
        }
        return res.status(200).json({ message: 'Collar deleted successfully' });
    } catch (error) {
        return res.status(500).json({
            message: 'Error deleting collar',
            error: error.message,
        });
    }   

};
