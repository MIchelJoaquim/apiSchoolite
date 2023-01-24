import Class from "../../core/entity/class";

export default interface ClassRepository {
    getClass(code: string):Promise<Class>;
    saveClass(): void;
    enrollStudent(codeStudent: string, codeClass):void;
}