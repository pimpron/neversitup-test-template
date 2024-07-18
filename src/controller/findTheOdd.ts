export const findOdd = (arr: number[]) => {
  try {
    const countMap: { [key: number]: number } = {};

    for (const num of arr) {
      countMap[num] = (countMap[num] || 0) + 1;
    }

    for (const num in countMap) {
      if (countMap[num] % 2 !== 0) {
        return Number(num);
      }
    }
  } catch (error) {
    return undefined;
  }
};
