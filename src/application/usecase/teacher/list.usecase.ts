import { Teacher } from './../../../core/entity/teacher/teacher';
import { ListTeacherGateway } from './../../getway/teacher/list.gateway.protocol';
import { IListTeacher } from './../../../core/usecase/teacher/list.usecase.protocol';



export class ListTeacher implements IListTeacher {
    constructor(private listTeacherGateway:ListTeacherGateway){

    }
    handle(): Promise<Teacher[]>{
        return this.listTeacherGateway.handle()
    }
    
}  