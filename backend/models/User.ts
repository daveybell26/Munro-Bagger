/* eslint-disable import/no-cycle */
import { Model, Association } from 'sequelize';
import Status from './Status';
import Picture from './Picture';

export default class User extends Model implements UserInterface {
  public email!: string;

  public imageUrl!: string;

  public readonly status?: Status[];

  public readonly picture?: Picture[];

  public static associations: {
    status: Association<User, Status>;
    picture: Association<User, Picture>;
  };
}
