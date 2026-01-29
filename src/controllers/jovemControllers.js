import Jovem from '../models/FormJovem';

class JovemController {
  // exibe todos os jovenscadastrados
  async index(req, res) {
    try {
      const jovens = await Jovem.findAll({
        attributes: ['id', 'nome', 'idade', 'congrega_igreja', 'congregacao', 'nome_igreja', 'oficina_segunda', 'oficina_terça', 'oficina_quarta', 'area_desejada', 'campo', 'como_conheceu', 'como_conheceu_outro', 'como_soube', 'como_soube_outro', 'nao_congrega_confirm', 'oficina_dia', 'oficina_tema', 'participa_ministerio'],
        order: [['id', 'DESC']],
      });
      return res.json(jovens);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // cadastra um novo jovem
  async store(req, res) {
    try {
      const jovem = await Jovem.create(req.body);
      return res.json({
        ...jovem,
        insert: true,
      });
    } catch (e) {
      console.log(e);
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // mostra um jovem especifico
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          errors: ['Id not foud'],
        });
      }

      const jovem = await Jovem.findByPk(id, {
        attributes: ['id', 'nome', 'idade', 'congrega_igreja', 'congregacao', 'nome_igreja', 'oficina_segunda', 'oficina_terça', 'oficina_quarta', 'area_desejada', 'campo', 'como_conheceu', 'como_conheceu_outro', 'como_soube', 'como_soube_outro', 'nao_congrega_confirm', 'oficina_dia', 'oficina_tema', 'participa_ministerio'],
      });

      if (!jovem) {
        return res.status(404).json({
          errors: ['Jovem not foud'],
        });
      }

      return res.json(jovem);
    } catch (e) {
      return res.status(404).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // atualiza um jovem
  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          errors: ['Id not found'],
        });
      }

      const jovem = await Jovem.findByPk(id);
      if (!jovem) {
        return res.status(404).json({
          errors: ['Jovem not found'],
        });
      }

      const updatedJovem = await jovem.update(req.body);
      return res.json(updatedJovem);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // deleta um jovem
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(404).json({
          errors: ['Id not found'],
        });
      }

      const jovem = await Jovem.findByPk(id);
      if (!jovem) {
        return res.status(404).json({
          errors: ['Jovem not found'],
        });
      }

      await jovem.destroy();
      return res.json({ deleted: true });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new JovemController();
