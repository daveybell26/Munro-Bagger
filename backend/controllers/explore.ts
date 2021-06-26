import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

export const getExplore = async (req: Request, res: Response) => {
  try {
    const data = await sequelize.models.Picture.findAll({ order: sequelize.random(), limit: 5 });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export const getExploreRandomRoute = async (req: Request, res: Response) => {
  try {
    const data = await sequelize.models.Picture.findAll({
      order: sequelize.random(),
      limit: 10,
      attributes: ['id', 'imageUrl'],
      include: [
        {
          model: sequelize.models.Mountain,
          attributes: ['id', 'name'],
          include: [
            {
              model: sequelize.models.Peak,
              attributes: ['id', 'latitude', 'longitude'],
            },
          ],
        },
      ],
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};
