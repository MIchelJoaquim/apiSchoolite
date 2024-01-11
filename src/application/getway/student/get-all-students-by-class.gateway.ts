import Student from '../../../core/entity/student';

export type IgetStudentsByClass = {
  handle: (
    codeSchool: string | number,
    codeClass: string | number
  ) => Promise<Student[]>;
};
