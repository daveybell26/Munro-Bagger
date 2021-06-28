import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const getRandomUserPics = async (req: Request, res: Response) => {
  try {
    const { UserId } = req.body;
    const data = await sequelize.models.Picture.findAll({
      where: { UserId },
      order: sequelize.random(),
      limit: 12,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default getRandomUserPics;
