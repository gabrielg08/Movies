const { getAll, create, getOne, destroy, update } = require('../controllers/gener.controller')
const express = require('express')

const genereRouter = express.Router()

genereRouter.route("/")
    .get(getAll)
    .post(create)

genereRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

module.exports = genereRouter