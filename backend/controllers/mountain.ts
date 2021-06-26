import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const getAllMountains = async (req: Request, res: Response) => {
  try {
    const data = await sequelize.models.Mountain.findAll({
      include: [sequelize.models.Peak],
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

const getMountainById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await sequelize.models.Mountain.findOne({ where: { id } });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export { getAllMountains, getMountainById };
