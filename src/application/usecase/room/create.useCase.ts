import { Acronym } from '../../../core/entity/value-object/acronym.value-object';
import { Description } from '../../../core/entity/value-object/description.value-object';
import { ICreateRoom } from '../../../core/usecase/room/create.usecase.protocol';
import { ICreateRoomGateway } from '../../getway/room/create.gateway';
import { Id } from '../../../core/entity/value-object/id.value-object';

export class CreateRoom implements ICreateRoom {
  constructor(private readonly createRoomGateway: ICreateRoomGateway) {}

  handle(parameters: {
    description: Description;
    acronym: Acronym;
    capacity: number;
    schoolId: Id;
  }): Promise<void> {
    return this.createRoomGateway.handle(parameters);
  }
}
