import Genre, { IGenre } from '../genre.value-object';

describe('genre value object', () => {
  const makeSut = (value: IGenre) => {
    return Genre.create(value);
  };

  it('should create new Genre', () => {
    const genre = makeSut('M');
    const genreF = makeSut('F');
    expect(genre).toBeInstanceOf(Genre);
    expect(genreF).toBeInstanceOf(Genre);
  });

  it('Should not create a Invalid genre ', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => makeSut('a' as any)).toThrowError('Invalid Genre value');
  });

  it('Should return a rigth value', () => {
    const genreMale = makeSut('M');
    const genreFemale = makeSut('F');
    expect(genreMale.value).toBe('M');
    expect(genreFemale.value).toBe('F');
  });
});
