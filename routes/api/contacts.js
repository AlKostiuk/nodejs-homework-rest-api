// const express = require('express');
// const controller = require('../../controls/controls');
// const router = express.Router()
// const  {validator}  = require('../../midlleware/validator');
// const { emptySchema, schema } = require('../../schema/schema');


// router.get('/', controller.getAllContacts);

// router.get('/:contactId', controller.getContact)

// router.post('/', validator(emptySchema), validator(schema),controller.addContactData)

// router.delete('/:contactId', controller.deleteById)

// router.put('/:contactId', validator(emptySchema), validator(schema), controller.updateContactData)

// module.exports = router


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