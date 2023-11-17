import { Person } from "./person"
import { Platform } from "./platform"
import { Videogame } from "./videogame"

class HobbyGame {

    private videogames: Videogame[]

    constructor(videogames:Videogame[]) {
        this.videogames = videogames
    }

    public getVideogames():Videogame[] {
        return this.videogames
    }

    public setVideogames(newVideogames:Videogame[]):void{
        this.videogames = newVideogames
    }
    // Crear un método que devuelva el precio total de todos los videojuegos de una plataforma 
    // determinada
    public priceTotalPlatform(platform:Platform):number {
        let resultado:number = 0
        for(let i = 0; i < this.videogames.length; i++){
        if(this.videogames[i].getPlatform().includes(platform)) {
            resultado += this.videogames[i].getPrice()
            }
        } return resultado
    }   

    // Crear un método que devuelva el precio total de los videojuegos de HobbyGame

    public priceTotal():number {
       let resultado:number = 0
       for(let videogame of this.videogames) {
        resultado += videogame.getPrice()
       }
       return resultado
    }

    // Crear un método que devuelva los videojuegos desarrollados en un idioma determinado

    public videogameLanguage(language:string):Videogame[]{
        let resultado:Videogame [] = []
        for(let videogame of this.videogames){
           if (videogame.languageExist(language) == true) {
            resultado.push(videogame)
           }
        } return resultado
    }

    public videogameLanguage2(language:string):Videogame[]{
        let videogamefilter:Videogame[] = this.videogames.filter((videogame) => videogame.languageExist(language))
        return videogamefilter
    }

    // Crear un método que devuelva los videojuegos desarrollados por un desarrollador
    // determinado.

    public videogameDevelop(developer:Person): Videogame[]{
        let videogamefilter:Videogame[] = this.videogames.filter((videogame) => videogame.developExist(developer))
        return videogamefilter
    }
    // Crear un método que te devuelva los videojuegos desarrollados para una determinada 
    // plataforma y en un determinado idioma

    public videogamePlatLang(platform:Platform, language:string): Videogame[]{
        let videogamefilter:Videogame[] = this.videogames.filter((videogame) => 
        videogame.platformExist(platform) && videogame.languageExist(language))
        return videogamefilter
    }

    // Crear un método que devuelva todos los videojuegos cuya nota sea mayor o igual a 5

    public videogameScore():Videogame[]{
        let videogamefilter:Videogame[] = this.videogames.filter((videojuego) =>
        videojuego.getScore() >= 5)
        return videogamefilter
    }

    public JSONstring(): string{
        return JSON.stringify(this.videogames);
    }

    public escribirEnFicheroJSON(nombreFichero: string){
        const fs = require('fs');
        fs.writeFileSync(nombreFichero, this.JSONstring());
    }
    
    public getInstance(nombreFichero:string): HobbyGame {
        const fs = require('fs');
        let data = JSON.parse(fs.readFileSync(nombreFichero, 'utf-8'));
            return new HobbyGame(data);
    }
}

export {HobbyGame}





