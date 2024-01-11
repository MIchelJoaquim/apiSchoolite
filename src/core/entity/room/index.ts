import { Acronym } from '../value-object/acronym.value-object';
import { Description } from '../value-object/description.value-object';
import { Id } from '../value-object/id.value-object';

export class Room {
  private _id: Id;
  private _description: Description;
  private _acronym: Acronym;
  private _capacity: number;

  private constructor(parameters: {
    id: Id;
    description: Description;
    acronym: Acronym;
    capacity: number;
  }) {
    this._id = parameters.id;
    this._capacity = parameters.capacity;
    this._description = parameters.description;
    this._acronym = parameters.acronym;
  }

  static create(parameters: {
    id: Id;
    description: Description;
    acronym: Acronym;
    capacity: number;
  }) {
    return new Room(parameters);
  }

  public get description(): Description {
    return this._description;
  }
  public get id(): Id {
    return this._id;
  }

  public get acronym(): Acronym {
    return this._acronym;
  }
  public get capacity(): number {
    return this._capacity;
  }
}
