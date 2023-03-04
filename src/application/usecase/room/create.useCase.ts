import { ICreateRoom } from "../../../core/usecase/room/create.usecase.protocol";
import { Acronym } from "../../../core/entity/value-object/acronym.value-object";
import { Description } from "../../../core/entity/value-object/description.value-object";
import { Id } from "../../../core/entity/value-object/id.value-object";
import { ICreateRoomGateway } from "../../getway/room/create.gateway";

export class CreateRoom implements ICreateRoom{

    constructor(private readonly createRoomGateway:ICreateRoomGateway){}

    handle (parameters: { 
        description: Description; 
        acronym: Acronym; 
        capacity: number; 
        schoolId: Id; }): Promise<void>{
             return this.createRoomGateway.handle(parameters)
        } 

}