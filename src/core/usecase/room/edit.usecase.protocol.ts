import { Acronym } from '../../entity/value-object/acronym.value-object';
import { Capacity } from '../../entity/room/capacity.value-object';
import { Description } from '../../entity/value-object/description.value-object';
import { Id } from '../../entity/value-object/id.value-object';

export type IEditRoom = {
  handle: (
    id: Id,
    props: {
      description: Description;
      acronym: Acronym;
      capacity: Capacity;
      schoolId: Id;
    }
  ) => Promise<void>;
};
