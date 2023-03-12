import { Description } from '../description.value-object';

describe('Description value object', () =>{
  const makeSut = (value: string) => {
    return Description.create({value});
  };

it('Should create a new Description with less than 3 words', () =>{
  const description = makeSut('ONU UNO mnd');
  expect(description).toBeInstanceOf(Description);
});

it('Should not create a new Description with less than 3 words', () => {
  expect(()=>makeSut('teodora teodora')).toThrowError('A descrição deve ter pelo menos 3 palavras');
});

it('should return me rigth value after creation', () => {
  const descriptionValue = 'SCD sdc sdf  dfg';
  const description= makeSut(descriptionValue);

  expect(description.value).toBe(descriptionValue);
});

});