import React, {useState, useEffect} from 'react'
import { Card, CardContent, TextField, makeStyles, CardActions,Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'
import create from './api-request'

const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: theme.spacing(5),
      paddingBottom: theme.spacing(2)
    },
    menu: {
      width: 200,
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: theme.spacing(2),
      color: theme.palette.openTitle,
      fontSize: '1.2em'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 300
    },
    submit: {
      margin: 'auto',
      marginBottom: theme.spacing(2)
    },
    input: {
      display: 'none'
    },
    filename:{
      marginLeft:'10px'
    }
  }))
  

export default function PlaceARequestForm() {
    const classes = useStyles();
    const [values, setValues] = useState({
      name:'',
      country:'',
      city:'',
      town:'',
      phone:'',
      email:'',
      quantity:'',
      description:'',
      customization:'',
      image:'',
      error: ''
    })
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value })
    }
    const clickSubmit = () => {
      let requestData = new FormData()
      values.name && productData.append('name', values.name)
      values.country && productData.append('country', values.country)
      values.city && productData.append('city', values.city)
      values.town && productData.append('town', values.town)
      values.phone && productData.append('phone', values.phone)
      values.email && productData.append('email', values.email)
      values.quantity && productData.append('quantity', values.quantity)
      values.description && productData.append('description', values.description)
      values.customization && productData.append('customization', values.customization)
      values.image && productData.append('image', values.image)
  
      create({
        requestId: match.params.requestId,
      }, {
        t: jwt.token
      }, requestData).then((data) => {
        if (data.error) {
          setValues({...values, error: data.error})
        } else {
          setValues({...values, 'redirect': true})
        }
      })
    }
    return (
        <div>
            <Card className={classes.card}>
            <CardContent>
                <Typography type='headline' component='h2'>Place Order Here</Typography>
                    <TextField type='text' name='name' className={classes.textField} label='Fullname' onChange={handleChange('name')} value={values.name} />
                    <TextField type='text' name='country' className={classes.textField}label='Country' onChange={handleChange('country')} value={values.country} />
                    <TextField type='text' name='city'className={classes.textField} label='City' onChange={handleChange('city')} value={values.city} />
                    <TextField type='text' name='town'className={classes.textField} label='Town' onChange={handleChange('town')} value={values.town} />
                    <TextField type='text' name='phone' className={classes.textField}label='Phone Number' onChange={handleChange('phone')} value={values.phone} />
                    <TextField type='email' name='email'className={classes.textField} label='E-mail' onChange={handleChange('email')} value={values.email} />
                    <TextField type='number' name='quantity'className={classes.textField} onChange={handleChange('quantity')} value={values.quantity} label='Quantity' />
                    <TextField type='type' name='description'className={classes.textField} onChange={handleChange('description')} value={values.description} label='Description' />
                    <TextField type='type' name='customization' onChange={handleChange('customization')} value={values.customization} className={classes.textField} label='Customization' /> <br /> <br />
                    <input accept="image/*" onChange={handleChange('image')} value={values.image ? values.image.name : ''} className={classes.input} id="icon-button-file" type="file"/>
                    <label htmlFor="icon-button-file">
                        <Button variant="contained" color="secondary" component="span">
                          Add Pictures for actual items 
                        <FileUpload/>
                        </Button>
                    </label> <span className={classes.filename}></span><br/>
                    {/* {values.image ||  values.image.name  : ''} */}
          
               </CardContent>
               <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit}  className={classes.submit}>Submit</Button>
                    {/* <Link to={'/seller/shop/edit/'} className={classes.submit}><Button variant="contained">Cancel</Button></Link> */}
                </CardActions>
            </Card>
        </div>
    )
}
