import { Acronym } from '../../../core/entity/value-object/acronym.value-object';
import { Description } from '../../../core/entity/value-object/description.value-object';
import { Id } from '../../../core/entity/value-object/id.value-object';
import { IEditTurma } from '../../../core/usecase/turma/edit.usecase.protocol';
import { EditTurmaGateway } from '../../getway/turma/edit.gateway.protocol';

export class EditTurma implements IEditTurma{
    constructor(private editTurmaGateway: EditTurmaGateway){
        
    }
    handle(
        id:Id,props: 
        { 
            description: Description; 
            acronym: Acronym; 
            course: string;
         }):Promise<void>{
        return this.editTurmaGateway.handle(id,props);
    };
}