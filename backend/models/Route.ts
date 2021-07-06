import { Model, Association } from 'sequelize';
// eslint-disable-next-line import/no-cycle
import Mountain from './Mountain';

export default class Route extends Model implements RouteInterface {
  public latitude!: number;

  public longitude!: number;

  public readonly mountain?: Mountain;

  public static associations: {
    mountain: Association<Route, Mountain>;
  };
}
