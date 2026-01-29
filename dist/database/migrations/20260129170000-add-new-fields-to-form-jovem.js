"use strict";module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('inscricoes-jovens', 'area_desejada', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'campo', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'como_conheceu', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'como_conheceu_outro', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'como_soube', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'como_soube_outro', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'nao_congrega_confirm', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'oficina_dia', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'oficina_tema', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('inscricoes-jovens', 'participa_ministerio', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // Also change concregacao to congregacao
    await queryInterface.renameColumn('inscricoes-jovens', 'concregacao', 'congregacao');
    await queryInterface.changeColumn('inscricoes-jovens', 'congregacao', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('inscricoes-jovens', 'area_desejada');
    await queryInterface.removeColumn('inscricoes-jovens', 'campo');
    await queryInterface.removeColumn('inscricoes-jovens', 'como_conheceu');
    await queryInterface.removeColumn('inscricoes-jovens', 'como_conheceu_outro');
    await queryInterface.removeColumn('inscricoes-jovens', 'como_soube');
    await queryInterface.removeColumn('inscricoes-jovens', 'como_soube_outro');
    await queryInterface.removeColumn('inscricoes-jovens', 'nao_congrega_confirm');
    await queryInterface.removeColumn('inscricoes-jovens', 'oficina_dia');
    await queryInterface.removeColumn('inscricoes-jovens', 'oficina_tema');
    await queryInterface.removeColumn('inscricoes-jovens', 'participa_ministerio');
    // Rename back
    await queryInterface.renameColumn('inscricoes-jovens', 'congregacao', 'concregacao');
    await queryInterface.changeColumn('inscricoes-jovens', 'concregacao', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
