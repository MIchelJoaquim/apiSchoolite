export class AcademicYear{
  private _value: number;
  
  private constructor(parameters: {
    value: number;
  }){
    this._value = parameters.value;
  }
  
  static create(parameters:{
    value: number;
  }){
    return new AcademicYear(parameters);
  }
  public get value(): number {
    return this._value;
  }
  
  }