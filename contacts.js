const { readFile, writeFile } = require("fs").promises;
const path = require("path");

const contactsPath = path.relative(__dirname, "db/contacts.json");
console.log(contactsPath);

async function listContacts() {
  const data = await readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const data = await listContacts();
  const object = data.find((value) => value.id === contactId.toString());
  console.log(object);
  return object;
}

async function removeContact(contactId) {
  const data = await listContacts();
  const newArray = data.filter((value) => value.id !== contactId.toString());
  await writeFile(contactsPath, JSON.stringify(newArray));
  console.table(newArray);
  return newArray;
}

// function addContact(name, email, phone) {
//   // ...твой код
// }
module.exports = {
  listContacts,
  getContactById,
  removeContact,
};
