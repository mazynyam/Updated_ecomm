import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import {Link} from 'react-router-dom'
import AddToCart from './../cart/AddToCart'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

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
    width: '100%',
  
  },
  tile: {
    textAlign: 'left'
  },
  // supimage: {
  //   height: '80%',
    
    
  // },
  
  
  
}))

export default function Products(props){
  const classes = useStyles()
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 3;
    }

    if (isWidthUp('lg', props.width)) {
      return 3;
    }

    if (isWidthUp('xs', props.width)) {
      return 1;
    }
    if (isWidthUp('sm', props.width)) {
      return 1;
    }
    return 3;
  }
    return (
      <div className={classes.root}>
      {props.products.length > 0 ?
        (<div className={classes.container}>
          <GridList cellHeight={200} className={classes.gridList} cols={getGridListCols()}>
          {props.products.map((product, i) => (
            <GridListTile key={i} className={classes.tile}>
              <Link to={"/product/"+product._id}><img id="supimage" src={'/api/product/image/'+product._id} alt={product.name} /></Link>
              <GridListTileBar id="mytilebar"
                title={<Link to={"/product/"+product._id} id="tileTitle">{product.name}</Link>}
                subtitle={<span id="priceTitle">$ {product.price}</span>}
                // actionIcon={
                //   <AddToCart id ="prcart" item={product}/>
                // }
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
