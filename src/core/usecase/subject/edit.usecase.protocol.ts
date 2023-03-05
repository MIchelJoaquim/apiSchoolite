import { Id } from './../../entity/value-object/id.value-object';
import { Acronym } from './../../entity/value-object/acronym.value-object';
import { Description } from './../../entity/value-object/description.value-object';


export interface IEditSubject{
    handle:(
        id:Id,props:{description: Description, acronym: Acronym}
    ) => Promise<void>
}