export class Name {
  private _value: string;

  private constructor({ value }: { value: string }) {
    this._value = value;
  }

  static create(name: string): Name {
    if (name.trim().length === 0)
      throw new Error('O Nome não pode ser uma string vazia');
    if (name.trim().length < 3)
      throw new Error('O Nome deve possuir pelo menos 3 letras');
    return new Name({ value: name });
  }

  public get value(): string {
    return this._value;
  }
}
