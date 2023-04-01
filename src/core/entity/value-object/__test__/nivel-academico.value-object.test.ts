import { Nivel, NivelAcademico } from '../nivel-academico';

describe('nivel-cademico  valor objecto', () =>{
  const makeSut = (value: string) => {
    return NivelAcademico.create(value as Nivel);
  };

  it(' deve testar o nivel academico', () =>{
    const Nivel = makeSut('Mestre');
    expect(Nivel).toBeInstanceOf(NivelAcademico);

  });

  it('nao deve ter varios niveis', () => {
    expect(()=>makeSut('outro')).toThrowError('Invalid Level value');
  });

  it('deve retornar o valor depois da criacao', () =>{
    const NivelValue= 'Mestre';
    const Nivel = makeSut(NivelValue);
    expect(Nivel.value).toEqual(NivelValue);

  });
  

});