"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _FormJovem = require('../models/FormJovem'); var _FormJovem2 = _interopRequireDefault(_FormJovem);
var _FormObreiro = require('../models/FormObreiro'); var _FormObreiro2 = _interopRequireDefault(_FormObreiro);

const models = [_FormJovem2.default, _FormObreiro2.default];
const conection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(conection));
