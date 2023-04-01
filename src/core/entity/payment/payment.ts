import { Id } from '../value-object/id.value-object';
import { PeymentMode } from '../paymentMode/payment';

export class Payment {
    private _date: Date;
    private _formPayment: PeymentMode;
    private _id: Id;
    private _value: number;

    constructor(parameters: {
        id: Id;
        date: Date;
        formPayment: PeymentMode;
        value: number;
      }) {
        this._id = parameters.id;
        this._date = parameters.date;
        this._formPayment = parameters.formPayment;
        this._value = parameters.value;
      }
      public get date(): Date {
        return this._date;
      }
      public get formPayment(): PeymentMode {
        return this._formPayment;
      }
      public get id(): Id{
        return this._id;
      }
      public get value(): number{
        return this._value;
      }
}