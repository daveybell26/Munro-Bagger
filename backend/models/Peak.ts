/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import Mountain from './Mountain';

export default class Peak extends Model implements PeakInterface {
  public latitude!: number;

  public longitude!: number;

  public elevation!: number;

  public readonly mountain?: Mountain[];

  public static associations: {
    mountain: Association<Peak, Mountain>;
  };
}
