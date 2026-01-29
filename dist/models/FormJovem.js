"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Jovem extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
        },
        idade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
        },
        congrega_igreja: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        congregacao: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        nome_igreja: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        oficina_segunda: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        oficina_terça: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        oficina_quarta: {
          type: _sequelize2.default.STRING,
          allowNull: false,
        },
        area_desejada: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        campo: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        como_conheceu: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        como_conheceu_outro: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        como_soube: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        como_soube_outro: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        nao_congrega_confirm: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        oficina_dia: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        oficina_tema: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        participa_ministerio: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'inscricoes-jovens',
      },
    );
    return this;
  }
} exports.default = Jovem;
