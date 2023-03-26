const information= require ("./information.js")
const cowsay = require("cowsay");

console.log(cowsay.say({
  text: `Je m'appelle ${information.prenom} ${information.nom} et je suis à ${information.campus}`
}));

console.log(information );