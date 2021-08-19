const Person = require('./clas')


let fruits = ["banana", "apple", "kiwi", "peach"];
fruits.sort();
console.log(fruits);

let person = new Person("Yana", "Bilyk")
console.log(person.fullName());