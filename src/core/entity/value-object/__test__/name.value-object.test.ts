describe('TESTANDO SE O NOME É UMA STRING VAZIA', () => {
    it('Step 1', () => {
        const name = ' ';
        expect(name).toBe(' ');
    });
});

describe('TESTANDO SE O NOME POSSUI PELO MENOS 3 LETRAS', () => {
    it('Step 2', () => {
        const name = ('ABC').trim().length;
        expect(name).toBeLessThanOrEqual(3);
    })
});