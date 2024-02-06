const catchError = require('../utils/catchError')
const Movie = require('../models/Movies');
const Actors = require('../models/Actors');
const Directors = require('../models/Directors');
const Generes = require('../models/Generes');


const getAll = catchError(async (req, res) => {
    const movies = await Movie.findAll({include: [Actors, Directors, Generes]});

    return res.json(movies)
})


const create = catchError(async (req, res) => {
    const { name, image, synopsis} = req.body
    const newBody = { name, image, synopsis}

    const movie = await Movie.create(newBody)
    return res.status(201).json(movie)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const movie = await Movie.findByPk(id)

    if(!movie) res.send("User not found. 🔍").Status(404)
    return res.json(movie)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const movie = await Movie.destroy({where: {id}})

    if(!movie) res.sendStatus(404)
    return res.send('User Deleted. 🗑️').status(204)
})

const update = catchError(async(req, res) => {
    const { id } = req.params
    const { name, image, sypnosis} = req.body
    const newBody = { name, image, synopsis}

    const movie = await Movie.findByPk(id)
    if(!movie) return res.sendStatus(404)

    const movieUpdate = await Movie.update(
        newBody,
        {
            where: {id}, returning: true
        }
    )
    return res.json(movieUpdate)
})

const setActors = catchError(async (req, res) => {
    const { id } = req.params
    const movieResult = await Movie.findByPk(id)

    console.log(req.body)
    
    await movieResult.setActors(req.body)

    const actors = await movieResult.getActors()

    return res.json(actors)
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update,
    setActors
}