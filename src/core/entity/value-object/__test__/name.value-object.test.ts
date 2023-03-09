import { Name } from '../name.value-object'

describe('Name value object.', () => {
  const Sut = (value:string) => {
    return Name.create(value);
  }

  it('Must not create an empty name', () => {
    try {
      Sut(' ');
    } catch (error) {
      expect((error as Error).message).toBe(
        'O Nome não pode ser uma string vazia'
      );
    }
});

it('Must not create a name with less than 3 letters', () => {
  try {
    Sut('AA');
  } catch (error) {
    expect((error as Error).message).toBe(
      'O Nome deve possuir pelo menos 3 letras'
    );
  }
});

 it('should return me rigth value after creation', () => {
  const nameValue = 'SCD';
  const name = Sut(nameValue);

  expect(name.value).toEqual(nameValue);
}); 

});

  