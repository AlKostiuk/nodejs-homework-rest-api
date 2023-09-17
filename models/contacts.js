
const fs = require('node:fs/promises')
const crypto = require("node:crypto");
const path = require('path');
const contactsPath = path.join(__dirname, 'contacts.json');



async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath)
    return JSON.parse(contacts)
  } catch (error) {
    return error;
  }
}



async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactToFind = contacts.find(({ id }) => id === contactId);
  return contactToFind || null;
}

const removeContact = async (contactId) => {
  try {
    const data = await listContacts();
    const contactToFind = data.findIndex(({ id }) => id === contactId);
    if (contactToFind === -1) 
    return null;
    const [updatedContacts] = data.splice(contactToFind, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data, 0, 2));
    return updatedContacts;
  } catch (error) {
    return error;
  };
}

const addContact = async (contact) => {
  try {
    const {name, email, phone} =contact;
    const newContact = {   id: crypto.randomUUID(), name, email, phone };
    const data = await listContacts();
        data.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(data, 0, 2));
    return newContact;
  } catch (error) {
    return error;
  }
}

const updateContact = async (contactId, body) => {  try {
  const data = await listContacts();
  const contactToFind = data.findIndex(({ id }) => id === contactId);
  if (contactToFind === -1) return null;
  data[contactToFind] = { id: contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return data[contactToFind]
} catch (error) {
  return error;
}}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
  }
  