export class Description {
    private _value: string;

    private constructor(parameters: {value: string}) {
        this._value = parameters.value;
    }

    static create(parameters: {value: string}): Description{ 
        const qtdWords = parameters.value.split(' ').length
        if(qtdWords < 3) 
            throw new Error("A descrição deve ter pelo menos 3 palavras");
         
        return new Description(parameters);
    }

    
    public get value() : string {
        return this._value;
    }
    
}