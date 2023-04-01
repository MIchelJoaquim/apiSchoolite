import { Acronym } from '../value-object/acronym.value-object';
import { Description } from '../value-object/description.value-object';
import { Id } from '../value-object/id.value-object';
import { Turma } from '.';

describe('Turma entity', ()=> {
    it('Should create a subject', ()=>{
        const turma = Turma.create({
            acronym:Acronym.create({value: 'MJ'}),
            description:Description.create({value: 'Esta é uma cadeira'}),
            id:Id.create({value: 6})
    });
});