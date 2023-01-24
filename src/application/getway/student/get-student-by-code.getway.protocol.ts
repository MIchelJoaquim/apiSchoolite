import Student from "../../../core/entity/student";

export interface IgetStudentByCode {
    handle: (code: string)=>Promise<Student>;
}