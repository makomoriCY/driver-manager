const express = require('express')
const router = express.Router()
const scheduleModel = require('../model/Schedule')
var request = require('request');

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
    .then(() => res.json('Save Succesfuly!'))
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
        .then(sendnotification(data.surname, data.department, data.type, data.approve))
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
  scheduleModel
    .findByIdAndDelete(req.params.id)
    .then(() => res.json('Delete!'))
    .catch(err => res.status(400).json(`error:${err}`))
})

function sendnotification(name, department, type, approve){

  var sendData = `ชื่อผู้จอง : ${name} แผนก: ${department} ประเภทรถ: ${type} คนอนุมัติ: ${approve} `
  var token = 'KgyAfQs2PLJxra6vcWGnPumDagveZKdmXZyE7FKuHAg';
  var message = sendData;


  console.log({message})
 
  request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': token
    },
    form: {
      message: message
    }
  }, (err, httpResponse) => {
    if(err){
      console.log(err);
    } else {
      console.log('send notification')
    }
  });
}

// router.post('/test', function(req, res) {
//   var token = 'KgyAfQs2PLJxra6vcWGnPumDagveZKdmXZyE7FKuHAg';
//   var message = "ลองส่ง";
//   request({
//     method: 'POST',
//     uri: 'https://notify-api.line.me/api/notify',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     auth: {
//       'bearer': token
//     },
//     form: {
//       message: message
//     }
//   }, (err, httpResponse, body) => {
//     if(err){
//       console.log(err);
//     } else {
//       res.json({
//         httpResponse: httpResponse,
//         body: "เทส"
//       });
//     }
//   });
// });

module.exports = router
