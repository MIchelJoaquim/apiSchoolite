export class Capacity{
    private _value: number;

    private constructor(parameters: { value:number}){
        this._value= parameters.value;
    }

    static create( parameters: {value: number}): Capacity {
        if(parameters.value < 1) 
            throw new Error(" A Capacidade deve ser um valor positivo")
        
        if(parameters.value > 35)  
            throw new Error(" A sala  nao deve ter mais de 35 aluno ")    

            return new Capacity(parameters)
    }
    
public get value() : number{
    return this._value;
}
   

}