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
        await getContactById(contactId);
      } catch (error) {
        console.error("We have problem, try it later");
      }
      break;

    // case "add":
    //   // ... name email phone
    //   break;

    // case "remove":
    //   // ... id
    //   break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// listContacts();
// getContactById(5);
// removeContact(3);
// addContact("mango", "mango@gmail.com", "322 - 22 - 22");
