import { Acronym } from '../../../core/entity/value-object/acronym.value-object';
import { Description } from '../../../core/entity/value-object/description.value-object';

export type ISaveSubjectGateway = {
  handle: (parameters: {
    description: Description;
    acronym: Acronym;
  }) => Promise<void>;
};
