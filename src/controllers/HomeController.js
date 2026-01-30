import Jovem from '../models/FormJovem';
import Obreiro from '../models/FormObreiro';

class HomeController {
  async index(req, res) {
    try {
      const jovens = await Jovem.findAll({
        attributes: ['id', 'nome', 'idade', 'congrega_igreja', 'congregacao', 'nome_igreja', 'oficina_segunda', 'oficina_terça', 'oficina_quarta', 'area_desejada', 'campo', 'como_conheceu', 'como_conheceu_outro', 'como_soube', 'como_soube_outro', 'nao_congrega_confirm', 'oficina_dia', 'oficina_tema', 'participa_ministerio'],
        order: [['id', 'DESC']],
      });
      const obreirosRaw = await Obreiro.findAll({
        attributes: ['id', 'nome', 'idade', 'congregacao', 'whatsapp', 'area', 'batismo', 'disponibilidade_geral', 'equipe', 'habilidade_especial', 'perfil_pessoal', 'pontualidade', 'preferencia_trabalho', 'pressao', 'setores_prioridade', 'tempo_igreja', 'voluntario'],
        order: [['id', 'DESC']],
      });

      // Parse setores_prioridade back to array for each obreiro
      const obreiros = obreirosRaw.map((obreiro) => {
        const data = obreiro.toJSON();
        if (data.setores_prioridade) {
          data.setoresPrioridade = JSON.parse(data.setores_prioridade);
        }
        return data;
      });

      const allResults = {
        jovens,
        obreiros,
      };
      return res.json(allResults);
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new HomeController();
