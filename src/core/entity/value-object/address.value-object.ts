export type NumbersHouse = string | undefined;
const MIN_WORDS = 3;

export class Adress {
  private _province: string;
  private _municipe: string;
  private _district: string;
  private _street: string;
  private _house: NumbersHouse;
  constructor(parameters: {
    province: string;
    municipe: string;
    district: string;
    street: string;
    house: NumbersHouse;
  }) {
    this._province = parameters.province;
    this._municipe = parameters.municipe;
    this._district = parameters.district;
    this._street = parameters.street;
    this._house = parameters.house;
  }

  static create(parameters: {
    province: string;
    municipe: string;
    district: string;
    street: string;
    house: NumbersHouse;
  }): Adress {
    const provinceName = parameters.province.split(' ').length;
    if (provinceName < MIN_WORDS)
      throw new Error(`A provincia deve ter pelo menos ${MIN_WORDS} palavras`);

    const municipeName = parameters.municipe.split(' ').length;
    if (municipeName < MIN_WORDS)
      throw new Error(`O município deve ter pelo menos ${MIN_WORDS} palavras`);

    const districtName = parameters.district.split(' ').length;
    if (districtName < MIN_WORDS)
      throw new Error(`O district deve ter pelo menos ${MIN_WORDS} palavras`);

    const streetName = parameters.street.split(' ').length;
    if (streetName < MIN_WORDS)
      throw new Error(`A rua deve ter pelo menos ${MIN_WORDS} palavras`);

    return new Adress(parameters);
  }
  public get province(): string {
    return this._province;
  }

  public get municipe(): string {
    return this._municipe;
  }

  public get district(): string {
    return this._district;
  }

  public get street(): string {
    return this._street;
  }
  public get house(): NumbersHouse {
    return this._house;
  }
}
