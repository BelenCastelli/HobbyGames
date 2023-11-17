import { readlinkSync } from "fs";
import { HobbyGame } from "./hobbyGame";
import { Person } from "./person";import { Platform } from "./platform";
import { Videogame } from "./videogame"; 

let person = new Person("Carlos", "española", "developer", 4)
let person2 = new Person("David Kazi", "australiana", "director", 7)
let person3 = new Person("Javier", "española", "tester", 5)
let person4 = new Person("Paula", "argentina", "manager", 1)
let person5 = new Person("Paula", "argentina", "manager", 1)
let person6 = new Person("Carlota", "britanica", "developer", 3)
let person7 = new Person("Jose", "española", "developer", 9)
let platform1 = new Platform("PlayStation4",2013, "Sony Interactive Entertaiment",                            64, 8, true, 500, true, "cd", "black")
let platform2 = new Platform("Xbox One X", 2019, "Microsoft", 64, 9, true, 1000, true,"cd", "black" )
let platform3 = new Platform("PC - Microsoft Windows 10", 2015, "microsoft", 32 || 64, 0 ,true, 0, true, "cd", "black")
let videogame = new Videogame("Hollow Knight", 2017,[person, person6], "australiana", person2, 
                            ["inglés", "español", "francés", "italiano", "japonés"],[platform3,platform2], 25, 9)
let videogame2 = new Videogame("The Witcher III", 2015, [person,person6], "polaca", person2, 
                                ["polaco", "inglés", "español","italiano","japonés","coreano"],[platform1,platform2,platform3],30,9)
let videogame3 = new Videogame("Frozen Flame", 2022, [person6], "británica",person2,["inglés"], [platform3],15,8)

let hobbyGame = new HobbyGame([videogame,videogame2,videogame3])

const readlineSync = require("readline-sync")

let title:string = readlineSync.question("¿Cual es el titulo?")
let releaseYear:number = readlineSync.question("¿Cual es el año de lanzamiento?")
let developers:Person[] = readlineSync.question("¿Quienes son los desarrolladores?")
let nationality:string = readlineSync.question("¿Cual es la nacionalidad?")
let director:Person = readlineSync.question("¿Quien es el director?")
let languages: string [] = readlineSync.question("¿En que idiomas se encuentra?")
let platform: Platform[] = readlineSync.question("¿En que plataformas está disponible?")
let price: number = readlineSync.question("¿Cual es su precio?")
let score:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 = readlineSync.question("¿Cuál es su puntuacion de 0 a 10?")


let newVideogame = new Videogame(title,releaseYear,developers,nationality,director,languages,platform,price,score)
hobbyGame.getVideogames().push(newVideogame)
hobbyGame.escribirEnFicheroJSON("hobbyGameBBDD2")