const contacts = require("./contacts");
const argv = require("yargs").argv;

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
    }
}
invokeAction({action: "list"});
// invokeAction({action: "get", id: "qdggE76Jtbfd9eWJHrssH"});
// invokeAction({action: "remove", id: "_WHBsXNRp9w9I2p7IjZ7o"});
// invokeAction({action: "add", "name": "Djim Caree","email": "lcarre.Cras@nonenimMauris.net","phone": "(972) 451-3098"});
