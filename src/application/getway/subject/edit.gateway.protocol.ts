import { Id } from './../../../core/entity/value-object/id.value-object';
import { Acronym } from './../../../core/entity/subject/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';



export interface IEditSubjectGateway{
    handle: (id:Id,props: { description: Description; acronym: Acronym; }) => Promise<void>
}