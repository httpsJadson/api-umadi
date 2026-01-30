import Obreiro from '../models/FormObreiro';

class ObreiroController {
  // exibe todos os obreiros cadastrados
  async index(req, res) {
    try {
      const obreiros = await Obreiro.findAll({
        attributes: ['id', 'nome', 'idade', 'congregacao', 'whatsapp', 'area', 'batismo', 'disponibilidade_geral', 'equipe', 'habilidade_especial', 'perfil_pessoal', 'pontualidade', 'preferencia_trabalho', 'pressao', 'setores_prioridade', 'tempo_igreja', 'voluntario'],
        order: [['id', 'DESC']],
      });

      // Parse setores_prioridade back to array for each obreiro
      const parsedObreiros = obreiros.map((obreiro) => {
        const data = obreiro.toJSON();
        if (data.setores_prioridade) {
          data.setoresPrioridade = JSON.parse(data.setores_prioridade);
        }
        return data;
      });

      return res.json(parsedObreiros);
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // cadastra um novo obreiro
  async store(req, res) {
    try {
      // Handle setores_prioridade as JSON string
      if (req.body.setoresPrioridade && Array.isArray(req.body.setoresPrioridade)) {
        req.body.setores_prioridade = JSON.stringify(req.body.setoresPrioridade);
      }
      const obreiro = await Obreiro.create(req.body);
      return res.json({
        ...obreiro.toJSON(),
        insert: true,
      });
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // mostra um obreiro especifico
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          errors: ['Id not found'],
        });
      }

      const obreiro = await Obreiro.findByPk(id, {
        attributes: ['id', 'nome', 'idade', 'congregacao', 'whatsapp', 'area', 'batismo', 'disponibilidade_geral', 'equipe', 'habilidade_especial', 'perfil_pessoal', 'pontualidade', 'preferencia_trabalho', 'pressao', 'setores_prioridade', 'tempo_igreja', 'voluntario'],
      });
      if (!obreiro) {
        return res.status(404).json({
          errors: ['Obreiro not found'],
        });
      }

      // Parse setores_prioridade back to array
      const obreiroData = obreiro.toJSON();
      if (obreiroData.setores_prioridade) {
        obreiroData.setoresPrioridade = JSON.parse(obreiroData.setores_prioridade);
      }

      return res.json(obreiroData);
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // atualiza um obreiro
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          errors: ['Id not found'],
        });
      }

      const obreiro = await Obreiro.findByPk(id);
      if (!obreiro) {
        return res.status(404).json({
          errors: ['Obreiro not found'],
        });
      }

      // Handle setores_prioridade
      if (req.body.setoresPrioridade && Array.isArray(req.body.setoresPrioridade)) {
        req.body.setores_prioridade = JSON.stringify(req.body.setoresPrioridade);
      }

      const updatedObreiro = await obreiro.update(req.body);
      const updatedData = updatedObreiro.toJSON();
      if (updatedData.setores_prioridade) {
        updatedData.setoresPrioridade = JSON.parse(updatedData.setores_prioridade);
      }

      return res.json(updatedData);
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // deleta um obreiro
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          errors: ['Id not found'],
        });
      }

      const obreiro = await Obreiro.findByPk(id);
      if (!obreiro) {
        return res.status(404).json({
          errors: ['Obreiro not found'],
        });
      }

      await obreiro.destroy();
      return res.json({ deleted: true });
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ObreiroController();
