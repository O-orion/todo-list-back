const { Router } = require('express');
const TarefaController = require('../controllers/TarefaController.js');

const tarefaController =  new TarefaController();
const router = new Router();

router.get('/tarefas', (req, res) => tarefaController.pegarTarefas(req, res));
router.get('/tarefasConcluidas', (req, res) => tarefaController.pegarTarefasConcluidas(req, res));
router.get('/tarefasPendentes', (req, res) => tarefaController.pegarTarefasPendentes(req, res));
router.post('/tarefa', (req, res) => tarefaController.novaTarefa(req, res))

module.exports = router