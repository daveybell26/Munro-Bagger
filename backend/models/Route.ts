import { Model, Association } from 'sequelize';
import Mountain from './Mountain';

export default class Route extends Model implements RouteInterface {
  public route!: Array<Object>;

  public readonly mountain?: Mountain;

  public static associations: {
    mountain: Association<Route, Mountain>;
  };
}
