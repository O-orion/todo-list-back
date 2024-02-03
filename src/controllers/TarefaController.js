const TarefaService = require('../services/TarefaService.js');
const tarefaService = new TarefaService();

class TarefaController {

    async pegarTarefas(req, res) {
        try {
            const tarefas = tarefaService.pegarTarefas();
            return res.status(200).json(tarefas)
        } catch (error) {
           return res.status(500).json({ "Mensagem": error }) 
        }
    }

    async novaTarefa(req, res) {

        const tarefa = req.body;

        try {
           const resultado = await tarefaService.novaTarefa(tarefa);
           return res.status(200).json(resultado);

        } catch (error) {
           return res.status(500).json({ "Mensagem": error }) 
        }

    }

}
