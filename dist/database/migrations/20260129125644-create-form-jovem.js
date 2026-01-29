"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inscricoes-jovens', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      congrega_igreja: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      concregacao: {
        type: Sequelize.INTEGER,
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('inscricoes_jovens');
  },
};
