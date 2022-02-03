import Student from "../entity/student";

export interface StudentRepository {
    getStudent(code:string):Promise<Student>
}