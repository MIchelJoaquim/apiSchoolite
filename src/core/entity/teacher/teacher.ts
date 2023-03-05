import { IGenre } from '../value-object/genre.value-object';
import { Id } from '../value-object/id.value-object';
import { Name } from '../value-object/name.value-object';
import { Nivel } from './../value-object/nivel-academico';

export class Teacher {
  private _id: Id;
  private _nome: Name;
  private _nascimento: Date;
  private _genero: IGenre;
  private _nivelAcademico: Nivel;
  private _areaDeFormacao: string;

  private constructor(parameters: {
    id: Id;
    nome: Name;
    nascimento: Date;
    genero: IGenre;
    nivelAcademico: Nivel;
    areaDeFormacao: string;
  }) {
    this._id = parameters.id;
    this._nome = parameters.nome;
    this._nascimento = parameters.nascimento;
    this._genero = parameters.genero;
    this._nivelAcademico = parameters.nivelAcademico;
    this._areaDeFormacao = parameters.areaDeFormacao;
  }

  public set id(value: Id) {
    this._id = value;
  }

  public get id(): Id {
    return this._id;
  }

  public set nome(value: Name) {
    this._nome = value;
  }

  public get nome(): Name {
    return this._nome;
  }

  public set nascimento(value: Date) {
    this._nascimento = value;
  }

  public get nascimento(): Date {
    return this._nascimento;
  }

  public set gender(value: IGenre) {
    this._genero = value;
  }

  public get gender(): IGenre {
    return this._genero;
  }

  public set nivelAcademico(value: Nivel) {
    this._nivelAcademico = value;
  }

  public get nivelAcademico(): Nivel {
    return this._nivelAcademico;
  }

  public set areaDeFormacao(value: string) {
    this._areaDeFormacao = value;
  }

  public get areaDeformacao(): string {
    return this._areaDeFormacao;
  }
}
