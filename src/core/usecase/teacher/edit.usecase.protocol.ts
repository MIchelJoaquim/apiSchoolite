import { IGenre } from '../../entity/value-object/genre.value-object';
import { Id } from '../../entity/value-object/id.value-object';
import { Name } from './../../entity/value-object/name.value-object';
import { Nivel } from './../../entity/value-object/nivel-academico';

export type IEditTeacher = {
  handle(
    id: Id,
    props: {
      nome: Name;
      nascimento: Date;
      genero: IGenre;
      nivelAcademico: Nivel;
      areaDeFormacao: string;
    }
  ): Promise<void>;
};
