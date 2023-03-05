import { Acronym } from '../../../core/entity/value-object/acronym.value-object';
import { Description } from './../../../core/entity/value-object/description.value-object';
import { Id } from './../../../core/entity/value-object/id.value-object';

export type IEditSubjectGateway = {
  handle: (
    id: Id,
    props: { description: Description; acronym: Acronym }
  ) => Promise<void>;
};
