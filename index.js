const contacts = require("./contacts");
const {Command} = require("commander");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch (action) {
        case "list" :
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get" :
            const contactById = await contacts.getContactById(id);
            return console.log(contactById);
        case "remove" : 
            const removeContact = await contacts.removeContact(id);
            return console.log(removeContact);
        case "add" : 
        const newContact = await contacts.addContact({name, email, phone})
        return console.log(newContact);
        default:
      console.warn('\x1B[31m Unknown action type!');
    }
}
// invokeAction({action: "list"});
// // invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
// // invokeAction({action: "remove", id: "_WHBsXNRp9w9I2p7IjZ7o"});
// // invokeAction({action: "add", "name": "Djim Caree","email": "lcarre.Cras@nonenimMauris.net","phone": "(972) 451-3098"});

const program = new Command();
program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>','user email')
    .option('-p, --phone <type>','user phone');
program.parse(process.argv);
const argv = program.opts();

invokeAction(argv);
