import { Acronym } from "../../entity/subject/acronym.value-object";
import { Description } from "../../entity/value-object/description.value-object";

export interface ICreateSubject {
    handle:(parameters: {description: Description, acronym: Acronym}) => Promise<void>;
}