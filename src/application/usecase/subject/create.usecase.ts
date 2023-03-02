import { Acronym } from "../../../core/entity/subject/acronym.value-object";
import { Description } from "../../../core/entity/value-object/description.value-object";
import { ICreateSubject } from "../../../core/usecase/subject/create.usecase.protocol";
import { ISaveSubjectGateway } from "../../getway/subject/save.gateway.protocol";

export class CreateSubject implements ICreateSubject{
    constructor(private saveSubjectGateway: ISaveSubjectGateway) {
        
    }
    
    handle(parameters: { description: Description; acronym: Acronym; }) : Promise<void>{
        return this.saveSubjectGateway.handle(parameters)
    };
}