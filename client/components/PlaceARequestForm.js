import React from 'react'
import { Card, CardContent, TextField, makeStyles, CardActions,Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import FileUpload from '@material-ui/icons/AddPhotoAlternate'


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
    return (
        <div>
            <Card className={classes.card}>
            <CardContent>
                <Typography type='headline' component='h2'>Place Order Here</Typography>
                    <TextField type='text' name='name' className={classes.textField} label='Fullname' />
                    <TextField type='text' name='country' className={classes.textField}label='Country' />
                    <TextField type='text' name='city'className={classes.textField} label='City' />
                    <TextField type='text' name='town'className={classes.textField} label='Town' />
                    <TextField type='text' name='phone' className={classes.textField}label='Phone Number' />
                    <TextField type='email' name='email'className={classes.textField} label='E-mail' />
                    <TextField type='number' name='quantity'className={classes.textField} label='Quantity' />
                    <TextField type='type' name='description'className={classes.textField} label='Description' />
                    <TextField type='type' name='customization'className={classes.textField} label='Customization' /> <br /> <br />
                    <input accept="image/*" onChange={()=>{}} className={classes.input} id="icon-button-file" type="file"/>
                    <label htmlFor="icon-button-file">
                        <Button variant="contained" color="secondary" component="span">
                        Add Pictures for actual items 
                        <FileUpload/>
                        </Button>
                    </label> <span className={classes.filename}></span><br/>
                    {/* {values.image || values.video ? values.image.name || values.video.name : ''} */}
          
               </CardContent>
               <CardActions>
                    <Button color="primary" variant="contained"  className={classes.submit}>Submit</Button>
                    {/* <Link to={'/seller/shop/edit/'} className={classes.submit}><Button variant="contained">Cancel</Button></Link> */}
                </CardActions>
            </Card>
        </div>
    )
}
