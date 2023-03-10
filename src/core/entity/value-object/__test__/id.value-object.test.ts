import { Id } from './../id.value-object';


describe('Id value object',()=>{
  afterEach(()=> jest.clearAllMocks());

  const makeSut = (value: string | number) => {
    return Id.create({ value });
  };

  
  it('Should not create an id negative', ()=>{
    expect(()=> makeSut(-1)).toThrowError("O id não deve ser negativo");
  });


  it('Should not have more than 3 characters', () =>{
    expect(()=>makeSut('abcd')).toThrowError("O id deve ser composto por mais de 3 caracteres")
  });


  it('Should return a rigth value after test',()=>{
      const idValue = 1;
      const id = makeSut(idValue);
      expect(id.value).toBe(idValue);
  });

});