import { Subject } from '../../../core/entity/subject';
import { IListSubject } from './../../../core/usecase/subject/list.usecase.protocol';
import { IListSubjectGateway } from './../../getway/subject/list.gateway.protocol';



export class LisSubject implements IListSubject {
    constructor(private listSubjectGateway:IListSubjectGateway){

    }
    handle(): Promise<Subject[]>{
        return this.listSubjectGateway.handle()
    }
    
}  