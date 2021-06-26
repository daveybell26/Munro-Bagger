import { Request, Response } from 'express';

const getExplore = (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (e) {
    res.json({ error: e });
  }
};

export default getExplore;
