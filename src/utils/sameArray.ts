export const sameArray = (arr1?: string[], arr2?: string[]) => {
  return (
    !!arr1 &&
    !!arr2 &&
    arr1.length === arr2.length &&
    arr1.every((value, idx) => value === arr2[idx])
  );
};
