import { Nivel } from './../../entity/value-object/nivel-academico';
import { IGenre } from './../../entity/value-object/genre.value-object';
import { Name } from './../../entity/value-object/name.value-object';
import { Id } from './../../entity/value-object/id.value-object';



export interface IEditTeacher{
    handle(id:Id,props:{
        nome:Name,
        nascimento:Date,
        genero:IGenre,
        nivelAcademico:Nivel,
        areaDeFormacao:string
    }) : Promise<void>
}