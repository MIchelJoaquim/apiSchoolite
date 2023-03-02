import { Nivel } from './../../../core/entity/value-object/nivel-academico';
import { IGenre } from './../../../core/entity/value-object/genre.value-object';
import { Name } from './../../../core/entity/value-object/name.value-object';
import { Id } from './../../../core/entity/value-object/id.value-object';
import { EditTeacherGateway } from './../../getway/teacher/edit.gateway.protocol';


export class Edits implements Edits {
    constructor(private editTeacherGateway:EditTeacherGateway){

    }
    handle(id:Id,props:{
        nome:Name,
        nascimento:Date,
        genero:IGenre,
        nivelAcademico:Nivel,
        areaDeFormacao:string
    }) : Promise<void> {
        return this.editTeacherGateway.handle(id,props)
    }

}