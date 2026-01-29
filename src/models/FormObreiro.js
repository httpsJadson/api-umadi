import Sequelize, { Model } from 'sequelize';

export default class Obreiro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: ['nome precisa ter entre 3 e 255 caracteres'],
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
        },
        congregacao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        whatsapp: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        area: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        batismo: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        disponibilidade_geral: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        equipe: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        habilidade_especial: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        perfil_pessoal: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pontualidade: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        preferencia_trabalho: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        pressao: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        setores_prioridade: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        tempo_igreja: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        voluntario: {
          type: Sequelize.STRING,
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
}
