import Student from "./student";
export type Shift = "manha" | "tarde";

export enum ClassField {
    Initials = "initials",
    Classroom = "class_room",
    Students = "students",
    MaxAge = "max_age",
    Shift= "shift",
    Capacity = "capacity",
    StudentQuantity = "student_quantity"
}

export default class Class {
    [ClassField.Initials]: string;
    [ClassField.Classroom]: number;
    [ClassField.Students]: Student[];
    [ClassField.MaxAge]: number;
    [ClassField.Shift]: Shift; 
    [ClassField.Capacity]: number;
    
    constructor(parameters) {
        
    }

    isFull(){
        return this[ClassField.Capacity] === this[ClassField.Students].length
    }


}