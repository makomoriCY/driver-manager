const express = require('express')
const router = express.Router()
const scheduleModel = require('../model/Schedule')


router.get('/', (req,res) => {
    scheduleModel.find()
    .then(nModel => res.json(nModel))
    .catch(err => res.status(400).json(`error:${err}`))
})

router.post('/', (req,res) => {
    const News = new scheduleModel({
        headline: req.body.headline,
        content: req.body.content
    })

    News
    .save()
    .then(() => res.json('Post Succesfuly!'))
    .catch(err => res.status(400).json(`error:${err}`))

})

router.put('/:id', (req, res) => {
    scheduleModel.findById(req.params.id)
    .then((News) => {
        News.headline =req.body.headline,
        News.content = req.body.content

        News
        .save()
        .then(() => res.json('Update Succesfuly!'))
        .catch(err => res.status(400).json(`error:${err}`))
    })
    .catch(err => res.status(400).json(`error:${err}`))
})

router.get('/:id', (req, res) =>{
    scheduleModel.findById(req.params.id)
    .then(news => res.json(news))
    .catch(err => res.status(400).json(`error:${err}`))

})

router.delete('/:id', (req, res) => {
    scheduleModel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Delete!'))
    .catch(err => res.status(400).json(`error:${err}`))

})

module.exports = router