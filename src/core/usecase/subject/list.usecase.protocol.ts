import { Subject } from './../../entity/subject/index';

export type IListSubject = {
  handle: () => Promise<Subject[]>;
};
