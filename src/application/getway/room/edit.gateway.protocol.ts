import { Acronym } from '../../../core/entity/value-object/acronym.value-object';
import { Capacity } from '../../../core/entity/room/capacity.value-object';
import { Description } from '../../../core/entity/value-object/description.value-object';
import { Id } from '../../../core/entity/value-object/id.value-object';

export type IEditRoomGateway = {
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
