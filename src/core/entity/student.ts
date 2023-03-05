import Genre, { IGenre } from './value-object/genre.value-object';
import { Name } from './value-object/name.value-object';

export enum StudentField {
  Id = 'id',
  Name = 'name',
  BirthDate = 'birth_date',
  Genre = 'genre',
}

interface IStudentProps {
  id: string | number;
  name: Name;
  birthDate: Date;
  genre: Genre;
}

interface IStudentDTO {
  id: string | number;
  name: string;
  birthDate: string;
  genre: string;
}

export default class Student {
  private _id: string | number;
  private _name: Name;
  private _birthDate: Date;
  private _genre: Genre;

  private constructor(props: IStudentProps) {
    this._id = props.id;
    this._name = props.name;
    this._birthDate = props.birthDate;
    this._genre = props.genre;
  }

  static create(props: IStudentDTO): Student {
    return new Student({
      id: props.id,
      birthDate: new Date(props.birthDate),
      genre: Genre.create(props.genre as IGenre),
      name: Name.create(props.name),
    });
  }

  getAge(): number {
    return (
      new Date(
        new Date().valueOf() - new Date(this._birthDate).valueOf()
      ).getFullYear() - 1970
    );
  }

  public get id(): string | number {
    return this._id;
  }

  public get name(): Name {
    return this._name;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public get genre(): Genre {
    return this._genre;
  }
}
