import Person from "./Person.js";
import token, { API_KEY, roles } from "./helpers.js";

const person1 = new Person("anna");
console.log(person1.name);
console.log(person1.print());

console.log(token());
console.log(API_KEY);
console.log(roles[0]);
