const express = require('express');
const tarefaRoutes = require('./tarefaRouter.js')

module.exports = app => {
    app.use(
        express.json(),
        tarefaRoutes
    )
}
