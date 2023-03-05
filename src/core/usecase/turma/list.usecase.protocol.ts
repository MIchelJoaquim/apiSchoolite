import { Turma } from '../../entity/turma';

export interface IListTurma{
    handle:() => Promise<Turma[]>
}