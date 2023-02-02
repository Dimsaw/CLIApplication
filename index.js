const { Command } = require("commander");
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      try {
        const contacts = await listContacts();
        console.log("This is your contacts");
        console.table(contacts);
      } catch (error) {
        console.error("We have problem, try it later");
      }
      break;

    case "get":
      try {
        const contact = await getContactById(id);
        console.log("Contact found:", contact);
      } catch (error) {
        console.error(error.message);
      }
      break;

    case "add":
      try {
        const newContact = await addContact(name, email, phone);
        console.log(`We add new contact with name: ${name}`);
        console.table(newContact);
      } catch (error) {
        console.error(error.message);
      }
      break;

    case "remove":
      try {
        const contacts = await removeContact(id);
        console.log(`We delete contact with id: ${id}`);
        console.table(contacts);
      } catch (error) {
        console.error(error.message);
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
