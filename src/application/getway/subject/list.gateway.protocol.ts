import { Subject } from '../../../core/entity/subject';

export type IListSubjectGateway = {
  handle: () => Promise<Subject[]>;
};
