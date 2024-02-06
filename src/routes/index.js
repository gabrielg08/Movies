const express = require('express');
const actorRouter = require('./actor.route');
const directorRouter = require('./director.route');
const movieRouter = require('./movie.route');
const genereRouter = require('./genere.route');
const router = express.Router();

// colocar las rutas aquí
router.use('/actors', actorRouter)
router.use('/directors', directorRouter)
router.use('/movies', movieRouter)
router.use('/generes', genereRouter)

module.exports = router;