import { Request, Response } from 'express';
import sequelize from '../models/sequelize';

export const postClimbed = async (req: Request, res: Response) => {
  try {
    const { MountainId } = req.params;
    const { UserId } = req.query;
    const data = await sequelize.models.Status.create({
      wishlist: false,
      climbed: true,
      UserId,
      MountainId,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export const putClimbed = async (req: Request, res: Response) => {
  try {
    const { id, bool } = req.params;
    const data = await sequelize.models.Status.update({
      climbed: bool,
    }, {
      where: { id },
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export const postWishlist = async (req: Request, res: Response) => {
  try {
    const { MountainId } = req.params;
    const { UserId } = req.query;
    const data = await sequelize.models.Status.create({
      wishlist: true,
      climbed: false,
      UserId,
      MountainId,
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};

export const putWishlist = async (req: Request, res: Response) => {
  try {
    const { id, bool } = req.params;
    const data = await sequelize.models.Status.update({
      wishlist: bool,
    }, {
      where: { id },
    });
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};
