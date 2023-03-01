export class Acronym {
    private _value: string;

    private constructor(parameters: {value: string}) {
        this._value = parameters.value;
    }

    static create(parameters: {value: string}): Acronym {
        const _minCharacter = 2;
        const _maxCharacter = 10;
        if(parameters.value.length < _minCharacter ) 
            throw new Error("A sigla deve ter pelo menos 2 caracteres");
        
        if(parameters.value.length > _maxCharacter)
            throw new Error("A sigla não deve ter mais de 10 caracteres");
        
        const transformAcronymToUpperCase = parameters.value.toUpperCase();
        return new Acronym({value: transformAcronymToUpperCase});
    }

    
    public get value() : string {
        return this._value;
    }
    
}