import React from 'react'
// import './rfq.css'
import Button from '@material-ui/core/Button'
import { Grid, Typography } from '@material-ui/core'

import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
quote: {
    
   
    color:"#17293d",
    '&:hover': {
        color: fade('#17293d', 0.8),
        backgroundColor:fade("#acd523",0.7),
        },
       
    backgroundColor:"#acd523",
    fontWeight:"bolder",
    fontSize:"12px",
    fontFamily:"Arial Black"
    
  },
  quotebtn: {
    
   
   
    backgroundColor:"#acd523",
   
    
  },
}))
function RequestForQuotation() {
    const classes = useStyles()
    return (
        <div  className="rfq-quotation" data-spm="rfq">
            <div className="rfq-content">
            <div className="title-info">
                <h2>PLACE A REQUEST</h2>
                <span>Special Service</span>          
            </div>
                <div className="rfq-banner">
                    <Grid container spacing={1}>
                        <Grid item xs={7} > 
                            <Typography  component="h2">Can't find your preferred item?</Typography>
                            <Typography component="h4">Kiriikou will outsource and procure the items ourselves <br /> 
                            and ship to you wherever you are. <br />
                            Click the button next to get Started <i className='fa fa-arrow-right 8x'></i>
                            </Typography>

                        </Grid>
                        <Grid item xs={5} xl={8} >
                            <Button className={classes.quotebtn} >
                                <a  href='/place-request/get-started' ><span className={classes.quote}>Request Quotation</span></a>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default RequestForQuotation
