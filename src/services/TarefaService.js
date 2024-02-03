const database = require('../database/models')

class TarefaService {

    async pegarTarefas() {
        const tarefas = database.tarefa.findAll();
        return tarefas;
    }

    async pegarTarefaPorId(id) {
        const tarefa = database.tarefa.findByPk(id);
        return tarefa;
    }

    async novaTarefa(tarefa) {
        const tarefaCriada = database.tarefa.create(tarefa);
        return tarefaCriada;
    }

}

module.exports = TarefaService
