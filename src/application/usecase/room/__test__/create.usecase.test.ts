import { Acronym } from '../../../../core/entity/value-object/acronym.value-object';
import { CreateRoom } from '../create.useCase';
import { Description } from '../../../../core/entity/value-object/description.value-object';
import { Id } from '../../../../core/entity/value-object/id.value-object';

describe('Create room usecase', () => {
  it('Should execute correctly the create room usecase', () => {
    const gateway = { handle: jest.fn() };
    const usecase = new CreateRoom(gateway);

    const parameters = {
      acronym: Acronym.create({ value: 'ddd' }),
      capacity: 2,
      description: Description.create({ value: 'dckafafa edvcw ds' }),
      schoolId: Id.create({ value: 22 }),
    };
    usecase.handle(parameters);

    expect(gateway.handle).toBeCalledWith(parameters);
    expect(gateway.handle).toBeCalledTimes(1);
  });
});
