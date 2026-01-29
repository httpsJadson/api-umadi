module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'inscricoes-jovens',
      'idade',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    );
  },

  async down() {},
};
