import Student, { StudentField } from '../../../core/entity/student';

export type IStudentDTO = {
  [StudentField.BirthDate]: Date;
};

export type ICreateStudent = {
  handle: (student: IStudentDTO) => Promise<Student>;
};
