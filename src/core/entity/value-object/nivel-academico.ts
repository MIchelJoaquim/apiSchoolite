
export type Nivel =  "Técnico Médio" | "Técnico Superior" | "Mestre";


export default class NivelAcademico{
    private _value : string;

    constructor(value:string){
        this._value = value;
    }
    static create(value: Nivel) {
        if(value !== "Técnico Médio" && value !== "Técnico Superior" && value !== "Mestre") throw new Error("Invalid Level value");
        return new NivelAcademico(value as unknown as Nivel);
    }

    
    public get value() : string { 
        return this._value; 
    }


}

