<<<<<<< HEAD


// // ' #17293drgba(95, 139, 137, 0.56)':'rgba(95, 124, 139, 0.32)'}}

=======
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
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

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
<<<<<<< HEAD
   
=======
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  gridList: {
    flexWrap: 'nowrap',
    width:'100%',
    transform: 'translateZ(0)',
<<<<<<< HEAD
    
  
=======
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  tileTitle: {
    verticalAlign: 'middle',
    lineHeight: 2.5,
    textAlign: 'center',
    fontSize: '1.35em',
<<<<<<< HEAD
     margin: '0 3px 0 5px',
    backgroundColor: '#17293d',
    
  },
  card: {
    margin: 'auto',
    marginTop: 20,
   
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    
    color:'#ACD523',
    
    fontSize: '2.0em',
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
    
  }
}))
=======
    margin: '0 4px 0 0',
  },
  card: {
    margin: 'auto',
    marginTop: 20
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
    backgroundColor: '#80808024',
    fontSize: '1.1em'
  },
  icon: {
    verticalAlign: 'sub',
    color: '#738272',
    fontSize: '0.9em'
  },
  link: {
    color: '#4d6538',
    textShadow: '0px 2px 12px #ffffff',
    cursor:'pointer'
  }
}))

>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
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

    return (
      <div>
        <Card className={classes.card}>
          <Typography type="title" className={classes.title}>
<<<<<<< HEAD
          Featured Products <span className={classes.now}>Shop now</span>
=======
            Explore by category
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
          </Typography>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
              {props.categories.map((tile, i) => (
<<<<<<< HEAD
                <GridListTile key={i} className={classes.tileTitle} id="tilett" style={{height: '48px', width:"273px", backgroundColor: selected == tile? '#17293d':'#17293d'}}>
=======
                <GridListTile key={i} className={classes.tileTitle} style={{height: '64px', backgroundColor: selected == tile? 'rgba(95, 139, 137, 0.56)':'rgba(95, 124, 139, 0.32)'}}>
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
                  <span className={classes.link} onClick={listbyCategory(tile)}>{tile}  <Icon className={classes.icon}>{selected == tile && 'arrow_drop_down'}</Icon></span>
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
