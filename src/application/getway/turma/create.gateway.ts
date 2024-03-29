import { Acronym } from './../../../core/entity/value-object/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';

export type ICreateTurmaGateway = {
  handle: (parameters: {
    description: Description;
    course: string;
    acronym: Acronym;
  }) => Promise<void>;
};
