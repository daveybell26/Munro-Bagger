/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import User from './User';
import Mountain from './Mountain';

export default class Picture extends Model implements PictureInterface {
  public imageURL!: string;

  public readonly user?: User[];

  public readonly mountain?: Mountain[];

  public static associations: {
    user: Association<Picture, User>;
    mountain: Association<Picture, Mountain>;
  };
}
