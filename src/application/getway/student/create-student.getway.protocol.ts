import Student, { StudentField } from "../../../core/entity/student";

export interface IStudentDTO {
    [StudentField.BirthDate]: Date
}

export interface ICreateStudent {
    handle: (student: IStudentDTO)=>Promise<Student>
}