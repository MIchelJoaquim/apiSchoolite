import Class from "../../../core/entity/class";


export default interface GetClassByCode {
    handle(code: string):Promise<void>; 
}