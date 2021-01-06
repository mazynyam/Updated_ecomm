import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import {list} from './api-product.js'
import Products from './Products'

import { fade} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({

  menu: {
    width: 200,
  },
  browse:{
    color:'#17293d',
    width: 50,
  },
  // textField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 130,
  //   verticalAlign: 'center',
  //   marginBottom: '80px',
  //   marginTop:'0px',
  //   marginLeft:'80px',
  // },
  // searchField: {
  //   marginLeft: theme.spacing(1),
  //   marginRight: theme.spacing(1),
  //   width: 130,
  //   marginBottom: '200px',
  //   verticalAlign: 'center',
  //   marginTop:'0px',
   

  // },
  searchButton: {
    minWidth: '30px',
    height: '40px',
    padding: '0 0px',
    marginBottom: '20px',
    color:'#ACD523',
    backgroundColor:'#fff',
    '&:hover': {
      backgroundColor: fade('#fff', 0.4),
      borderColor:'#fff',
      },
    marginTop:'25px',
   
    // marginLeft:'250px',
    // verticalAlign: 'center',
  }
}))

export default function Search(props) {
  const classes = useStyles()
  const [values, setValues] = useState({
      category: '',
      search: '',
      results: [],
      searched: false
  })
  const handleChange = name => event => {
    setValues({
      ...values, [name]: event.target.value,
    })
  }
  const search = () => {
    if(values.search){
      list({
        search: values.search || undefined, category: values.category
      }).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          setValues({...values, results: data, searched:true})
        }
      })
    }
  }
  const enterKey = (event) => {
    if(event.keyCode == 13){
      event.preventDefault()
      search()
    }
  }
    return (
      <div>
        <Card id="srcCard">
          {/* <span className={classes.browse}><h6>Browse categories:</h6></span> */}
          
          <TextField
            id="select-category"
            select
            label="Shop by category"
            className="textField"
            id="textField"
            label="Select category"
            className={classes.textField}
            value={values.category}
            onChange={handleChange('category')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal">
            <MenuItem value="All">
              All
            </MenuItem>
            { props.categories.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="search"
            label="Search products"
            type="search"
            onKeyDown={enterKey}
            onChange={handleChange('search')}
            className="searchField"
          
            margin="normal"
          />
          <Button variant="contained" color={'primary'} className={classes.searchButton} onClick={search}>
            <SearchIcon/>
          </Button>
          <Divider/>
          <Products products={values.results} searched={values.searched}/>
        </Card>
      </div>
    )
}
Search.propTypes = {
  categories: PropTypes.array.isRequired
}