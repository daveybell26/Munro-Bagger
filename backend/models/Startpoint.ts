/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import Mountain from './Mountain';

export default class Startpoint extends Model implements StartpointInterface {
  public latitude!: number;

  public longitude!: number;

  public readonly mountain?: Mountain;

  public static associations: {
    mountain: Association<Startpoint, Mountain>;
  };
}
