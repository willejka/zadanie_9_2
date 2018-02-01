//scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

var newName = 'Marian';
var indexOfMarian = allNames.indexOf(newName);

  if (indexOfMarian === -1) {
    allNames.push(newName);
     };
console.log(allNames);