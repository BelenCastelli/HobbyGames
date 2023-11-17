import { Person } from "./person"
import { Platform } from "./platform"
class Videogame {
    private title:string
    private releaseYear:number
    private developers:Person[]
    private nationality:string
    private director:Person
    private languages:string[]
    private platforms:Platform[]
    private price:number
    private score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    // Como simplificarlo

    constructor(title:string, releaseYear:number, developers:Person [], nationality:string,
                director:Person, languages:string [], platform:Platform[], 
                price:number, score:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10) {

                this.title = title
                this.releaseYear = releaseYear
                this.developers = developers
                this.nationality = nationality
                this.director = director
                this.languages = languages
                this.platforms = platform
                this.price = price
                this.score = score
    }

    public getTitle():string {
        return this.title
    }

    public getReleaseYear():number{
        return this.releaseYear
    }

    public getDevelopers():Person [] {
        return this.developers
    }

    public getNationality():string {
        return this.nationality
    }

    public getDirector():Person {
        return this.director
    }
    
    public getLanguages():string[] {
        return this.languages
    }

    public getPlatform():Platform[] {
        return this.platforms
    }

    public getPrice():number{
        return this.price
    }

    public getScore(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10{
        return this.score
    }

    public setTitle(newTitle:string): void {
        this.title = newTitle
    }

    public setReleaseYear(newReleaseYear:number): void {
        this.releaseYear = newReleaseYear
    }

    public setDevelopers(newDevelopers:Person[]): void {
        this.developers = newDevelopers
    }

    public setNationality(newNationality:string): void {
        this.nationality = newNationality
    }

    public setDirector(newDirector:Person):void {
        this.director = newDirector
    }

    public setLanguages(newLanguages:string[]):void {
        this.languages = newLanguages
    }

    public setPlatform(newPlatform:Platform[]):void {
        this.platforms = newPlatform
    }

    public setPrice(newPrice:number):void {
        this.price = newPrice
    }

    public setScore(newScore: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10):void {
        this.score = newScore
    }
    
// Crear un método que te devuelva verdadero si el videojuego a salido para una
// plataforma determinada.

    public platformExist(platform:Platform):boolean{
        let resultado:boolean = false
        for (let i = 0; i < this.platforms.length; i++) {
        if(this.platforms[i] == platform) { resultado = true
            }
        } return resultado
    } 

    // Crear un método que te devuelva si un desarrollador ha desarrollado el videojuego.

    public developExist(developer:Person):boolean {
        let resultado: boolean = false
       if(developer.getProfession() == "developer"){
        for (let i = 0; i < this.developers.length; i++) {
            if(this.developers[i] == developer){resultado = true
                }
            }
        } return resultado
    }
    // Crear un método que te devuelva si el videojuego ha sido desarrollado en un idioma
    // determinado.

    public languageExist(languages:string):boolean{
        // return this.languages.includes(languages)
        let resultado:boolean = false
        for(let lenguas of this.languages){
        if(lenguas == languages) {resultado = true}
        } return resultado
    }

    public toString():string {
        let string:string = ""
        for(let propiedad in this){
            if(typeof this[propiedad] != "function"){
               string += `${propiedad}: ${this[propiedad]}`
            }
        } return string
    }

    public printAll(): void {
        console.log(this.toString);
    }


}
 export {Videogame}