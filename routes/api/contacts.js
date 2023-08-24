


const express = require('express');
const router = express.Router();
const contactsController = require('../../controls/controls');
const validatorMiddleware = require('../../midlleware/validator');


router.get('/', contactsController.getAllContacts);


router.get('/:id', contactsController.getContactById);


router.post('/', validatorMiddleware.validateContact, contactsController.addContact);


router.delete('/:id', contactsController.removeContact);


router.put('/:id', validatorMiddleware.validateContactUpdate, contactsController.updateContact);

module.exports = router;