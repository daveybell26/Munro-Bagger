import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const postPicture = async (req: Request, res: Response) => {
  try {
    const { imageUrl } = req.body;
    const { UserId, MountainId } = req.params;
    const data = await sequelize.models.Picture.create({
      imageUrl,
      UserId,
      MountainId,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default postPicture;
