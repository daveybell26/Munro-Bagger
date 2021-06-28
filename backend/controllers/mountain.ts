import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

export const getAllMountains = async (req: Request, res: Response) => {
  try {
    const data = await sequelize.models.Mountain.findAll({
      include: [
        {
          attributes: ['latitude', 'longitude', 'elevation'],
          model: sequelize.models.Peak,
        },
        {
          attributes: ['climbed', 'wishlist'],
          model: sequelize.models.Status,
        },
      ],
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export const getMountainById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await sequelize.models.Mountain.findOne({
      where: { id },
      include: [sequelize.models.Peak],
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};
