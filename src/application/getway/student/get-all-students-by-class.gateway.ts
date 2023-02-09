import Student from "../../../core/entity/student";

export default interface IgetStudentsByClass {
    handle:(codeSchool: string | number, codeClass: string | number)=>Promise<Student[]>
}