const { getAll, create, getOne, destroy, update } = require('../controllers/actor.controller')
const express = require('express')

const actorRouter = express.Router()

actorRouter.route("/")
    .get(getAll)
    .post(create)

actorRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

module.exports = actorRouter