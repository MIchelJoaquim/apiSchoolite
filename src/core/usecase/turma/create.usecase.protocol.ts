import { Acronym } from '../../entity/value-object/acronym.value-object';
import { Description } from '../../entity/value-object/description.value-object';

export type ICreateTurma = {
  handle: (parameters: {
    description: Description;
    acronym: Acronym;
    course: string;
  }) => Promise<void>;
};
