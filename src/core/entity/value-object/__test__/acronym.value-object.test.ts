import { Acronym } from '../acronym.value-object';

describe('Acronym value object', () => {
  const makeSut = (value: string) => {
    return Acronym.create({ value });
  };

  it('Should create a new Acrony', () => {
    const acronym = makeSut('ONU');
    expect(acronym).toBeInstanceOf(Acronym);
  });

  it('Should not create a new Acronym with less than 2 characters', () => {
    try {
      makeSut('O');
    } catch (error: any) {
      expect(error.message).toBe('A sigla deve ter pelo menos 2 caracteres');
    }
  });

  it('Should not create a new Acronym with great than 10 characters', () => {
    try {
      makeSut('OAOAOAOAOAOABBBBBBBBBBBBBBB');
    } catch (error: any) {
      expect(error.message).toBe('A sigla não deve ter mais de 10 caracteres');
    }
  });

  it('should return me rigth value after creation', () => {
    const acronymValue = 'SCD';
    const acronym = makeSut(acronymValue);

    expect(acronym.value).toBe(acronymValue);
  });
});
