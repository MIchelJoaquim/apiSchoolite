import { Room } from '../../entity/room';

export type IListRoom = {
  handle: () => Promise<Room[]>;
};
