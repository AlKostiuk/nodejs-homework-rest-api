// const contacts = require('../models/contacts');
// const {  controlWrapper,ErrHttp } = require('../helpers');

// const getAllContacts = async (__, res, _) => {
//     const result = await contacts.listContacts();
//     res.status(200).json(result);
// }

// const getContact = async (req, res, next) => {
//     const { contactId } = req.params;
//     const contact = await contacts.getContactById(contactId)
//     if (!contact) {
//         throw ErrHttp(404, "Not found");
//     }
//     res.status(200).json(contact)
// }

// const addContactData = async (req, res, _) => {
//     const contact = await contacts.addContact(req.body);
//     res.status(201).json(contact);
// }

// const deleteById = async (req, res, next) => {
//     const { contactId } = req.params;
//     const result = await contacts.removeContact(contactId);
//     if (!result) {
//         throw ErrHttp(404, "Not found");
//     }
//     res.status(200).json({ message: 'Contact deleted successfully' })
// }

// const updateContactData = async (req, res, next) => {
//     const { contactId } = req.params;
//     const result = await contacts.updateContact(contactId, req.body)
//     if (!result) {
//         throw ErrHttp(404, "Not found");
//     }
//     res.status(200).json(result)
// }

// module.exports = {
//     getAllContacts: controlWrapper(getAllContacts),
//     addContactData: controlWrapper(addContactData),
//     deleteById: controlWrapper(deleteById),
//     getContact: controlWrapper(getContact),
//     updateContactData: controlWrapper(updateContactData)
// }


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
