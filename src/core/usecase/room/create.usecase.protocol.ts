import { Acronym } from "../../entity/value-object/acronym.value-object"; 
import { Description } from "../../entity/value-object/description.value-object";
import { Capacity } from "../../entity/room/capacity.value-object";
import { Id } from "../../entity/value-object/id.value-object";



export interface ICreateRoom {
    handle:(parameters: {description: Description, acronym: Acronym, capacity: number, schoolId: Id }) => Promise<void>;
}