import { Nivel } from './../value-object/nivel-academico';
import { Name } from '../value-object/name.value-object';
import { IGenre } from '../value-object/genre.value-object';
import { Id } from '../value-object/id.value-object';




export class Teacher {

    private _id: Id;
    private _nome: Name;
    private _nascimento:Date;
    private _genero: IGenre;
    private _nivelAcademico: Nivel;
    private _areaDeFormacao: string;


    private constructor(parameters:{id:Id , nome:Name,nascimento:Date,genero:IGenre,nivelAcademico:Nivel, areaDeFormacao:string}){
        this._id = parameters.id;
        this._nome = parameters.nome;
        this._nascimento = parameters.nascimento;
        this._genero = parameters.genero;
        this._nivelAcademico = parameters.nivelAcademico;
        this._areaDeFormacao = parameters.areaDeFormacao;
    }

    public set id(value: Id){
         this._id = value;
    }

    public set nome(value: Name ){
        this._nome = value;
   }
   public set nascimento(value: Date ){
    this._nascimento = value;
}
    public set gender(value: IGenre ){
        this._genero= value;
    }
    public set nivel(value: Nivel ){
        this._nivelAcademico = value;
    }
    public set area(value: string ){
        this._areaDeFormacao = value;
    }

    public get id() : Id {
        return this._id;
    }

    public get nome() : Name {
        return this._nome;
    }
    public get nascimento() : Date {
        return this._nascimento;
    }
    public get genero() : IGenre {
        return this._genero;
    }
    public get nivel_academico() : Nivel {
        return this._nivelAcademico;
    }
    public get area_de_formacao() : string {
        return this._areaDeFormacao;
    }

}