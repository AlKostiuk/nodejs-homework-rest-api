

const contacts = require('../models/contacts'); 
const { ErrHttp } = require("../helper/ErrHttp");

const getAllContacts = async (req, res, next) => {
    const result = await contacts.listContacts();
    res.status(200).json(result);
}

const getContactById = async (req, res, next) => {
    const { id } = req.params;
    const contact = await contacts.getContactById(id);
    if (!contact) {
        throw ErrHttp(404, "Not found");
    }
    res.status(200).json(contact);
}

const addContact = async (req, res, next) => {
    const newContact = await contacts.addContact(req.body);
    res.status(201).json(newContact);
}

const removeContact = async (req, res, next) => {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
        throw ErrHttp(404, "Not found");
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
}

const updateContact = async (req, res, next) => {
    const { id } = req.params;
    const result = await contacts.updateContact(id, req.body);
    if (!result) {
        throw ErrHttp(404, "Not found");
    }
    res.status(200).json(result);
}

module.exports = {
    getAllContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact
};
