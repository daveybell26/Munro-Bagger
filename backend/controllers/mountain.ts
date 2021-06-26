import { Request, Response } from 'express';

const getAllMountains = (req: Request, res: Response) => {
  try {
    res.json({});
  } catch (e) {
    res.json({ error: e });
  }
};

export default getAllMountains;
