'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tarefa.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tarefa',
    tableName: 'tarefas',
    scopes: {
      'tarefasConcluidas': {
        where: {
          status: 'concluido'
        }
      },
      'tarefasPendentes': {
        where: {
          status: 'pendente'
        }
      }
    }
  });
  return tarefa;
};