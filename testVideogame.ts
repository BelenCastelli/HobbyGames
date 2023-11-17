import { Person } from "./person";
import { Platform } from "./platform";
import { Videogame } from "./videogame";

let person = new Person("Carlos", "española", "developer", 4)
let person2 = new Person("David Kazi", "australiana", "director", 7)
let person3 = new Person("Javier", "española", "tester", 5)
let person4 = new Person("Paula", "argentina", "manager", 1)
let person5 = new Person("Paula", "argentina", "manager", 1)
let person6 = new Person("Carlota", "britanica", "developer", 3)
let person7 = new Person("Jose", "española", "developer", 9)

let platform = new Platform("PlayStation4",2013, "Sony Interactive Entertaiment", 
                            64, 8, true, 500, true, "cd", "black")
let platform2 = new Platform("Xbox One X", 2019, "Microsoft", 64, 9, true, 1000, true,"cd", "black" )

let videogame = new Videogame("Hollow Knight", 2017,[person, person6], "australiana", person2, ["inglés", "español", "francés", "italiano", "japonés"],[platform], 25, 9 )

// console.log(videogame.platformExist(platform2));
// console.log(videogame.platformExist(platform));

// console.log(videogame.developExist(person6));
// console.log(videogame.developExist(person2));
// console.log(videogame.developExist(person7));

// console.log(videogame.languageExist("ruso"));
// console.log(videogame.languageExist("español"));
console.log(videogame.toString());
videogame.printAll();







