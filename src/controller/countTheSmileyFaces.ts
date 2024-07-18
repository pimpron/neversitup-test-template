export const countSmileys = (arr: string[]): number => {
  try {
    const smileyPattern = /(:|;)(-|~)?(\)|D)/;

    const count: number = arr.filter((face: string) =>
      smileyPattern.test(face)
    ).length;

    return count;
  } catch (error) {
    return undefined;
  }
};
