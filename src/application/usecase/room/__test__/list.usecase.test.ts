import { Acronym } from '../../../../core/entity/value-object/acronym.value-object';
import { Description } from '../../../../core/entity/value-object/description.value-object';
import { Id } from '../../../../core/entity/value-object/id.value-object';
import { ListRoom } from '../list.usecase';
import { Room } from '../../../../core/entity/room';

describe('List all rooms', () => {
  it('should execute corretly and return data', async () => {
    const valueReturned = [
      Room.create({
        acronym: Acronym.create({ value: 'vsvs' }),
        capacity: 3,
        description: Description.create({ value: 'vaa ha aj' }),
        id: Id.create({ value: '3' }),
      }),
      Room.create({
        acronym: Acronym.create({ value: 'vsvs' }),
        capacity: 3,
        description: Description.create({ value: 'vaa ha aj' }),
        id: Id.create({ value: '3' }),
      }),
    ];

    const gateway = {
      handle: jest.fn(() => Promise.resolve(valueReturned)),
    };
    const useCase = new ListRoom(gateway);

    const response = await useCase.handle();

    expect(gateway.handle).toBeCalledTimes(1);
    expect(response).toBe(valueReturned);
  });
});
