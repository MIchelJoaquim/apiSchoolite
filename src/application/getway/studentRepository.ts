import Student from "../../core/entity/student";

export interface StudentRepository {
    getStudent(code:string):Promise<Student>
}