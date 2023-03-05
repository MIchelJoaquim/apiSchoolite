import { Teacher } from './../../../core/entity/teacher/teacher';

export type IListTeacherGateway = {
  handle: () => Promise<Teacher[]>;
};
