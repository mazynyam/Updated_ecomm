import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  }
}))


export default function AdminHome(){
    const classes = useStyles()
    
    return (
      <div className={classes.root}>
        
      </div>
    )
}


