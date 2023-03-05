import { Description } from './../../../core/entity/value-object/description.value-object';
import { Id } from './../../../core/entity/value-object/id.value-object';


export interface EditTurmaGateway{
    handle:(
        id:Id,props:{
            course: string,
            description: Description,
            acronym: string
        }
    )=> Promise<void>
}