const MIN_CHARACTERS = 2;
const MAX_CHARACTERS = 10;

export class Acronym {
  private _value: string;

  private constructor(parameters: { value: string }) {
    this._value = parameters.value;
  }

  static create(parameters: { value: string }): Acronym {
    if (parameters.value.length < MIN_CHARACTERS)
      throw new Error(
        `A sigla deve ter pelo menos ${MIN_CHARACTERS} caracteres`
      );

    if (parameters.value.length > MAX_CHARACTERS)
      throw new Error(
        `A sigla não deve ter mais de ${MAX_CHARACTERS} caracteres`
      );

    const transformAcronymToUpperCase = parameters.value.toUpperCase();
    return new Acronym({ value: transformAcronymToUpperCase });
  }

  public get value(): string {
    return this._value;
  }
}
