import { Room } from "../../entity/room";


export interface IListRoom{
  handle:() => Promise<Room[]>
}