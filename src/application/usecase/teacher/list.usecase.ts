import { Teacher } from './../../../core/entity/teacher/teacher';
import { IListTeacherGateway } from './../../getway/teacher/list.gateway.protocol';
import { IListTeacher } from './../../../core/usecase/teacher/list.usecase.protocol';



export class ListTeacher implements IListTeacher {
    constructor(private listTeacherGateway:IListTeacherGateway){

    }
    handle(): Promise<Teacher[]>{
        return this.listTeacherGateway.handle()
    }
    
}  