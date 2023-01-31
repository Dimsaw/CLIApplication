const fs = require("fs");
const path = require("path");

// console.log(path.resolve("./db/contacts.json"));

const contactsPath = path.relative(__dirname, "db/contacts.json");
console.log(contactsPath);

// console.log(contactsPath);
// // TODO: задокументировать каждую функцию

let list = fs.readFileSync(contactsPath);
let data = JSON.parse(list);
console.table(data);
console.log(data);

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
