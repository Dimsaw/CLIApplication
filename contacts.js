const fs = require("fs");
const path = require("path");

const contactsPath = path.relative(__dirname, "db/contacts.json");
console.log(contactsPath);

// function listContacts() {
//   let list = fs.readFileSync(contactsPath);
//   let data = JSON.parse(list);
//   console.table(data);
// }

function getContactById(contactId) {
  let list = fs.readFileSync(contactsPath);
  let data = JSON.parse(list);
  for (let value of data) {
    if (Number(value.id) === contactId) {
      console.log("b", value.id);
      console.log(value);
      return value;
    }
  }
  console.log("You are wrong");
}

getContactById(2);

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
// module.exports = listContacts;
