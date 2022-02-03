export enum SchoolField {
    Name = "name", 
    Number = "number"
}

export default class SchoolFied {
    [SchoolField.Name]: string;
    [SchoolField.Number]: number;

    constructor(){}
}