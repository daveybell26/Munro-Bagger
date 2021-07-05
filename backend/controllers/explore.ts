import { Request, Response } from 'express';
import { QueryTypes } from 'sequelize';
import sequelize from '../models/sequelize';

export const getExploreUnclimbed = async (req: Request, res: Response) => {
  try {
    const { UserId } = req.query;
    const data = await sequelize.models.Mountain.findAll({
      attributes: ['id', 'name', 'imageUrl'],
      include: [{
        attributes: ['climbed'],
        model: sequelize.models.Status,
        where: { UserId },
        required: false,
      }],
      order: sequelize.random(),
    });
    const filteredData = data.filter((mountain: any) => mountain.Statuses[0]?.climbed !== true)
      .slice(0, 6);
    res.json(filteredData);
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
      ORDER BY "createdAt" DESC
      LIMIT 10`,
      { type: QueryTypes.SELECT, model: sequelize.models.Pictures, mapToModel: true },
    );
    res.json(data);
  } catch (e) {
    res.json({ error: e });
  }
};
