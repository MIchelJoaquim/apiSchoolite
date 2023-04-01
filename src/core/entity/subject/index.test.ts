import { Acronym } from '../value-object/acronym.value-object';
import { Description } from '../value-object/description.value-object';
import { Id } from '../value-object/id.value-object';
import { Subject } from '.';

describe('Subject', ()=> {
    it('Should create a subject', ()=> {
        const subject = Subject.create({
            acronym:Acronym.create({value: 'MJ'}),
            description:Description.create({value: 'Esta é uma cadeira'}),
            id:Id.create({value: 6})
        });

        expect(subject).toBeInstanceOf(Subject);
    });

    it('Should define correctly object attribute from create', ()=> {
        const acronym = Acronym.create({value: 'MJT'});
        const description = Description.create({value: 'Esta é uma sala'});
        const id = Id.create({value:6});
        const subject = Subject.create({
            acronym,
            description,
            id,
        });

        expect(subject.acronym).toEqual(acronym);
        expect(subject.description).toEqual(description);
        expect(subject.id).toEqual(id);
    });
});