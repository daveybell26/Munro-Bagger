import { Request, Response } from 'express';
import { Op, QueryTypes } from 'sequelize';
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
    const data = await sequelize.query(
      `WITH latest AS
      ( SELECT "Pictures".*, 
               "Mountains".name,
               Row_number() OVER (partition BY "Pictures"."MountainId" ORDER BY "Pictures"."createdAt" DESC) AS rn
        FROM   "Pictures"
        INNER JOIN "Mountains"
          ON "Mountains".id = "Pictures"."MountainId")
      SELECT "MountainId" as "id",
             "name",
             "imageUrl",
             "createdAt"
      FROM latest
      WHERE rn = 1
      ORDER BY "createdAt" DESC limit 10`,
      { type: QueryTypes.SELECT, model: sequelize.models.Pictures, mapToModel: true },
    );
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};
