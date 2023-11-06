class Person {

    private name: string
    private nationality: string
    private profession: "developer" | "tester" | "manager" | "director" 
    private experienceYear: number

    constructor (name:string, nationality:string, profession:"developer" | "tester" | "manager" | "director" , exeprienceYear:number){
        this.name = name
        this.nationality = nationality
        this.profession = profession
        this.experienceYear = exeprienceYear
    }

    getName():string {
        return this.name
    }
    setName(newName:string): void {
        this.name = newName
    }

    getNationality():string {
        return this.nationality
    }

    setNationality(newNationality:string): void {
        this.nationality = newNationality
    }

    getProfession():"developer" | "tester" | "manager" | "director" {
     return this.profession
    }

    setProfession(newProfession:"developer" | "tester" | "manager" | "director"): void {
        this.profession = newProfession
    }

    getExperienceYear():number {
        return this.experienceYear
    }

    setExperienceYear(newExperienceYear:number): void {
        this.experienceYear = newExperienceYear
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


    // Crear un método que te devuelva verdadero si la persona pasada como parámetro es 
    // igual a la persona 

    public personTrue(newPerson:Person):boolean {
        let resultado: boolean 
      if(newPerson.name == this.name && newPerson.nationality == this.nationality &&
         newPerson.profession == this.profession && newPerson.experienceYear == this.experienceYear){
            resultado = true
         }else {resultado = false}
        return resultado
    }

}

export {Person}