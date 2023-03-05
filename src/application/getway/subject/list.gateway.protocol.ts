import { Subject } from "../../../core/entity/subject";


export interface IListSubjectGateway{

    handle:()=> Promise<Subject[]>
    
}