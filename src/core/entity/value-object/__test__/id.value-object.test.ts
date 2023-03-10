import { Id } from './../id.value-object';


describe('Id value object',()=>{
  afterEach(()=> jest.clearAllMocks());

  const makeSut = (value: string | number) => {
    return Id.create({ value });
  };

  it('Should create a new Id', ()=> {
      const id = makeSut('1');
      expect(id).toBeInstanceOf(Id);
  });

  it('Should not create an id negative', ()=>{
      try {
        makeSut('-1')
      } catch (erro:unknown) {
        expect((erro as Error).message).toBe('O id não deve ser negativo');
      }
  });

  it('Should not have more than 3 characters', () =>{
    try {
      makeSut('abc')
    } catch (error:unknown) {
      expect((error as Error).message).toBe('O id deve ser composto por mais de 3 caracteres')
    }
  });

  it('Should return a rigth value after test',()=>{
      const idValue= '01';
      const id = makeSut(idValue);

      expect(id.value).toBe(idValue);
  });

});