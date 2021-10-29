import React, { useState, useEffect } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import './Profile.css'
import axios from '../../axios'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import ContentPasteIcon from '@mui/icons-material/ContentPaste'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { TextField } from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({}))

const Profile = () => {
  const [data, setData] = useState([])
  const [isAdmin, setIsAdmin] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const ID = '123456789'
  const PASSWORD = '123456789'
  const [open, setOpen] = useState(false)
  const [approve, setApprove] = useState('')
  const [warning, setWarning] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  function login () {
    if (ID === username && password === PASSWORD) {
      setIsAdmin(true)
    }
  }

  console.log(data)

  function deleteData (id) {
    axios
      .delete(`schedule/${id}`)
      .then(() => console.log('ลบข้อมูล'))
      .catch(err => console.log(err))
    loadlist()
  }

  async function approveData (id) {
    console.log('approveData id', id)
    const data = {
      status: 'อนุมัติคำร้อง',
      approve: approve
    }
    if (approve !== '') {
      const edit = await axios
        .put(`schedule/${id}`, data)
        .then(() => console.log('ลบข้อมูล'))
        .catch(err => console.log(err))
      const load = await loadlist()
      const warn = await setWarning(false)
      const close = await handleClose()
    } else {
      setWarning(true)
    }
  }

  function loadlist () {
    axios
      .get('schedule')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    axios
      .get('schedule')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='profile__page'>
      <Link to='/'>
        <div className='Btn__back'>
          <Button variant='contained' startIcon={<ArrowBackIosIcon />}>
            ย้อนกลับ
          </Button>
        </div>
      </Link>
      <h1>จัดการตารางการจอง</h1>
      {isAdmin === false ? (
        <div className='Box'>
          <div className='Login'>
            <h1>กรุณากรอบรหัส</h1>
            <h3>username</h3>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <h3>password</h3>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
            />
            <div>
              <button onClick={login}>Login</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='BOX__Book'>
          <div>
            <div className='table__right'>
              <TableContainer component={Paper}>
                <Table aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>ชื่อผู้จอง</StyledTableCell>
                      <StyledTableCell align='right'>แผนก</StyledTableCell>
                      <StyledTableCell align='right'>ประเภท</StyledTableCell>
                      <StyledTableCell align='right'>
                        วัดถุประสงค์
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        จุดหมายปลายทาง
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        วันที่เริ่ม
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        วันที่สิ้นสุด
                      </StyledTableCell>
                      <StyledTableCell align='right'>เวลาเริ่ม</StyledTableCell>
                      <StyledTableCell align='right'>
                        เวลาสิ้นสุด
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        สถานะคำร้อง
                      </StyledTableCell>
                      <StyledTableCell align='right'>
                        ผู้อนุมัติ
                      </StyledTableCell>
                      <StyledTableCell align='right'>ลบข้อมูล</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((item, index) => (
                      <>
                        <StyledTableRow key={index}>
                          <StyledTableCell component='th' scope='row'>
                            {item.surname}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.department}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.type}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.objective}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.place}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.startDate}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.endDate}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.startTime}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.endTime}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {item.status}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            <Button
                              variant='contained'
                              startIcon={<ContentPasteIcon />}
                              color='primary'
                              onClick={handleClickOpen}
                            >
                              ลงชื่อผู้อนุมัติ
                            </Button>
                          </StyledTableCell>

                          <StyledTableCell align='right'>
                            <Button
                              variant='contained'
                              startIcon={<DeleteIcon />}
                              color='error'
                              onClick={() => deleteData(item._id)}
                            >
                              ลบข้อมูล
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby='alert-dialog-title'
                          aria-describedby='alert-dialog-description'
                        >
                          <DialogTitle id='alert-dialog-title'>
                            {'กรุณากรอกชื่อผู้อนุมัติ'}
                          </DialogTitle>
                          <DialogContent>
                            {warning === true ? (
                              <p style={{ color: 'red' }}>กรุณากรอกข้อมูล</p>
                            ) : null}
                            <TextField
                              color='primary'
                              fullWidth
                              label='ลงชื่อผู้อนุมติ'
                              value={approve}
                              onChange={e => setApprove(e.target.value)}
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={() => approveData(item._id)}>
                              อนุมัติคำขอ
                            </Button>
                            <Button onClick={handleClose}>ปิดหน้าต่าง</Button>
                          </DialogActions>
                        </Dialog>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
