/* eslint-disable linebreak-style */

import Genre from '../value-object/genre.value-object';
import { Id } from '../value-object/id.value-object';
import { Name } from './../value-object/name.value-object';

import { NivelAcademico } from './../value-object/nivel-academico';

export class Teacher {
  private _id: Id;
  private _nome: Name;
  private _nascimento: Date;
  private _genero: Genre;
  private _nivelAcademico: NivelAcademico;
  private _areaDeFormacao: string;

  private constructor(parameters: {
    id: Id;
    nome: Name;
    nascimento: Date;
    genero: Genre;
    nivelAcademico: NivelAcademico;
    areaDeFormacao: string;
  }) {
    this._id = parameters.id;
    this._nome = parameters.nome;
    this._nascimento = parameters.nascimento;
    this._genero = parameters.genero;
    this._nivelAcademico = parameters.nivelAcademico;
    this._areaDeFormacao = parameters.areaDeFormacao;
  }
  static create(parameters: {
    id: Id;
    nome: Name;
    nascimento: Date;
    genero: Genre;
    nivelAcademico: NivelAcademico;
    areaDeFormacao: string;
  }) {
    return new Teacher(parameters);
  }

  public get id(): Id {
    return this._id;
  }
  public get nome(): Name {
    return this._nome;
  }
  public get nascimento(): Date {
    return this._nascimento;
  }

  public get gender(): Genre {
    return this._genero;
  }

  public get nivelAcademico(): NivelAcademico {
    return this._nivelAcademico;
  }

  public get areaDeformacao(): string {
    return this._areaDeFormacao;
  }
}
