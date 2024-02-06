const catchError = require('../utils/catchError')
const Generes = require('../models/Generes');
const Movies = require('../models/Movies');

const getAll = catchError(async (req, res) => {
    const generes = await Generes.findAll();

    return res.json(generes)
})


const create = catchError(async (req, res) => {
    const { name } = req.body
    const newBody = { name }

    const genere = await Generes.create(newBody)
    return res.status(201).json(genere)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const genere = await Generes.findByPk(id)

    if(!genere) res.send("User not found. 🔍").Status(404)
    return res.json(genere)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const genere = await Generes.destroy({where: {id}})

    if(!genere) res.sendStatus(404)
    return res.send('User Deleted. 🗑️').status(204)
})

const update = catchError(async(req, res) => {
    const { id } = req.params
    const { name } = req.body
    const newBody = { name}

    const genere = await Generes.findByPk(id)
    if(!genere) return res.sendStatus(404)

    const genereUpdate = await genere.update(
        newBody,
        {
            where: {id}, returning: true
        }
    )
    return res.json(genereUpdate)
})

const setGeneres = catchError(async (req, res) => {
    const { id } = req.params
    const genereResult = await Movies.findByPk(id)

    console.log(req.body)
    
    await genereResult.setGeneres(req.body)

    const genres = await genereResult.getGeneres()

    return res.json(genres)
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update,
    setGeneres
}