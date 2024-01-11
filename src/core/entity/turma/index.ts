import { Acronym } from '../value-object/acronym.value-object';
import { Description } from '../value-object/description.value-object';
import { Id } from '../value-object/id.value-object';

export class Turma {
  private _id: Id;
  private _description: Description;
  private _course: string;
  private _acronym: Acronym;

  constructor(parameters: {
    id: Id;
    description: Description;
    course: string;
    acronym: Acronym;
  }) {
    this._id = parameters.id;
    this._description = parameters.description;
    this._course = parameters.course;
    this._acronym = parameters.acronym;
  }

  public set id(value: Id) {
    this._id = value;
  }

  public get id(): Id {
    return this._id;
  }

  public get acronym(): Acronym {
    return this._acronym;
  }
  
  public get description(): Description {
    return this._description;
  }

  public get course(): string {
    return this._course;
  }
}
