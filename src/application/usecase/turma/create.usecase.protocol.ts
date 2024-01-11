import { Acronym } from './../../../core/entity/value-object/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';
import { ICreateTurma } from './../../../core/usecase/turma/create.usecase.protocol';
import { ICreateTurmaGateway } from './../../getway/turma/create.gateway';
export class CreateTurma implements ICreateTurma {
  constructor(private createTurmaGateway: ICreateTurmaGateway) {}
  handle(parameters: {
    description: Description;
    course: string;
    acronym: Acronym;
  }): Promise<void> {
    return this.createTurmaGateway.handle(parameters);
  }
}
