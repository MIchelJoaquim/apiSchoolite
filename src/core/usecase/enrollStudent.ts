import { IEnrollStudent } from "../../application/getway/class/enroll-student.getway.protocol";
import GetClassByCode from "../../application/getway/class/get-class-by-code.getway.protocol";
import { ICreateStudent, IStudentDTO } from "../../application/getway/student/create-student.getway.protocol";
import IgetStudentsByClass from "../../application/getway/student/get-all-students-by-class.gateway"; 
import { ClassField } from "../entity/class"; 

export interface IEnrollStudentDTO {
    codeClass: string | number,
    student: IStudentDTO,
    codeSchool: string | number
}
export default class EnrollStudent { 

    constructor(
        private getClassByCodeGateway: GetClassByCode, 
        private createStudentGateway: ICreateStudent, 
        private enrollGateway: IEnrollStudent,
        private getAllStudentsByCassGateway: IgetStudentsByClass
        ){ 
    }


    async execute({codeClass, student, codeSchool}: IEnrollStudentDTO){
        const cClass = await this.getClassByCodeGateway.handle(codeClass);
        const qtdStudentsOnClass = (await this.getAllStudentsByCassGateway.handle(codeSchool, codeClass)).length;
        const isFull = qtdStudentsOnClass === cClass.capacity

        if(isFull) throw new Error("The classroom is full");
        if(getAgeFromDate(student.birth_date) >= cClass[ClassField.MaxAge]) throw new Error("this student can't to be enroled because age is higher than permited age for this class")
        
        const newStudent = await this.createStudentGateway.handle(student); 
        this.enrollGateway.handle(cClass.id, newStudent.id, codeSchool)
        return cClass;
    }
}

const getAgeFromDate = (date: Date) =>{
    return new Date(new Date().valueOf() - date.valueOf()).getFullYear() - 1970
}