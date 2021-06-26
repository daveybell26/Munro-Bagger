import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const getExplore = async (req: Request, res: Response) => {
  try {
    const data = await sequelize.models.Picture.findAll({ order: sequelize.random(), limit: 5 });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default getExplore;
