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
import LoginIcon from '@mui/icons-material/Login'
import * as dayjs from 'dayjs'

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
  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const ID = 'Superwoman'
  const PASSWORD = '429856'
  const [open, setOpen] = useState(false)
  const [rejectDialog, setRejectDialog] = useState(false)
  const [approve, setApprove] = useState('')
  const [reject, setReject] = useState('')
  const [itemId, setItemId] = useState('')
  const [deleteId, setDeleteId] = useState('')
  const [warning, setWarning] = useState(false)
  const [validate, setValidate] = useState(false)

  const handleRejectDialogOpen = id => {
    setRejectDialog(true)
    setDeleteId(id)
  }

  const handleRejectDialogClose = () => {
    setRejectDialog(false)
    setDeleteId('')
  }

  const handleClickOpen = id => {
    setOpen(true)
    setItemId(id)
  }

  const handleClose = () => {
    setOpen(false)
    setItemId('')
  }

  function handleKeyPress () {
    if (ID === username && password === PASSWORD) {
      setIsAdmin(true)
    }
  }
  function login () {
    if (ID === username && password === PASSWORD) {
      setIsAdmin(true)
    }
  }

  async function deleteData (id) {
    const data = {
      status: 'อนุมัติคำร้อง',
      reason: reject
    }

    if (reject !== '') {
      const reject = await axios
        .delete(`schedule/${id}`, data)
        .then(() => console.log('ลบข้อมูล'))
        .catch(err => console.log(err))
      loadlist()
      setValidate(false)
      setReject('')
      handleRejectDialogClose()
      console.log({ reject })
    } else {
      setValidate(true)
    }
  }

  async function approveData (id) {
    const data = {
      status: 'อนุมัติคำร้อง',
      approve: approve
    }
    if (approve !== '') {
      const edit = await axios
        .put(`schedule/${id}`, data)
        .then(() => console.log('อนุมัติ'))
        .catch(err => console.log(err))
      await loadlist()
      setWarning(false)
      setApprove('')
      handleClose()
      console.log({ edit })
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
      {isAdmin === false ? (
        <div className='Box__Admin'>
          <div className='Login'>
            <h1>กรุณากรอกรหัส</h1>
            <div className='Cl'>
              <TextField
                label='username'
                color='primary'
                fullWidth
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className='Cl'>
              <TextField
                label='password'
                color='primary'
                fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)}
                type='password'
                onKeyPress={e => handleKeyPress(e)}
              />
            </div>
            <div className='Cl'>
              <Button
                variant='contained'
                startIcon={<LoginIcon />}
                onClick={login}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className='BOX__Book'>
          <div className='BOX'>
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
                            {dayjs(item.endDate).format('DD-MM-YYYY')}
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            {dayjs(item.endDate).format('DD-MM-YYYY')}
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
                              onClick={() => handleClickOpen(item._id)}
                            >
                              ลงชื่อผู้อนุมัติ
                            </Button>
                          </StyledTableCell>
                          <StyledTableCell align='right'>
                            <Button
                              variant='contained'
                              startIcon={<DeleteIcon />}
                              color='error'
                              onClick={() => handleRejectDialogOpen(item._id)}
                            >
                              ลบข้อมูล
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      )}
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
          <Button onClick={() => approveData(itemId)}>อนุมัติคำขอ</Button>
          <Button onClick={handleClose}>ปิดหน้าต่าง</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={rejectDialog}
        onClose={handleRejectDialogClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'ปฏิเสธคำขอ'}</DialogTitle>
        <DialogContent>
          {validate === true ? (
            <p style={{ color: 'red' }}>กรุณากรอกข้อมูล</p>
          ) : null}
          <TextField
            color='primary'
            fullWidth
            label='เหตุผลที่ปฏิเสธคำขอ'
            value={reject}
            onChange={e => setReject(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteData(deleteId)}>ยืนยัน</Button>
          <Button onClick={handleRejectDialogClose}>ปิดหน้าต่าง</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Profile
