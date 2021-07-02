import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

const postPicture = async (req: Request, res: Response) => {
  try {
    const { UserId, MountainId } = req.params;
    const randomImageId = Math.ceil(Math.random() * 1000);
    const data = await sequelize.models.Picture.create({
      imageUrl: `https://picsum.photos/id/${randomImageId}/200`,
      UserId,
      MountainId,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export default postPicture;
