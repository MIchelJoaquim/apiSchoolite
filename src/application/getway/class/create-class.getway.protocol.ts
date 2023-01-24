import { ClassField } from "../../../core/entity/class";

type dto = {
    [ClassField.Capacity]: number,
    [ClassField.Classroom]: number,
    [ClassField.Initials]: string,
    [ClassField.MaxAge]: number,
    [ClassField.StudentQuantity]: number, 
}

export default interface CreateClass {
    handle(data: dto):Promise<void>; 
}