import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const getUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const data = await sequelize.models.User.findOne({ where: { email } });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default getUser;
