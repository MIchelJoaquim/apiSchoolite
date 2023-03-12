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

  public set id(value: Id) {
    this._id = value;
  }

  public set description(value: Description) {
    this._description = value;
  }

  public get description(): Description {
    return this._description;
  }

  public set acronym(value: Acronym) {
    this._acronym = value;
  }

  public get acronym(): Acronym {
    return this._acronym;
  }

  public set capacity(value: number) {
    this._capacity = value;
  }

  public get capacity(): number {
    return this._capacity;
  }
}
