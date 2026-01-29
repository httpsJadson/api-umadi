module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inscricoes-obreiros', {
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
        type: Sequelize.INTEGER,
        allowNull: false,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('inscricoes-obreiros');
  },
};
