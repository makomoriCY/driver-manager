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
    department: req.body.department,
    objective: req.body.objective,
    type: req.body.type,
    time: req.body.time,
    place: req.body.place,
    endTime: req.body.endTime,
    startTime: req.body.startTime,
    endDate: req.body.endDate,
    status: "รอดำเนินการ",
    approve: null
    
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
        (data.status = req.body.status),
        (data.approve = req.body.approve)

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
