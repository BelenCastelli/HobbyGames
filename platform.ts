class Platform {

    private name:string
    private releaseYear:number
    private company:string
    private nBits:number
    private generation:number
    private hasHD:boolean
    private hDSize:number
    private hasInterntConexion:boolean
    private storageDevice:"cartridge" | "card" | "cd" | "dvd" | "bluray"
    private color:string

    constructor(name:string, releaseYear:number, company:string, nBits:number, generation:number,
        hasHD:boolean, hDSize:number, hasInterntConexion:boolean, 
        storageDevice:"cartridge" | "card" | "cd" | "dvd" | "bluray", color:string){

            this.name = name
            this.releaseYear = releaseYear
            this.company = company
            this.nBits = nBits
            this.generation = generation
            this.hasHD = hasHD
            this.hDSize = hDSize
            this.hasInterntConexion = hasInterntConexion
            this.storageDevice = storageDevice
            this.color = color
        }
    public getName():string {
        return this.name
    } 

    public getReleasaeYear():number {
        return this.releaseYear
    }

    public getCompany():string{
        return this.company
    }

    public getnBits():number{
        return this.nBits
    }

    public getGeneration():number {
        return this.generation
    }

    public getHasHD():boolean{
        return this.hasHD
    }

    public gethDSize():number{
        return this.hDSize
    }

    public getHasInterntConexion():boolean{
        return this.hasInterntConexion
    }

    public getStorageDevice():"cartridge" | "card" | "cd" | "dvd" | "bluray"{
        return this.storageDevice
    }

    public getColor(): string {
        return this.color
    }

    public setName(newName:string): void {
        this.name = newName
    }

    public setRealeaseYear(newReleaseYear:number): void {
        this.releaseYear = newReleaseYear
    }

    public setCompany(newCompany:string): void {
        this.company = newCompany
    }

    public setnBits(newnBits:number): void {
        this.nBits = newnBits
    }

    public setGeneration(newGeneration:number): void {
        this.generation = newGeneration
    }

    public sethasHD(newHasHD:boolean): void {
        this.hasHD = newHasHD
    }

    public sethDSize(newhDSiza:number) : void {
        this.hDSize = newhDSiza
    }

    public setHasInterntConexion(newHasInterntConexion: boolean): void {
        this.hasInterntConexion = newHasInterntConexion
    }

    public setStorageDevide(newStorageDevice:"cartridge" | "card" | "cd" | "dvd" | "bluray"): void {
        this.storageDevice = newStorageDevice
    }

    public setColor(newColor:string): void {
        this.color = newColor
    }

    public platformTrue(newPlatform:Platform):boolean{
        
        for(let propiedad in this && newPlatform) {
            if(typeof this[propiedad] != "function") {
                if(newPlatform[propiedad] !== this[propiedad]){
               return false
                }  
            } 
        } return true
    }

    public printAll ():void {
        for(let propiedad in this){
            if(typeof this[propiedad] != "function"){
                {console.log(`${propiedad}: ${this[propiedad]}`)}
            }   
        }
    }

    public toString():string {
        let string = ""
        return string += this.printAll()
    }
       
}

export {Platform}