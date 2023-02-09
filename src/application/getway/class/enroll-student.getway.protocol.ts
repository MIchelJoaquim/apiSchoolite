export interface IEnrollStudent {
    handle:(codeClass: string | number, codeStudent: string | number, codeSchool: string | number) => void;
}