import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const login = async (req: Request, res: Response) => {
  try {
    console.log('login controller', req.body);
    const { email } = req.body;
    const data = await sequelize.models.User.findOne({ where: { email } });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default login;
