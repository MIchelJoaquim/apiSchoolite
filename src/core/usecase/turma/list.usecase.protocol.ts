import { Turma } from '../../entity/turma';

export type IListTurma = {
  handle: () => Promise<Turma[]>;
};