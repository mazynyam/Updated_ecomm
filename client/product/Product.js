import React, {useState, useEffect}  from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import {read, listRelated} from './api-product.js'
import {Link} from 'react-router-dom'
import Suggestions from './../product/Suggestions'
import AddToCart from './../cart/AddToCart'
import { fade } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  // flex:{
  //   display:'flex'
  // },
  card: {
    padding:'24px 40px 40px',
    marginBottom:'300px',
  },
  // subheading: {
  //   margin: '24px',
  //   // color: theme.palette.openTitle
  //   color:'#17293d'
  // },
  price: {
    padding: '16px',
    margin: '16px 0px',
    display: 'flex',
    // backgroundColor: '#93c5ae3d',
     backgroundColor: '#ACD523',
    fontSize: '1.3em',
    color: '#17293d',
    fontFamily:'Arial Black',
    fontWeight:'40px',
    height:"60px",
    

  },
  // media: {
  //   height: 300,
  //   display: 'inline-block',
  //   width: '50%',
  //   marginLeft: '24px',
    
  // },
  icon: {
    verticalAlign: 'sub',
    color:'#acd523',
    '&:hover': {
      color: fade('#acd523', 0.8),
      },
    fontSize:'18px',
    fontFamily:"Arial Black",
    fontWeight:"bolder",
  },
  link:{
    color: '#3e4c54b3',
    fontSize: '0.9em',
    '&:hover': {
      color: fade('#acd523', 0.8),
      },
  },
  addCart: {
    width: '34px',
    height: '25px',
   
    borderRadius: '0.25em',
    backgroundColor: '#17293d',
    color:"#ACD523"
  },
 
}))

export default function Product ({match}) {
  const classes = useStyles()
  const [product, setProduct] = useState({shop:{}})
  const [suggestions, setSuggestions] = useState([])
  const [error, setError] = useState('')
    useEffect(() => {
      const abortController = new AbortController()
      const signal = abortController.signal
  
      read({productId: match.params.productId}, signal).then((data) => {
        if (data.error) {
          setError(data.error)
        } else {
          setProduct(data)
        }
      })
    return function cleanup(){
      abortController.abort()
    }
  }, [match.params.productId])

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

        listRelated({
          productId: match.params.productId}, signal).then((data) => {
          if (data.error) {
            setError(data.error)
          } else {
            setSuggestions(data)
          }
        })
  return function cleanup(){
    abortController.abort()
  }
}, [match.params.productId])

    const imageUrl = product._id
          ? `/api/product/image/${product._id}?${new Date().getTime()}`
          : '/api/product/defaultphoto'
    return (
        <div className={classes.root}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
              <Card className={classes.card}>
                <CardHeader
                  title={product.name}
                  subheader={product.quantity > 0? 'In Stock': 'Out of Stock'}
                  action={
                    <span id="myaction">
                     <span> <AddToCart cartStyle={classes.addCart} item={product}/></span>
                    </span>
                  }
                />
                <div id="myflex">
                  <CardMedia
                  id="mymedia"
                    image={imageUrl}
                    title={product.name}
                  />
                  <Typography component="p" variant="subtitle1" id="mysubheading">
                    {product.description}<br/>
                    <span className={classes.price}>$ {product.price}</span>
                    <Link to={'/shops/'+product.shop._id} className={classes.link}>
                      <span className={classes.icon}>
                        {/* <Icon className={classes.icon}>shopping_basket</Icon> {product.shop.business_name} */}
                        Contact Supplier {product.shop.business_name}
                      </span>
                    </Link>
                  </Typography>

                </div>
              </Card>
            </Grid>
            {suggestions.length > 0 &&
              (<Grid item xs={5} sm={5}>
                <Suggestions  products={suggestions} title='Related Products'/>
              </Grid>)}
          </Grid>
        </div>)
}
