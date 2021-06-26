/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import User from './User';
import Mountain from './Mountain';

export default class Status extends Model implements StatusInterface {
  public whishlist!: boolean;

  public climbed!: boolean;

  public readonly user?: User;

  public readonly mountain?: Mountain;

  public static associations: {
    user: Association<Status, User>;
    mountain: Association<Status, Mountain>;
  };
}
