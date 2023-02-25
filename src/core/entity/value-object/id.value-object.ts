export class Id {
    private _value: string | number;

    private constructor(parameters: { value: string | number}) {
        this._value = parameters.value
    } 

    static create(parameters: {value: string | number}): Id {
        if(typeof parameters.value === 'number' && parameters.value < 0) 
            throw new Error("O id não deve ser negativo");
        
        if(typeof parameters.value === 'string' && parameters.value.length > 3)
            throw new Error("O id deve ser composto por mais de 3 caracteres");
        
        return new Id(parameters);
    }

    public get value() : string | number {
        return this._value;
    }
    
}