export type Genero =  "M" | "F";
 

export enum StudentField  {
Name = "name",
BirthDate = "birth_date",
Genre="genre"
}

export default class Student {
    [StudentField.Name]: string;
    [StudentField.BirthDate]: Date;
    [StudentField.Genre]: Genero;

    constructor() {
        
    }

    getAge() : number{
       return new Date(new Date().valueOf() - new Date(this[StudentField.BirthDate]).valueOf()).getFullYear() - 1970
    }
}