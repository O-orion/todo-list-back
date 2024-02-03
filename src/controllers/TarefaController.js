const TarefaService = require('../services/TarefaService.js');
const tarefaService = new TarefaService();

class TarefaController {

    async pegarTarefas(req, res) {
        try {
            const tarefas = await tarefaService.pegarTarefas();
            return res.status(200).json(tarefas)
        } catch (error) {
           return res.status(500).json({ "Mensagem": error }) 
        }
    }

    async pegarTarefasConcluidas(req, res) {
        try {
            const tarefasConcluidas = await tarefaService.tarefasConcluidas();
            return res.status(200).json(tarefasConcluidas);
        } catch (error) {
           return res.status(500).json({ "Mensagem": error }) 
        }
    }

    async pegarTarefasPendentes(req, res) {
        try {
            const tarefasPendentes = await tarefaService.tarefasPendentes();
            return res.status(200).json(tarefasPendentes);
        } catch (error) {
            console.log(error)
           return res.status(500).json({ "Mensagem": error }) 
            
        }
    }

    async novaTarefa(req, res) {

        const tarefa = req.body;

        try {
           const resultado = await tarefaService.novaTarefa(tarefa);
           return res.status(201).json(resultado);

        } catch (error) {
           return res.status(500).json({ "Mensagem": error }) 
        }

    }

}

module.exports = TarefaController;
