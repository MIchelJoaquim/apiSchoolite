import { Capacity } from "../../../core/entity/room/capacity.value-object";
import { Acronym } from "../../../core/entity/value-object/acronym.value-object";
import { Description } from "../../../core/entity/value-object/description.value-object";
import { Id } from "../../../core/entity/value-object/id.value-object";
import { IEditRoom } from "../../../core/usecase/room/edit.usecase.protocol";
import { IEditRoomGateway } from "../../getway/room/edit.gateway.protocol";


export class EditRoom implements IEditRoom {
    constructor(private editRoomGateway:IEditRoomGateway){

    }
    handle(id: Id,props: {
        description: Description,
             acronym: Acronym, 
             capacity: Capacity,
             schoolId: Id
    }) : Promise<void> {
        return this.editRoomGateway.handle(id,props)
    }
}