const mongoose = require('mongoose');
const Collar = require('../models/Collar');
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
        const { name, price, description } = req.body;
        const newCollar = await Collar.create({ name, price, description });
        
        if (!newCollar) return res.status(400).json({ error: 'no fue posible crear la collar' });
        
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
        return res.status(200).json({ collarraActulizada: updatedCollar });
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating collar',
            error: error.message,
        });
    }
};

// borrar collarra
exports.deleteCollar = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Formato de id inválido' });
        }
        const deletedCollar = await Collar.findByIdAndDelete(id);
        if (!deletedCollar) {
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
        const deletedCollar = await Collar.findByIdAndDelete(id);
        if (!deletedCollar) {
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
