import { Acronym } from "../value-object/acronym.value-object"; 
import { Description } from "../value-object/description.value-object";
import { Capacity } from "./capacity.value-object";
import { Id } from "../value-object/id.value-object";



export interface ICreateRoom {
    handle:(parameters: {description: Description, acronym: Acronym, capacity: number, schoolId: Id }) => Promise<void>;
}