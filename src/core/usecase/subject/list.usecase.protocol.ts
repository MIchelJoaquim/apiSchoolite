import { Subject } from './../../entity/subject/index';



export interface IListSubject{
    handle:()=> Promise<Subject[]>
}