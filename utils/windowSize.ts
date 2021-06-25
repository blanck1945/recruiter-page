export const setHeight = (size: number) => {
  if (size < 1442) {
    return 660;
  }
  return 770;
};

export const setWidth = (size: number) => {
  if (size < 1442) {
    return 700;
  }
  return 770;
};
