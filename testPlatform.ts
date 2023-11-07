import { Person } from "./person";
import { Platform } from "./platform";


let person = new Person("Carlos", "española", "developer", 4)
let person2 = new Person("Laura", "española", "director", 7)
let person3 = new Person("Javier", "española", "tester", 5)
let person4 = new Person("Paula", "argentina", "manager", 1)
let person5 = new Person("Paula", "argentina", "manager", 1)

let platform = new Platform("PlayStation4",2013, "Sony Interactive Entertaiment", 
                            64, 8, true, 500, true, "cd", "black")
let platform2 = new Platform("Xbox One X", 2019, "Microsoft", 64, 9, true, 1000, true,"cd", "black" )

console.log(platform.printAll());
console.log(platform.toString());
console.log(platform.platformTrue(platform2));
console.log(platform.platformTrue(platform));
console.log(platform2.platformTrue(platform2));




