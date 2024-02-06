const catchError = require('../utils/catchError')
const Director = require('../models/Directors');
const Movies = require('../models/Movies');

const getAll = catchError(async (req, res) => {
    const directors = await Director.findAll();

    return res.json(directors)
})


const create = catchError(async (req, res) => {
    const { first_name, last_name, nationality, image, birthday } = req.body
    const newBody = { first_name, last_name, nationality, image, birthday }

    const director = await Director.create(newBody)
    return res.status(201).json(director)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const director = await Director.findByPk(id)

    if(!director) res.send("User not found. 🔍").Status(404)
    return res.json(director)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const director = await Director.destroy({where: {id}})

    if(!director) res.sendStatus(404)
    return res.send('User Deleted. 🗑️').status(204)
})

const update = catchError(async(req, res) => {
    const { id } = req.params
    const { first_name, last_name, nationality, image, birthday} = req.body
    const newBody = {first_name, last_name, nationality, image, birthday}

    const director = await Director.findByPk(id)
    if(!director) return res.sendStatus(404)

    const directorUpdate = await Director.update(
        newBody,
        {
            where: {id}, returning: true
        }
    )
    return res.json(directorUpdate)
})
const setDirectors = catchError(async (req, res) => {
    const { id } = req.params
    const directorResult = await Movies.findByPk(id)

    console.log(req.body)
    
    await directorResult.setDirectors(req.body)

    const directors = await directorResult.getDirectors()

    return res.json(directors)
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update,
    setDirectors
}