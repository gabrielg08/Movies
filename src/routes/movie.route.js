const { setDirectors } = require('../controllers/director.controller')
const { setGeneres } = require('../controllers/gener.controller')
const { getAll, create, getOne, destroy, update, setActors } = require('../controllers/movie.controller')
const express = require('express')

const movieRouter = express.Router()

movieRouter.route("/")
    .get(getAll)
    .post(create)

movieRouter.route('/:id/generes')
    .post(setGeneres)    

movieRouter.route('/:id/directors')
    .post(setDirectors)    

movieRouter.route('/:id/actors')
    .post(setActors)

movieRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

module.exports = movieRouter