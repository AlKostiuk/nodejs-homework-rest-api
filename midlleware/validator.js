const Joi = require('joi');

const ErrHttp = require('../helper/ErrHttp');

const contactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required()
});

const validateContact = (req, res, next) => {
    const { error } = contactSchema.validate(req.body);
    if (error) {
        throw ErrHttp(400, error.message);
    }
    next();
};

const validateContactUpdate = (req, res, next) => {
    const { error } = contactSchema.validate(req.body);
    if (error) {
        throw ErrHttp(400, error.message);
    }
    next();
};

module.exports = {
    validateContact,
    validateContactUpdate
};
