import { IGenre } from '../../../core/entity/value-object/genre.value-object';
import { Id } from '../../../core/entity/value-object/id.value-object';
import { Name } from './../../../core/entity/value-object/name.value-object';
import { Nivel } from './../../../core/entity/value-object/nivel-academico';

export type EditTeacherGateway = {
  handle: (
    id: Id,
    props: {
      nome: Name;
      nascimento: Date;
      genero: IGenre;
      nivelAcademico: Nivel;
      areaDeFormacao: string;
    }
  ) => Promise<void>;
};
