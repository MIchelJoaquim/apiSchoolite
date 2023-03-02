
const MIN_WORDS = 3;


export class Description {
    private _value: string;

    private constructor(parameters: {value: string}) {
        this._value = parameters.value;
    }

    static create(parameters: {value: string}): Description{ 
        const qtdWords = parameters.value.split(' ').length;
        if(qtdWords < MIN_WORDS) 
            throw new Error(`A descrição deve ter pelo menos ${MIN_WORDS} palavras`);
         
        return new Description(parameters);
    }

    
    public get value() : string {
        return this._value;
    }
    
}