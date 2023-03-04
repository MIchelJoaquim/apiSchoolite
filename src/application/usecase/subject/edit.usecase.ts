import { Acronym } from './../../../core/entity/subject/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';
import { IEditSubjectGateway } from './../../getway/subject/edit.gateway.protocol';
import { IEditSubject } from './../../../core/usecase/subject/edit.usecase.protocol';


export class EditSubject implements IEditSubject {
    constructor(private editSubjectgatway:IEditSubjectGateway){

    }

    handle(parameters: { description: Description; acronym: Acronym; }) : Promise<void>{
        return this.editSubjectgatway.handle(parameters)
    }
}