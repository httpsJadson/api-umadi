"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Obreiro extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: ['nome precisa ter entre 3 e 255 caracteres'],
            },
          },
        },
        idade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: '',
        },
        congregacao: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        whatsapp: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        area: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        batismo: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        disponibilidade_geral: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        equipe: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        habilidade_especial: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        perfil_pessoal: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        pontualidade: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        preferencia_trabalho: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        pressao: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        setores_prioridade: {
          type: _sequelize2.default.TEXT,
          allowNull: true,
        },
        tempo_igreja: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
        voluntario: {
          type: _sequelize2.default.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'inscricoes-obreiros',
      },
    );
    return this;
  }
} exports.default = Obreiro;
