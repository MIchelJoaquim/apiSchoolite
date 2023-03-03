import { Teacher } from './../../entity/teacher/teacher';
import { Nivel } from './../../entity/value-object/nivel-academico';
import { IGenre } from './../../entity/value-object/genre.value-object';
import { Name } from './../../entity/value-object/name.value-object';
import { Id } from './../../entity/value-object/id.value-object';




export interface IListTeacher{
    handle:() => Promise<Teacher[]>
}