import { Nivel } from './../../../core/entity/value-object/nivel-academico';
import { IGenre } from './../../../core/entity/value-object/genre.value-object';
import { Id } from './../../../core/entity/value-object/id.value-object';
import { Name } from './../../../core/entity/value-object/name.value-object';
import { ListTeacherGateway } from './../../getway/teacher/list.gateway.protocol';
import { IListTeacher } from './../../../core/usecase/teacher/list.usecase.protocol';



export class ListTeacher implements IListTeacher {
    constructor(private listTeacherGateway:ListTeacherGateway){

    }
    handle(id:Id,props:{
        nome:Name,
        nascimento:Date,
        genero:IGenre,
        nivelAcademico:Nivel,
        areaDeFormacao:string
    }) : Promise<void> {
        return this.listTeacherGateway.handle(id,props)
    }
}  