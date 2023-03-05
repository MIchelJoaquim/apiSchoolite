import { Room } from "../../../core/entity/room";
import { IListRoom } from "../../../core/usecase/room/list.usecase.protocol";
import { ListRoomGateway } from "../../getway/room/list.gateway.protocol";

export class ListRoom implements IListRoom {
  constructor(private listRoomGateway:ListRoomGateway){

  }
  handle(): Promise<Room[]>{
      return this.listRoomGateway.handle()
  }
  
}