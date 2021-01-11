import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core/styles'
import {create} from './api-user.js'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {Link} from 'react-router-dom'
import crypto from 'crypto'
import config from './../../config/config'
const sgmail = require('@sendgrid/mail')

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  error: {
    verticalAlign: 'middle'
  },
  title: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  }
}))

export default function Signup() {
  const classes = useStyles()
  const [values, setValues] = useState({
    name: '',
    hashed_password: '',
    email: '',
    phone: '',
    emailToken: crypto.randomBytes(64).toString('hex'),
    isVerified:false,
    open: false,
    error: ''
  })
  sgmail.setApiKey(config.sendgrid_api_key)

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      hashed_password: values.hashed_password || undefined,
      phone: values.password || undefined,
      emailToken:values.emailToken,
      isVerified:values.isVerified
    }
    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error})
      } else {
        setValues({ ...values, error: '', open: true})
      }
      const msg = {
        from:'phinehas499@gmail.com',
        to:user.email,
        subject:'Kiriikou - Verify your email',
        text:`Thank you for registering with us.
        Please click on the link to verify your account.
        http://${req.headers.host}/verify-email?${user.emailToken}`,
        html:`
        <h1>Hello ${user.name}</h1>
        <p>
        Thank you for registering with us.
        Please click on the link to verify your account.
        http://${req.headers.host}/verify-email?${user.emailToken}
        </p>
        `
      }
      (async()=>{
        try {
          await sgmail.send(msg)
          req.flash('success', 'Thanks for registering. Please check your email to verify your accouny')
          res.redirect('/')
        } catch (error) {
          console.log(error)
          req.flash('error', 'Something went wrong, Please contact support@kiriikou.com')
          req.redirect('/')
        }
      })();
    })
  }   
    return (<div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign Up
          </Typography>
          <TextField id="name" label="Name" className={classes.textField} value={values.name} onChange={handleChange('name')} margin="normal"/><br/>
          <TextField id="email" type="email" label="Email" className={classes.textField} value={values.email} onChange={handleChange('email')} margin="normal"/><br/>
          <TextField id="phone" type="text" label="Phone" className={classes.textField} value={values.phone} onChange={handleChange('phone')} margin="normal"/>
          <TextField id="hashed_password" type="password" label="Password" className={classes.textField} value={values.hashed_password} onChange={handleChange('hashed_password')} margin="normal"/>
          <br/> {
            values.error && (<Typography component="p" color="error">
              <Icon color="error" className={classes.error}>error</Icon>
              {values.error}</Typography>)
          }
        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Register</Button>
        </CardActions>
      </Card>
      <Dialog open={values.open} disableBackdropClick={true}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/verify-email">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
              Verify Account
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  )
}