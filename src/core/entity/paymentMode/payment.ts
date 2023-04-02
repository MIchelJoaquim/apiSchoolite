export class PeymentMode{
  private _value: string;
  
  private constructor(parameters: {
    value: string;
  }){
    this._value = parameters.value;
  }
  
  static create(parameters:{
    value: string;
  }){
    return new PeymentMode(parameters);
  }
  public get value(): string {
    return this._value;
  }
  
  }