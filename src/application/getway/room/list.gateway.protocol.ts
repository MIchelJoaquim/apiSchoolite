import { Room } from "../../../core/entity/room";

export interface IListRoomGateway {
  handle:() => Promise<Room[]>
}