import { Maybe } from './types.d';

type PropertiesType<T> = {
  properties?: T | null;
};

type NodeType<T> = {
  node?: T;
};

type EdgesType<K, T extends NodeType<K>> = {
  edges: Array<NodeType<K> | null>;
};

export const maybeArrToArr = <T>(maybeArr: Array<Maybe<T>>): T[] => {
  return maybeArr.reduce<T[]>((acc, el) => {
    if (!el) {
      return acc;
    }
    return [...acc, el];
  }, []);
};

export const edgesToArr = <K, T>(edgesType?: EdgesType<K, T> | null): NonNullable<K>[] => {
  if (!edgesType) {
    return [];
  }
  return edgesType.edges.reduce<NonNullable<K>[]>((acc, el) => {
    if (!el || !el.node) {
      return acc;
    }
    return [...acc, el.node as NonNullable<K>];
  }, []);
};

export const propertiesArr = <T>(propertiesArr: PropertiesType<T>[]): NonNullable<T>[] => {
  return propertiesArr.reduce<NonNullable<T>[]>((acc, el) => {
    if (!el.properties) {
      return acc;
    }
    return [...acc, el.properties as NonNullable<T>];
  }, []);
};
