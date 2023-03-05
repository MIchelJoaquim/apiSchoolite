import Class from '../../../core/entity/class';

export type IGetClassByCode = {
  handle(code: string | number): Promise<Class>;
};
