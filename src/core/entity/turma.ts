import { Description } from './value-object/description.value-object';
import { Id } from './value-object/id.value-object';

export class Turma {
  private _id: Id;
  private _description: Description;
  private _course: string;
  private _acronym: string;

  constructor(parameters: {
    id: Id;
    description: Description;
    course: string;
    acronym: string;
  }) {
    this._id = parameters.id;
    this._description = parameters.description;
    this._course = parameters.course;
    this._acronym = parameters.acronym;
  }

  //Sets
  public set id(value: Id) {
    this._id = value;
  }

  public get id(): Id {
    return this._id;
  }

  public set description(value: Description) {
    this._description = value;
  }

  public get description(): Description {
    return this._description;
  }

  public set course(value: string) {
    this._course = value;
  }

  public get course(): string {
    return this._course;
  }

  public set acronym(value: string) {
    this._acronym = value;
  }

  public get acronym(): string {
    return this._acronym;
  }
}
