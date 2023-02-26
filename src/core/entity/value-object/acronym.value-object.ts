export class Acronym {
    private _value: string;

    private constructor(parameters: {value: string}) {
        this._value = parameters.value;
    }

    static create(parameters: {value: string}): Acronym {
        if(parameters.value.length < 2 ) 
            throw new Error("A sigla deve ter pelo menos 2 caracteres");
        
        if(parameters.value.length > 10)
            throw new Error("A sigla não deve ter mais de 10 caracteres");
        
        const transformAcronymToUpperCase = parameters.value.toUpperCase();
        return new Acronym({value: transformAcronymToUpperCase});
    }

    
    public get value() : string {
        return this._value;
    }
    
}