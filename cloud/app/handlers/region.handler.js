const Region = require('../models/Region');

// Obtener todos los productos
const listRegion = async (req, res) => {
    try {
        const regiones = await Region.query(); // Ejemplo de cómo obtener los productos usando Objection.js
        res.json(regiones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Insertar un nuevo producto
const insertRegion = async (req, res) => {
    try {
        const region = await Region.query().insert(req.body); // Ejemplo de cómo insertar un producto usando Objection.js
        res.status(201).json(region);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto existente
const updateRegion = async (req, res) => {
    try {
        const id = req.params.id;
        const region = await Region.query().patchAndFetchById(id, req.body); // Ejemplo de cómo actualizar un producto usando Objection.js
        res.json(region);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un producto
const deleteRegion = async (req, res) => {
    try {
        const id = req.params.id;
        const region = await Region.query().deleteById(id); // Ejemplo de cómo eliminar un producto usando Objection.js
        res.json(region);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listRegion,
    insertRegion,
    updateRegion,
    deleteRegion,
};
