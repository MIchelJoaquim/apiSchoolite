export default class IGenre {
  private _value: string;

  constructor(value: IGenre) {
    this._value = value;
  }

  static create(value: IGenre) {
    if (value !== 'M' && value !== 'F') throw new Error('Invalid Genre value');
    return new Genre(value as unknown as IGenre);
  }

  public get value(): string {
    return this._value;
  }
}
