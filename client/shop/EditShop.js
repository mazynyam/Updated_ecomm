import React, {useEffect, useState} from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Avatar from '@material-ui/core/Avatar'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

import auth from './../auth/auth-helper'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import { makeStyles } from '@material-ui/core/styles'
import {read, update} from './api-shop.js'
import {Redirect} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import MyProducts from './../product/MyProducts'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2)
  },
  title: {
    margin: theme.spacing(2),
    color: theme.palette.protectedTitle,
    fontSize: '1.2em'
  },
  subheading: {
    marginTop: theme.spacing(2),
    color: theme.palette.openTitle
  },
  error: {
    verticalAlign: 'middle'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400
  },
  submit: {
    margin: 'auto',
    marginBottom: theme.spacing(2)
  },
  bigAvatar: {
    width: 60,
    height: 60,
    margin: 'auto'
  },
  input: {
    display: 'none'
  },
  filename:{
    marginLeft:'10px'
  }
}))

export default function EditShop ({match}) {
  const classes = useStyles()
  const [values, setValues] = useState({
    business_name:'',
    region_of_business:'',
    city_of_business:'',
    business_mobile:'',
    business_mobile_contact:'',
    country_of_business:'',
    business_email:'',
    is_business_registered:false,
    business_certificate:'',
    identity_card_front:'',
    identity_card_back:'',
    image: '',
    redirect: false,
    error: '',
    id: ''
  })
  const jwt = auth.isAuthenticated()
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    read({
      shopId: match.params.shopId
    }, signal).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, id: data._id, name: data.name, description: data.description, owner: data.owner.name})
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
  const handleCheck = (event, checked) => {
    setValues({...values, 'is_business_registered': checked})
  }
  const clickSubmit = () => {
    let shopData = new FormData()
    values.business_name && shopData.append('business_name', values.business_name)
    values.region_of_business && shopData.append('region_of_business', values.region_of_business)
    values.city_of_business && shopData.append('city_of_business', values.city_of_business)
    values.business_mobile && shopData.append('business_mobile', values.business_mobile)
    values.business_mobile_contact && shopData.append('business_mobile_contact', values.business_mobile_contact)
    values.country_of_business && shopData.append('country_of_business', values.country_of_business)
    values.business_email && shopData.append('business_email', values.business_email)
    values.is_business_registered && shopData.append('is_business_registered', values.is_business_registered)
    values.business_certificate && shopData.append('business_certificate', values.business_certificate)
    values.identity_card_front && shopData.append('identity_card_front', values.identity_card_front)
    values.identity_card_back && shopData.append('identity_card_back', values.identity_card_back)  
    values.image && shopData.append('image', values.image)
    update({
      shopId: match.params.shopId
    }, {
      t: jwt.token
    }, shopData).then((data) => {
      if (data.error) {
        setValues({...values, error: data.error})
      } else {
        setValues({...values, 'redirect': true})
      }
    })
  }
  const handleChange = name => event => {
    const value = name === 'image'
      ? event.target.files[0]
      : event.target.value
    setValues({...values,  [name]: value })
  }
  const handleBusinessCert = name => event =>{
    const value = name === 'business_certificate' 
    ? e.target.files[0] : event.target.pic
    setValues({...values, [name]: value})
  }
  const handleIdCardFront = name => event =>{
    const value = name === 'identity_card_front' ? event.target.files[0] : event.target.value
    setValues({...values, [name]: value})
  }
  const handleIdCardBack = name => event =>{
    const value = name === 'identity_card_back' ? event.target.files[0] : event.target.value
    setValues({...values, [name]: value})
  }
  
    const logoUrl = values.id
          ? `/api/shops/logo/${values.id}?${new Date().getTime()}`
          : '/api/shops/defaultphoto'
    if (values.redirect) {
      return (<Redirect to={'/seller/shops'}/>)
    }
    return (<div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item xs={6} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography type="headline" component="h2" className={classes.title}>
                Edit Shop
              </Typography>
              <br/>
              <Avatar src={logoUrl} className={classes.bigAvatar}/><br/>
              <input accept="image/*" onChange={handleChange('image')} className={classes.input} id="icon-button-file" type="file" />
              <label htmlFor="icon-button-file">
                <Button variant="contained" color="default" component="span">
                  Change Logo
                  <FileUpload/>
                </Button>
              </label> <span className={classes.filename}>{values.image ? values.image.name : ''}</span><br/>
              <TextField type="text" id="business_name" name="business_name" label='Business Name' className={classes.textField}
                            value={values.business_name}
                            onChange={handleChange('business_name')}
                             required />
                
               
                <TextField type="text" id="region_of_business" name="region_of_business" label='Region' className={classes.textField}
                            value={values.region_of_business}
                            onChange={handleChange('region_of_business')} required />
               
               
                    <TextField type="text" id="city_of_business" name="city_of_business" label='City' className={classes.textField}
                            value={values.city_of_business}
                            onChange={handleChange('city_of_business')} required />
                
                
                    <TextField type="text" id="business_mobile" name="business_mobile" label='Business Contact' className={classes.textField}
                            value={values.business_mobile}
                            onChange={handleChange('business_mobile')} required />
                
                
                    <TextField type="text" id="business_mobile_contact" name="business_mobile_contact" label='Business Alt Contact' className={classes.textField}
                            value={values.business_mobile_contact}
                            onChange={handleChange('business_mobile_contact')}  />
                
                
                    <TextField type="text" id="country_of_business" name="country_of_business" label='Country' className={classes.textField}
                            value={values.country_of_business}
                            onChange={handleChange('country_of_business')} required />
               
                
                    <TextField type="email" id="business_email" name="business_email" label='Business Email' className={classes.textField}
                            value={values.business_email}
                            onChange={handleChange('business_email')} required />
                            <br />
                <Typography>Is Business Registered?</Typography>
                <FormControlLabel
                    control={
                    <Switch classes={{
                                        checked: classes.checked,
                                        bar: classes.bar,
                                    }}
                            checked={values.is_business_registered}
                            onChange={handleCheck}
                    />}
                    label={values.is_business_registered ? 'Registered' : 'Not Registered'}
                />
                 { values.is_business_registered === true && (
                    <div>
                        <input accept="image/*" onChange={handleBusinessCert('business_certificate')} className={classes.input} id="icon-button-file-one" type="file" />
                        <label htmlFor="icon-button-file-one">
                            <Button variant="contained" color="secondary" component="span">
                            Upload Business Certificate
                            <FileUpload/>
                            </Button>
                        </label> <span className={classes.filename}>{values.business_certificate ? values.business_certificate.name : ''}</span><br/>
                    </div>
                )
                }
                {
                    !values.is_business_registered && (
                        <div>
                            <input accept="image/*" onChange={handleIdCardFront('identity_card_front')} className={classes.input} id="icon-button-file-two" type="file" />
                            <label htmlFor="icon-button-file-two">
                                <Button variant="contained" color="secondary" component="span">
                                Upload an ID Card Front
                                <FileUpload/>
                                </Button>
                            </label> <span className={classes.filename}>{values.identity_card_front ? values.identity_card_front.name : ''}</span><br/>
                         
                         <input accept="image/*" onChange={handleIdCardBack('identity_card_back')} className={classes.input} id="icon-button-file-three" type="file" />
                              <label htmlFor="icon-button-file-three">
                                  <Button variant="contained" color="secondary" component="span">
                                  Upload an ID Card Back
                                  <FileUpload/>
                                  </Button>
                              </label> <span className={classes.filename}>{values.identity_card_back ? values.identity_card_back.name : ''}</span><br/>
  
                      </div>
                    )
                }
                
            </CardContent>
            <CardActions>
              <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Update</Button>
            </CardActions>
          </Card>
          </Grid>
          <Grid item xs={6} sm={6}>
            <MyProducts shopId={match.params.shopId}/>
          </Grid>
        </Grid>
    </div>)
}
