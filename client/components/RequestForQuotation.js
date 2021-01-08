import React from 'react'
// import './rfq.css'
import Button from '@material-ui/core/Button'
import { Grid, Typography } from '@material-ui/core'

function RequestForQuotation() {
    return (
        <div  className="rfq-quotation" data-spm="rfq">
            <div className="rfq-content">
            <div className="title-info">
                <h2>PLACE A REQUEST</h2>
                <span>Special Service</span>          
            </div>
                <div className="rfq-banner">
                    <Grid container spacing={2}>
                        <Grid item xs={8} > 
                            <Typography  component="h2">Can't find your preferred item?</Typography>
                            <Typography component="h4">Kiriikou will outsource and procure the items ourselves <br /> 
                            and ship to you wherever you are. <br />
                            Click the button next to get Started <i className='fa fa-arrow-right 8x'></i>
                            </Typography>

                        </Grid>
                        <Grid item xs={4} >
                            <Button color={'primary'} variant='contained'>
                                <a  href='/place-request/get-started'>Request Quotation</a>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default RequestForQuotation
