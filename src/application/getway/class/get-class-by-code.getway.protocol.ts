import Class from "../../../core/entity/class";


export default interface IGetClassByCode {
    handle(code: string | number):Promise<Class>; 
}