const { readFile, writeFile } = require("fs").promises;
const path = require("path");
const shortid = require("shortid");

const contactsPath = path.relative(__dirname, "db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  const data = await readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const data = await listContacts();
  for (let value of data) {
    if (value.id === contactId.toString()) {
      return value;
    }
  }
  throw new Error(`Contact with id: ${contactId} not found. Try different id.`);
}

async function removeContact(contactId) {
  const data = await listContacts();

  if (data.some((value) => value.id === contactId.toString())) {
    const newArray = data.filter((value) => value.id !== contactId.toString());
    await writeFile(contactsPath, JSON.stringify(newArray));
    return newArray;
  }
  throw new Error(`Contact with id: ${contactId} not found. Try different id.`);
}

async function addContact(name, email, phone) {
  if (!name || !email || !phone) {
    throw new Error("Please fill all fields to add a new contact!");
  }
  const id = shortid.generate();
  const data = await listContacts();
  let newArray = data.concat({ id, name, email, phone });
  await writeFile(contactsPath, JSON.stringify(newArray));
  return newArray;
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
