// pure functions do not change anything. gives you the same return ---- 
/// after you install package you still need to require  it and install node.js via npm install 
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}} Job: {{job}}");
console.log(template({ name: "Nils", job: "Frog" }));

console.log("f")

const contacts = [
    {
        id: 1,
        name: "John",
        phoneNumber: "0847759632",
        email: "john@john.com"
    },
    {
        id: 2,
        name: "Merrie",
        phoneNumber: "0845996111",
        email: "merrie@merrie.com"
    },
    {
        id: 3,
        name: "Adam",
        phoneNumber: "0866592475",
        email: "adam@stamat.com"
    },
    {
        id: 4,
        name: "Peter",
        phoneNumber: "0866592475",
        email: "peter@peter.com"
    },
    {
        id: 5,
        name: "Max",
        phoneNumber: "0866592475",
        email: "max@max.com"
    },
    {
        id: 6,
        name: "David",
        phoneNumber: "0866592475",
        email: "david@david.com"
    }
];