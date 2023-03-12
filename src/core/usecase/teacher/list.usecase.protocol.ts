import { Teacher } from './../../entity/teacher/teacher';

export type IListTeacher = {
  handle: () => Promise<Teacher[]>;
};
