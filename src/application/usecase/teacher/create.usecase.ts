import { IsaveTeacherGateway } from './../../getway/teacher/save.gateway.protocol';
import { Nivel } from './../../../core/entity/value-object/nivel-academico';
import { IGenre } from './../../../core/entity/value-object/genre.value-object';
import { Name } from './../../../core/entity/value-object/name.value-object';


export class CreateTeacher implements CreateTeacher {
    constructor(private saveTeacherGateway:IsaveTeacherGateway){

    }

    handle(parameters: {nome:Name,nascimento:Date,genero:IGenre,nivelAcademico:Nivel,areaDeFormacao:string}):Promise<void>{
        return this.saveTeacherGateway.handle(parameters);
    }
}