import { Id } from './../../../core/entity/value-object/id.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';
import { IEditSubjectGateway } from './../../getway/subject/edit.gateway.protocol';
import { IEditSubject } from './../../../core/usecase/subject/edit.usecase.protocol';
import { Acronym } from '../../../core/entity/value-object/acronym.value-object';

export class EditSubject implements IEditSubject {
  constructor(private editSubjectgatway: IEditSubjectGateway) {}

  handle(
    id: Id,
    props: { description: Description; acronym: Acronym }
  ): Promise<void> {
    return this.editSubjectgatway.handle(id, props);
  }
}
