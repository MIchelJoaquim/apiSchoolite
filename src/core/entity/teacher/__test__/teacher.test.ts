/* eslint-disable linebreak-style */

import Genre from '../../value-object/genre.value-object';
import { Id } from '../../value-object/id.value-object';
import { Name } from '../../value-object/name.value-object';
import { NivelAcademico } from './../../value-object/nivel-academico';
import { Teacher } from './../teacher';

describe('Teacher', () => {
  it('Should create an instance of Teacher', () => {
    const teacher = Teacher.create({
      areaDeFormacao: 'Engenharia',
      genero: Genre.create('M'),
      id: Id.create({ value: 2 }),
      nascimento: new Date('2002-01-20'),
      nivelAcademico: NivelAcademico.create('Mestre'),
      nome: Name.create('Paulo'),
    });
    expect(teacher).toBeInstanceOf(Teacher);
  });

  it('Should define correctily Objects from create', () => {
    const areaDeFormacao = 'Engenharia';
    const genero = Genre.create('M');
    const id = Id.create({ value: 2 });
    const nascimento = new Date('2002-01-20');
    const nivelAcademico = NivelAcademico.create('Mestre');
    const nome = Name.create('Paulo');
    const teacher = Teacher.create({
      areaDeFormacao,
      genero,
      id,
      nascimento,
      nivelAcademico,
      nome,
    });
    expect(teacher.areaDeformacao).toEqual(areaDeFormacao);
    expect(teacher.gender).toEqual(genero);
    expect(teacher.id).toEqual(id);
    expect(teacher.nascimento).toEqual(nascimento);
    expect(teacher.nivelAcademico).toEqual(nivelAcademico);
    expect(teacher.nome).toEqual(nome);
  });
});
