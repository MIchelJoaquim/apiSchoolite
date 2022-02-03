import { ClassField } from "../entity/class";
import { StudentField } from "../entity/student";
import ClassRepository from "../repository/classRepository";
import { StudentRepository } from "../repository/studentRepository";

export default class EnrollStudent {
    classRepository: ClassRepository;
    studentRepository: StudentRepository;

    constructor(classRepository: ClassRepository, studentRepository: StudentRepository){
        this.classRepository = classRepository;
        this.studentRepository = studentRepository;
    }


    async execute(codeClass: string, codeStudent: string) {
        const student = await this.studentRepository.getStudent(codeStudent);
        const cClass = await this.classRepository.getClass(codeClass);
        if(cClass.isFull()) throw new Error("The classroom is full");
        if(student.getAge() >= cClass[ClassField.MaxAge]) throw new Error("this student can't to be enroled because age is higher than permited age for this class")
        cClass[ClassField.Students].push(student);
        return cClass;
    }
}