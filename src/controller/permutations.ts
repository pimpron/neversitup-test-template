import { Response, Request, NextFunction } from "express";

export const getPermutations = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let { str } = req.body;
    const results: string[] = [];

    const permute = (str: string, l: number, r: number) => {
      if (l === r) {
        if (!results.includes(str)) {
          results.push(str);
        }
      } else {
        for (let i = l; i <= r; i++) {
          str = swap(str, l, i);
          permute(str, l + 1, r);
          str = swap(str, l, i);
        }
      }
    };

    const swap = (str: string, i: number, j: number): string => {
      const arr = str.split("");
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return arr.join("");
    };

    permute(str, 0, str.length - 1);

    res.status(200).send({
      status: 200,
      message: "success",
      data: results,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      status: error.status || 500,
      message: error.message || "something whong",
    });
  }
};
