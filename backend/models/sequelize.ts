import { DataTypes, Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
import User from './User';
import Status from './Status';
import Mountain from './Mountain';
import Picture from './Picture';
import Peak from './Peak';
import Startpoint from './Startpoint';

dotenv.config();

const sequelize = new Sequelize(
  process.env.POSTGRES_DB || 'database',
  process.env.POSTGRES_USER || 'user',
  process.env.POSTGRES_PASSWORD || 'password',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { sequelize },
);

Status.init(
  {
    whishlist: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    climbed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  }, { sequelize },
);

Mountain.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { sequelize },
);

Picture.init(
  {
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { sequelize },
);

Peak.init(
  {
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    elevation: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { sequelize },
);

Startpoint.init(
  {
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { sequelize },
);

User.hasMany(Status);
Status.belongsTo(User);

User.hasMany(Picture);
Picture.belongsTo(User);

Mountain.hasMany(Status);
Status.belongsTo(Mountain);

Mountain.hasMany(Picture);
Picture.belongsTo(Mountain);

Mountain.hasOne(Peak);

Mountain.hasMany(Startpoint);
Startpoint.belongsTo(Mountain);

export default sequelize;
