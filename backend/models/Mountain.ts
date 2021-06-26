/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import Status from './Status';
import Picture from './Picture';
import Peak from './Peak';
import Startpoint from './Startpoint';

export default class Mountain extends Model implements MountainInterface {
  public name!: string;

  public imageURL!: string;

  public readonly status?: Status[];

  public readonly picture?: Picture[];

  public readonly peaks?: Peak[];

  public readonly startpoint?: Startpoint[];

  public static associations: {
    status: Association<Mountain, Status>;
    picture: Association<Mountain, Picture>;
    peak: Association<Mountain, Peak>;
    startpoint: Association<Mountain, Startpoint>;
  };
}
