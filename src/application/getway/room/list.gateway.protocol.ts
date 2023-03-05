import { Room } from '../../../core/entity/room';

export type IListRoomGateway = {
  handle: () => Promise<Room[]>;
};
