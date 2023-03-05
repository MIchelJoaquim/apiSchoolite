
import { Turma } from '../../../core/entity/turma';
import { IListTurma } from '../../../core/usecase/turma/list.usecase.protocol';
import { IListTurmaGateway } from '../../getway/turma/list.gateway.protocol';



export class ListTurma implements IListTurma {
    constructor(private listTurmaGateway:IListTurmaGateway){

    }
    handle(): Promise<Turma[]>{
        return this.listTurmaGateway.handle()
    }
    
}  