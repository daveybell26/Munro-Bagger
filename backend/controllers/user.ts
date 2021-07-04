import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const getRandomUserPics = async (req: Request, res: Response) => {
  try {
    const { UserId } = req.query;
    const data = await sequelize.models.Picture.findAll({
      where: { UserId },
      order: [['createdAt', 'desc']],
      limit: 12,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default getRandomUserPics;
