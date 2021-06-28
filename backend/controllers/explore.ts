import { Request, Response } from 'express';
import { Op } from 'sequelize';
import sequelize from '../models/sequelize';

const getExploreUnclimbed = async (req: Request, res: Response) => {
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

export default getExploreUnclimbed;
