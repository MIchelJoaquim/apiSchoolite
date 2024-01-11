import { Acronym } from '../value-object/acronym.value-object';
import { Description } from '../value-object/description.value-object';
import { Id } from '../value-object/id.value-object';

export class Subject {
  private _id: Id;
  private _description: Description;
  private _acronym: Acronym;

  private constructor(parameters: {
    id: Id;
    description: Description;
    acronym: Acronym;
  }) {
    this._id = parameters.id;
    this._description = parameters.description;
    this._acronym = parameters.acronym;
  }

  static create(parameters: {
    id: Id;
    description: Description;
    acronym: Acronym;
  }): Subject {
    return new Subject(parameters);
  }

  public get id(): Id {
    return this._id;
  }

  public get description(): Description {
    return this._description;
  }

  public get acronym(): Acronym {
    return this._acronym;
  }
}
