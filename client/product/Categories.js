
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Icon from '@material-ui/core/Icon'
import {list} from './api-product.js'
import Products from './Products'
import withWidth, { isWidthUp } from '@material-ui/core';

import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
   
  },
  gridList: {
    flexWrap: 'nowrap',
    width:'100%',
    transform: 'translateZ(0)',
    
  
  },
  // tileTitle: {
  //   verticalAlign: 'middle',
  //   lineHeight: 2.5,
  //   textAlign: 'center',
  //   fontSize: '1.2em',
  //    margin: '0 3px 0 5px',
  //   backgroundColor: '#17293d',
    
  // },
  card: {
    margin: 'auto',
    marginTop: 20,
   
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    
    color:'#acd523',
   
    fontSize: '1.4em',
    fontFamily:"Arial Black",
    fontWeight:"bolder",
   
    
  },
  now: {
    
    color:'#17293d',
    
    fontSize: '12px',
    fontFamily:"Arial",
    
    // marginTop: -19,
    // fontSize: 11,
  },
  icon: {
    verticalAlign: 'sub',
    color: '#ACD523',
    fontSize: '0.9em'
  },
  link: {
    color:'#fff',
    
    cursor:'pointer',
    marginLeft:'0px',
    height:"20px",
    
  }
}))
export default function Categories(props){
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState(props.categories[0])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list({
      category: props.categories[0]
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setProducts(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

  const listbyCategory = category => event => {
    setSelected(category)
    list({
      category: category
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setProducts(data)
      }
    })
  }
  
  // const getGridListCols = () => {
  //   if (isWidthUp('xl', props.width)) {
  //     return 3;
  //   }

  //   if (isWidthUp('lg', props.width)) {
  //     return 3;
  //   }

  //   if (isWidthUp('xs', props.width)) {
  //     return 1;
  //   }
  //   if (isWidthUp('sm', props.width)) {
  //     return 1;
  //   }
  //   return 3;
  // }
    return (
      <div>
        <Card className={classes.card}>
          <Typography type="title" className={classes.title}>
          Featured Products
          </Typography>
          <div className={classes.root}>
         
            <GridList className={classes.gridList} cols={4}>
              {props.categories.map((tile, i) => (
                <GridListTile key={i}  id="cattileTitle" style={{height:"50px", backgroundColor: selected == tile? '#17293d':'#17293d'}}>
                  <span className={classes.link} style={{width:'100px', backgroundColor: selected == tile? '#17293d':'#17293d'}}onClick={listbyCategory(tile)}>{tile}  <Icon className={classes.icon}>{selected == tile && 'arrow_drop_down'}</Icon></span>
                </GridListTile>
              ))}
            </GridList>
          
            
          </div>
          
         
          <Divider/>
          <Products products={products} searched={false}/>
     
       
        </Card>
        
      </div>
    )
}
Categories.propTypes = {
  categories: PropTypes.array.isRequired
}
