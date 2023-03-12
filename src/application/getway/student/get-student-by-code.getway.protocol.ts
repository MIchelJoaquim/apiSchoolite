import Student from '../../../core/entity/student';

export type IgetStudentByCode = {
  handle: (code: string) => Promise<Student>;
};
