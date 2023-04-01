import Genre from '../genre.value-object';
import { IGenre } from './../genre.value-object';

describe('genre value object', () => {
  const makeSut = (value: IGenre) => {
    return Genre.create(value);
  };

  it('should create new Genre', () => {
    const genre = makeSut('M');
    expect(genre).toBeInstanceOf(Genre);
  });

  it('Should not create a Invalid genre ', () => {
    expect(() => makeSut('a' as any)).toThrowError('Invalid Genre value');
  });

  it('Should return a rigth value', () => {
    const genrevalue = 'M';
    const genre = makeSut(genrevalue);
    expect(genre.value).toBe(genrevalue);
  });
});
