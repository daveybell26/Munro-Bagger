import { Request, Response } from 'express';
import { Op } from 'sequelize';
import sequelize from '../models/sequelize';

export const getExploreUnclimbed = async (req: Request, res: Response) => {
  try {
    const { UserId } = req.body;
    const data = await sequelize.models.Mountain.findAll({
      attributes: ['name', 'imageUrl'],
      include: [{
        attributes: [],
        model: sequelize.models.Status,
        where: { [Op.and]: [{ climbed: false }, { UserId }] },
      }],
      order: sequelize.random(),
      limit: 6,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export const getExploreRandom = async (req: Request, res: Response) => {
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
