/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import Status from './Status';
import Picture from './Picture';
import Peak from './Peak';
import Startpoint from './Startpoint';
import Route from './Route';

export default class Mountain extends Model implements MountainInterface {
  public id!: number;
  
  public name!: string;

  public imageUrl!: string;

  public readonly status?: Status[];

  public readonly picture?: Picture[];

  public readonly peaks?: Peak;

  public readonly startpoint?: Startpoint[];

  public readonly route?: Route[];

  public static associations: {
    status: Association<Mountain, Status>;
    picture: Association<Mountain, Picture>;
    peak: Association<Mountain, Peak>;
    startpoint: Association<Mountain, Startpoint>;
    route: Association<Mountain, Route>;
  };
}
