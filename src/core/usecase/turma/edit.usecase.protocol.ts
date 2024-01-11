import { Acronym } from '../../entity/value-object/acronym.value-object';
import { Description } from '../../entity/value-object/description.value-object';
import { Id } from '../../entity/value-object/id.value-object';

export type IEditTurma = {
  handle: (
    id: Id,
    props: {
      description: Description;
      acronym: Acronym;
      course: string;
    }
  ) => Promise<void>;
};
