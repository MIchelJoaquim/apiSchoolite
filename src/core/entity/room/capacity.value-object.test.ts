import { Capacity } from './capacity.value-object';

describe('Capacity value object.', () => {
  const Sut = (value:number) => {
    return Capacity.create({value});
  };

  it('Capacity the value need to be positive', () => {
    expect(()=> Sut(-8)).toThrowError('A Capacidade deve ser um valor positivo');
});

it('The value capacity can not to be greater than 35 ', () => {
  expect(()=> Sut(36)).toThrowError('A sala  nao deve ter mais de 35 alunos');
});

it('should return me rigth value after creation', () => {
const capacityValue = 35;
const capacity = Sut(capacityValue);

  expect(capacity.value).toBe(capacityValue);
  }); 
});