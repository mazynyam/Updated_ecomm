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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  flex:{
    display:'flex'
  },
  card: {
    padding:'24px 40px 40px'
  },
  subheading: {
    margin: '24px',
<<<<<<< HEAD
    // color: theme.palette.openTitle
    color:'#17293d'
=======
    color: theme.palette.openTitle
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  price: {
    padding: '16px',
    margin: '16px 0px',
    display: 'flex',
<<<<<<< HEAD
    // backgroundColor: '#93c5ae3d',
     backgroundColor: '#ACD523',
    fontSize: '1.3em',
    color: '#17293d',
    fontFamily:'Arial Black',
    fontWeight:'40px',
    height:"60px",
    

=======
    backgroundColor: '#93c5ae3d',
    fontSize: '1.3em',
    color: '#375a53',
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  media: {
    height: 200,
    display: 'inline-block',
    width: '50%',
<<<<<<< HEAD
    marginLeft: '24px',
    
  },
  icon: {
    verticalAlign: 'sub',
    color:'#ACD523'
=======
    marginLeft: '24px'
  },
  icon: {
    verticalAlign: 'sub'
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  link:{
    color: '#3e4c54b3',
    fontSize: '0.9em'
  },
  addCart: {
<<<<<<< HEAD
    width: '70px',
    height: '35px',
    // padding: '5px 0px',
    borderRadius: '0.25em',
    backgroundColor: '#17293d',
    color:"#ACD523"
=======
    width: '35px',
    height: '35px',
    padding: '10px 12px',
    borderRadius: '0.25em',
    backgroundColor: '#5f7c8b'
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
  },
  action: {
    margin: '8px 24px',
    display: 'inline-block'
  }
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
            <Grid item xs={7} sm={7}>
              <Card className={classes.card}>
                <CardHeader
                  title={product.name}
                  subheader={product.quantity > 0? 'In Stock': 'Out of Stock'}
                  action={
                    <span className={classes.action}>
<<<<<<< HEAD
                    Add to cart  <AddToCart cartStyle={classes.addCart} item={product}/>
=======
                      <AddToCart cartStyle={classes.addCart} item={product}/>
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
                    </span>
                  }
                />
                <div className={classes.flex}>
                  <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={product.name}
                  />
                  <Typography component="p" variant="subtitle1" className={classes.subheading}>
                    {product.description}<br/>
                    <span className={classes.price}>$ {product.price}</span>
                    <Link to={'/shops/'+product.shop._id} className={classes.link}>
                      <span>
                        <Icon className={classes.icon}>shopping_basket</Icon> {product.shop.name}
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
