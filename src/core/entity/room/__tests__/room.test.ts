import { Acronym } from './../../value-object/acronym.value-object';
import { Description } from './../../value-object/description.value-object';
import { Id } from './../../value-object/id.value-object';
import { Room } from './../index';

describe('Room', () => {
  it('Should create an instance for Room', () => {
    const room = Room.create({
      acronym: Acronym.create({ value: 'ADSD' }),
      capacity: 23,
      description: Description.create({ value: 'A vida é dela' }),
      id: Id.create({ value: 2 }),
    });
    expect(room).toBeInstanceOf(Room);
  });

  it('Should create objects from create', () => {
    const acronym = Acronym.create({ value: 'ADSD' });
    const capacity = 23;
    const description = Description.create({ value: 'A vida é dela' });
    const id = Id.create({ value: 2 });
    const room = Room.create({
      acronym,
      capacity,
      description,
      id,
    });
    expect(room.acronym).toEqual(acronym);
    expect(room.capacity).toEqual(capacity);
    expect(room.description).toEqual(description);
    expect(room.id).toEqual(id);
  });
});
