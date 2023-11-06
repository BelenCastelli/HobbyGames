import { Person } from "./person";

let person = new Person("Carlos", "española", "developer", 4)
let person2 = new Person("Laura", "española", "director", 7)
let person3 = new Person("Javier", "española", "tester", 5)
let person4 = new Person("Paula", "argentina", "manager", 1)
let person5 = new Person("Paula", "argentina", "manager", 1)

console.log(person.printAll());
console.log(person.toString());
console.log(person.personTrue(person2));
console.log(person4.personTrue(person5));




