import Student from "./student";
export type Shift = "manha" | "tarde";

export enum ClassField {
    Id= "_id", 
    Initials = "initials",
    Classroom = "class_room",
    Acronym = "acronym",
    MaxAge = "max_age",
    Shift= "shift",
    Capacity = "capacity",
    StudentQuantity = "student_quantity"
}

interface IProps {
    [ClassField.Id]: string;
    [ClassField.Initials]: string;
    [ClassField.Classroom]: string;
    [ClassField.MaxAge]: number;
    [ClassField.Shift]: Shift;
    [ClassField.Capacity]: number;
}
export default class Class {
    private _id : string | number;
    private _acronym: string;
    private _classRoom: string;
    private _maxAge: number;
    private _shift: Shift;
    private _capacity: number; 
    
    private constructor(parameters: IProps) {
        this._id = parameters[ClassField.Id];
        this._acronym = parameters[ClassField.Acronym];
        this._classRoom = parameters[ClassField.Classroom];
        this._maxAge = parameters[ClassField.MaxAge];
        this._shift = parameters[ClassField.Shift];
        this._capacity = parameters[ClassField.Capacity];
    }

    static create(props: IProps) {

        if(props[ClassField.Capacity] <= 0) throw new Error("[Class] A capacidade deve ser maior ou igual a zero");
        if(props[ClassField.MaxAge] > 40) throw new Error("[Class] A idade máxima é de 39 anos");
        

        return new Class(props)
    }

    
    public get id() : string | number {
        return this._id
    }
    
    
    public get acronym() : string {
        return this._acronym
    }

    
    public get classRoom() : string {
        return this._classRoom
    }
    
    
    public get maxAge() : number {
        return this._maxAge
    }
    
    
    public get shift() : Shift {
        return this._shift
    }
    
    
    public get capacity() : number {
        return this._capacity
    }
    

}