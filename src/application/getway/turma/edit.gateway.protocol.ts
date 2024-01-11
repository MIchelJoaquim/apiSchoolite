import { Acronym } from '../../../core/entity/value-object/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';
import { Id } from './../../../core/entity/value-object/id.value-object';

export type IEditTurmaGateway = {
  handle: (
    id: Id,
    props: {
      course: string;
      description: Description;
      acronym: Acronym;
    }
  ) => Promise<void>;
};
