import Sequelize, { Model } from 'sequelize';

export default class Jovem extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
        },
        congrega_igreja: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        congregacao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nome_igreja: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        oficina_segunda: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        oficina_terça: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        oficina_quarta: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        area_desejada: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        campo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        como_conheceu: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        como_conheceu_outro: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        como_soube: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        como_soube_outro: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        nao_congrega_confirm: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        oficina_dia: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        oficina_tema: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        participa_ministerio: {
          type: Sequelize.STRING,
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
}
