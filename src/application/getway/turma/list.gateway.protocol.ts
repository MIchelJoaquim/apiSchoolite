import { Turma } from '../../../core/entity/turma';

export interface IListTurmaGateway {
    handle:() => Promise<Turma[]>
}