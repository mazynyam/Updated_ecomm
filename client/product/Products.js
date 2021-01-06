import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
import AddToCart from './../cart/AddToCart'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    textAlign: 'left',
    padding: '0 8px'
  },
  container: {
    minWidth: '100%',
    paddingBottom: '14px'
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    padding: '16px 0 10px'
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.openTitle,
<<<<<<< HEAD
    width: '100%',
  
=======
    width: '100%'
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  tile: {
    textAlign: 'center'
  },
  image: {
<<<<<<< HEAD
    height: '80%',
    
  },
  tileBar: {
    // backgroundColor: 'rgba(0, 0, 0, 0.72)',
    backgroundColor: '#17293d',
    height:"48px",
    textAlign: 'left',
    marginTop:"40px",
    
  },
  tileTitle: {
    fontSize:'1.0em',
    marginBottom:'5px',
    // color:'rgb(189, 222, 219)',
    color:'#fff',
    display:'block',
   
  },
  
  priceTitle: {
    fontSize:'1.4em',
   
    // color:'rgb(189, 222, 219)',
    color:'#fff',
    
    
    
  },
  
=======
    height: '100%'
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    textAlign: 'left'
  },
  tileTitle: {
    fontSize:'1.1em',
    marginBottom:'5px',
    color:'rgb(189, 222, 219)',
    display:'block'
  }
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
}))

export default function Products(props){
  const classes = useStyles()
    return (
      <div className={classes.root}>
      {props.products.length > 0 ?
        (<div className={classes.container}>
          <GridList cellHeight={200} className={classes.gridList} cols={3}>
          {props.products.map((product, i) => (
            <GridListTile key={i} className={classes.tile}>
              <Link to={"/product/"+product._id}><img className={classes.image} src={'/api/product/image/'+product._id} alt={product.name} /></Link>
              <GridListTileBar className={classes.tileBar}
                title={<Link to={"/product/"+product._id} className={classes.tileTitle}>{product.name}</Link>}
<<<<<<< HEAD
                subtitle={<span className={classes.priceTitle}>$ {product.price}</span>}
=======
                subtitle={<span>$ {product.price}</span>}
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
                actionIcon={
                  <AddToCart item={product}/>
                }
              />
            </GridListTile>
          ))}
        </GridList></div>) : props.searched && (<Typography variant="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)}
      </div>)
}
Products.propTypes = {
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}
