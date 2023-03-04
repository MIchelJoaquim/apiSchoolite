import { Acronym } from './../../../core/entity/subject/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';



export interface IEditSubjectGateway{
    handle: (parameters: { description: Description; acronym: Acronym; }) => Promise<void>
}