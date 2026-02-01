import Jovem from '../models/FormJovem';
// import Obreiro from '../models/FormObreiro';

class OficinaController {
  async index(req, res) {
    try {
      const qtdMax = 5;
      const oficinasSegunda = [
        'Evangelismo Pessoal',
        'Projetos que Nascem no Coração de Deus',
        'Discipulado que Funciona',
      ];

      const oficinasTerca = [
        'Chamados para Cuidar',
        'Jovens que Lideram',
        'Louvor e Adoração',
      ];
      const oficinasQuarta = [
        'Chamados para Cuidar (continuação)',
        'Jovens que Lideram (continuação)',
        'Evangelismo Digital',
      ];

      const oficinasChecadas = [];

      for (let i = 0; i < oficinasSegunda.length; i++) {
        const oficina = oficinasSegunda[i];
        const qtd = await Jovem.findAndCountAll({ where: { oficina_segunda: oficina } });
        if (qtd.count > qtdMax) {
          oficinasChecadas.push({ oficina, cheio: true });
        } else {
          oficinasChecadas.push({ oficina, cheio: false });
        }
      }

      for (let i = 0; i < oficinasTerca.length; i++) {
        const oficina = oficinasTerca[i];
        const qtd = await Jovem.findAndCountAll({ where: { oficina_terça: oficina } });
        if (qtd.count > qtdMax) {
          oficinasChecadas.push({ oficina, cheio: true });
        } else {
          oficinasChecadas.push({ oficina, cheio: false });
        }
      }

      for (let i = 0; i < oficinasQuarta.length; i++) {
        const oficina = oficinasQuarta[i];
        const qtd = await Jovem.findAndCountAll({ where: { oficina_quarta: oficina } });
        if (qtd.count > qtdMax) {
          oficinasChecadas.push({ oficina, cheio: true });
        } else {
          oficinasChecadas.push({ oficina, cheio: false });
        }
      }
      console.log(oficinasChecadas);
      return res.json({ oficinasChecadas });
    } catch (e) {
      console.log(e.message);
      return res.status(400).json({
        errors: e.errors ? e.errors.map((err) => err.message) : [e.message],
      });
    }
  }
}

export default new OficinaController();
