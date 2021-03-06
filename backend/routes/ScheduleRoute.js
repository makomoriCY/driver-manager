const express = require('express')
const router = express.Router()
const scheduleModel = require('../model/Schedule')
var request = require('request')

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
    status: 'รอดำเนินการ',
    approve: null
  })

  schedule
    .save()
    .then(() => res.json('Save Succesfuly!'))
    .catch(err => res.status(400).json(`error:${err}`))
})

router.put('/:id', (req, res) => {
  scheduleModel
    .findById(req.params.id)
    .then(data => {
      ;(data.status = req.body.status), (data.approve = req.body.approve)

      data
        .save()
        .then(
          sendnotification(
            data.surname,
            data.department,
            data.type,
            data.approve
          )
        )
        .then(() => res.json('Succesfuly!'))
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
  console.log('body', req.body.reason)
  scheduleModel
    .findByIdAndDelete(req.params.id)
    .then((data) => {sendRejectNoti(data.surname, req.body.reason)})
    .then(() => res.json('Delete!')) 
    .catch(err => res.status(400).json(`error:${err}`))
})

function sendnotification (name, department, type, approve) {
  var sendData = `ชื่อผู้จอง : ${name}\n แผนก: ${department}\n ประเภทรถ: ${type}\n คนอนุมัติ: ${approve}\n ตรวจสอบสถานะรายการจอง: https://driver-project-40da5.web.app/bookingReport `
  var token = 'rZg0KIwbrn3aaOGzEZSN6paRfXL2FpJXMOe6Ad4qG2a'
  var message = sendData

  console.log({ message })

  request(
    {
      method: 'POST',
      uri: 'https://notify-api.line.me/api/notify',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        bearer: token
      },
      form: {
        message: message
      }
    },
    (err, httpResponse) => {
      if (err) {
        console.log(err)
      } else {
        console.log('send notification')
      }
    }
  )
}

function sendRejectNoti (name, reason) {
  var sendData = `ชื่อผู้จอง : ${name}\n คำขอไม่ได้รับการอนุมัติเนื่องจาก : ${reason}`
  var token = 'rZg0KIwbrn3aaOGzEZSN6paRfXL2FpJXMOe6Ad4qG2a'
  var message = sendData

  console.log({ message })

  request(
    {
      method: 'POST',
      uri: 'https://notify-api.line.me/api/notify',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        bearer: token
      },
      form: {
        message: message
      }
    },
    (err, httpResponse) => {
      if (err) {
        console.log(err)
      } else {
        console.log('send notification')
      }
    }
  )
}

module.exports = router
