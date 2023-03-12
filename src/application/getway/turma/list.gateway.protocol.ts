import { Turma } from '../../../core/entity/turma';

export type IListTurmaGateway = {
  handle: () => Promise<Turma[]>;
};
