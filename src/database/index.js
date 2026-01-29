import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Jovem from '../models/FormJovem';
import Obreiro from '../models/FormObreiro';

const models = [Jovem, Obreiro];
const conection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conection));
