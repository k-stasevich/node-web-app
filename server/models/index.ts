const Sequelize = require('sequelize');
const { getEnv } = require('../helpers/envHelper');

const env = getEnv();
const config = require(__dirname + '/../config/config.json')[env];

export let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

export const initDBConnection = () => {
  return sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
      console.log('---------------------------------------------');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
};
