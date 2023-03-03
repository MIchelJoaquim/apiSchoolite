const  CAPACIDADE_MINIMA = 1;
const CAPACIDADE_MAXIMA= 35;
export class Capacity{
    private _value: number;

    private constructor(parameters: { value:number}){
        this._value= parameters.value;
    }

    static create( parameters: {value: number}): Capacity {
        if(parameters.value < CAPACIDADE_MINIMA) 
            throw new Error("A Capacidade deve ser um valor positivo")
        
        if(parameters.value > CAPACIDADE_MAXIMA)  
            throw new Error("A sala  nao deve ter mais de 35 alunos ")    

            return new Capacity(parameters)
    }
    
public get value() : number{
    return this._value;
}
   

}