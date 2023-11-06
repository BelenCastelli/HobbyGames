"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, profession, exeprienceYear) {
        this.name = name;
        this.nationality = nationality;
        this.profession = profession;
        this.experienceYear = exeprienceYear;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (newName) {
        this.name = newName;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Person.prototype.getProfession = function () {
        return this.profession;
    };
    Person.prototype.setProfession = function (newProfession) {
        this.profession = newProfession;
    };
    Person.prototype.getExperienceYear = function () {
        return this.experienceYear;
    };
    Person.prototype.setExperienceYear = function (newExperienceYear) {
        this.experienceYear = newExperienceYear;
    };
    Person.prototype.printAll = function () {
        for (var propiedad in this) {
            if (typeof this[propiedad] != "function") {
                {
                    console.log("".concat(propiedad, ": ").concat(this[propiedad]));
                }
            }
        }
    };
    Person.prototype.toString = function () {
        var string = "";
        return string += this.printAll();
    };
    // Crear un método que te devuelva verdadero si la persona pasada como parámetro es 
    // igual a la persona 
    Person.prototype.personTrue = function (newPerson) {
        var resultado;
        if (newPerson.name == this.name && newPerson.nationality == this.nationality &&
            newPerson.profession == this.profession && newPerson.experienceYear == this.experienceYear) {
            resultado = true;
        }
        else {
            resultado = false;
        }
        return resultado;
    };
    return Person;
}());
exports.Person = Person;
