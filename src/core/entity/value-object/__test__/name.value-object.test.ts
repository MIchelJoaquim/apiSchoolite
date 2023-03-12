import { Name } from '../name.value-object';

describe('Name value object.', () => {
  const Sut = (value:string) => {
    return Name.create(value);
  };

  it('Must not create an empty name', () => {
    expect(()=> Sut(' ')).toThrowError('O Nome não pode ser uma string vazia');
});

it('Must not create a name with less than 3 letters', () => {
  expect(()=> Sut('AA')).toThrowError('O Nome deve possuir pelo menos 3 letras');
});

 it('should return me rigth value after creation', () => {
  const nameValue = 'SCD';
  const name = Sut(nameValue);

  expect(name.value).toBe(nameValue);
}); 
});

  