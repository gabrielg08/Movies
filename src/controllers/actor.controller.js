const catchError = require('../utils/catchError')
const Actor = require('../models/Actors')

const getAll = catchError(async (req, res) => {
    const actors = await Actor.findAll();

    return res.json(actors)
})


const create = catchError(async (req, res) => {
    const { first_name, last_name, nationality, image, birthday } = req.body
    const newBody = { first_name, last_name, nationality, image, birthday }

    const actor = await Actor.create(newBody)
    return res.status(201).json(actor)
})

const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const actor = await Actor.findByPk(id)

    if(!actor) res.send("User not found. 🔍").Status(404)
    return res.json(actor)
})

const destroy = catchError(async(req, res) => {
    const { id } = req.params
    const actor = await Actor.destroy({where: {id}})

    if(!actor) res.sendStatus(404)
    return res.send('User Deleted. 🗑️').status(204)
})

const update = catchError(async(req, res) => {
    const { id } = req.params
    const { first_name, last_name, nationality, image, birthday} = req.body
    const newBody = {first_name, last_name, nationality, image, birthday}

    const actor = await Actor.findByPk(id)
    if(!actor) return res.sendStatus(404)

    const actorUpdate = await Actor.update(
        newBody,
        {
            where: {id}, returning: true
        }
    )
    return res.json(actorUpdate)
})

module.exports = {
    getAll,
    create,
    getOne,
    destroy,
    update
}