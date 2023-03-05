import { Room } from "../../../core/entity/room";

export interface ListRoomGateway {
  handle:() => Promise<Room[]>
}