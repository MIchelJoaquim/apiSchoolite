import { IListTeacher } from './../../../core/usecase/teacher/list.usecase.protocol';
import { IListTeacherGateway } from './../../getway/teacher/list.gateway.protocol';
import { Teacher } from './../../../core/entity/teacher/teacher';

export class ListTeacher implements IListTeacher {
  constructor(private listTeacherGateway: IListTeacherGateway) {}
  handle(): Promise<Teacher[]> {
    return this.listTeacherGateway.handle();
  }
}
