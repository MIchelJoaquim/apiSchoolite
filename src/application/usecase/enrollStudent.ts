import {
  ICreateStudent,
  IStudentDTO,
} from '../getway/student/create-student.getway.protocol';
import { IEnrollStudent } from '../getway/class/enroll-student.getway.protocol';
import { IGetClassByCode } from '../getway/class/get-class-by-code.getway.protocol';
import { IgetStudentsByClass } from '../getway/student/get-all-students-by-class.gateway';

export type IEnrollStudentDTO = {
  codeClass: string | number;
  student: IStudentDTO;
  codeSchool: string | number;
};
export default class EnrollStudent {
  constructor(
    private getClassByCodeGateway: IGetClassByCode,
    private createStudentGateway: ICreateStudent,
    private enrollGateway: IEnrollStudent,
    private getAllStudentsByCassGateway: IgetStudentsByClass
  ) {}

  async execute({ codeClass, student, codeSchool }: IEnrollStudentDTO) {
    const cClass = await this.getClassByCodeGateway.handle(codeClass);
    const qtdStudentsOnClass = (
      await this.getAllStudentsByCassGateway.handle(codeSchool, codeClass)
    ).length;
    const isFull = qtdStudentsOnClass === cClass.capacity;

    if (isFull) throw new Error('The classroom is full');
    if (getAgeFromDate(student.birth_date) >= cClass.maxAge)
      throw new Error(
        // eslint-disable-next-line quotes
        "this student can't to be enroled because age is higher than permited age for this class"
      );

    const newStudent = await this.createStudentGateway.handle(student);
    this.enrollGateway.handle(cClass.id, newStudent.id, codeSchool);
    return cClass;
  }
}

const getAgeFromDate = (date: Date) => {
  return new Date(new Date().valueOf() - date.valueOf()).getFullYear() - 1970;
};
