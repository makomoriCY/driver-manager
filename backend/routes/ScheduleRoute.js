const express = require('express')
const router = express.Router()
const scheduleModel = require('../model/Schedule')

router.get('/', (req, res) => {
  scheduleModel
    .find()
    .then(data => res.json(data))
    .catch(err => res.status(404).json(`error:${err}`))
})

router.post('/', (req, res) => {
  const schedule = new scheduleModel({
    startDate: req.body.startDate,
    surname: req.body.surname,
    lastname: req.body.lastname,
    department: req.body.department,
    objective: req.body.objective,
    type: req.body.type,
    time: req.body.time,
    place: req.body.place,
    endTime: req.body.endTime,
    startTime: req.body.startTime,
    endDate: req.body.endDate
    
  })

  schedule
    .save()
    .then(() => res.json('Post Succesfuly!'))
    .catch(err => res.status(400).json(`error:${err}`))
})

router.put('/:id', (req, res) => {
  scheduleModel
    .findById(req.params.id)
    .then(data => {
      ;(data.startDate = req.body.startDate),
        (data.surname = req.body.surname),
        (data.lastname = req.body.lastname),
        (data.department = req.body.department),
        (data.objective = req.body.objective),
        (data.type = req.body.type),
        (data.time = req.body.time),
        (data.place = req.body.place)

      data
        .save()
        .then(() => res.json('Update Succesfuly!'))
        .catch(err => res.status(400).json(`error:${err}`))
    })
    .catch(err => res.status(400).json(`error:${err}`))
})

router.get('/:id', (req, res) => {
  scheduleModel
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(`error:${err}`))
})

router.delete('/:id', (req, res) => {
  scheduleModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.json('Delete!'))
    .catch(err => res.status(400).json(`error:${err}`))
})

module.exports = router
