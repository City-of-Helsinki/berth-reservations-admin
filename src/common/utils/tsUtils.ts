export type FalsyType = false | null | undefined | '' | 0;

export const typedBoolean = <ValueType>(value: ValueType): value is Exclude<ValueType, FalsyType> => {
  return Boolean(value);
};

export const assertUnreachable = (param: never, message?: string): never => {
  throw new Error(`${message || 'Unknown parameter'}: ${param}`);
};
