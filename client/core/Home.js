import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Suggestions from './../product/Suggestions'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'
import  {SLIDE_INFO} from '../components/SlideConstant'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import RequestForQuotation from './../components/RequestForQuotation'

import Footer from '../core/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
    marginBottom:38,
  },
  
  
 
}));


export default function Home(){
  const classes = useStyles()
  const [suggestionTitle, setSuggestionTitle] = useState("Latest Products")
  const [categories, setCategories] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [animating, setAnimating] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const content = SLIDE_INFO;
 
  
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listLatest(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setSuggestions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])

 
  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    listCategories(signal).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setCategories(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [])
  const next = ()=>{
    if(animating) return;
    const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex)
  }
  
  const previous = ()=>{
    if(animating) return;
    const nextIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex)
  }
  
  const gotoIndex = (newIndex)=> {
    if(animating) return;
    setActiveIndex(newIndex)
  }
  const slides = content.map((item, index)=> {
    return(
  
      <CarouselItem 
        onExiting={()=> setAnimating(true)}
        onExited={()=> setAnimating(false)}
        key={item.id} >
        <img src={item.imgUrl} alt={item.title } height='300px' width='900px' />
        <CarouselCaption captionText={item.title} captionHeader={item.button} />
      </CarouselItem>
    )
  })

  const [showInfo, setShowInfo]= useState(false)
  
    return (
<>
          <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid>
                  <Search categories={categories}/>
                </Grid>
                <Grid item xs={3} sm={1} md={1} lg={2} xl={1}>    
                <h6 id="moneycolour"><span className="fa fa-money fa-lg" id="sellcolour"></span> Make money on Kiriikou</h6>
                </Grid>
                <Grid item xs={3} sm={1} md={1} lg={2} xl={1} >
                <h6 id="trust"><span className="fa fa-shopping-bag fa-lg" id="trt"></span> Shop with trust</h6>
                </Grid>
                <Grid item xs={3} sm={1} md={1} lg={2} xl={1} >
                <h6 id="support"><span className="fa fa-clock-o fa-lg" id="supp"></span>24/7 Support</h6>
                </Grid>
                <Grid item xs={3} sm={1} md={1} lg={2} xl={1} >
                <h6 id="payment"><span className="fa fa-credit-card fa-lg" id="paynt"></span>Secure Payment</h6>
                </Grid>
              
                <Grid item xs={12} sm={12}  md={6} lg={8} xl={6}>
                  <Carousel 
                  activeIndex={activeIndex}
                  next={next}
                  previous={previous}
                >
                  <CarouselIndicators items={content} activeIndex={activeIndex} onClickHandler={gotoIndex}  />
                  {slides}
                  <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                  <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                </Carousel>
              
              </Grid>
                  <Grid  item xs={12} sm={12}  md={6} lg={4} xl={4}>
                    <Suggestions  products={suggestions} title={suggestionTitle}/>
                  </Grid>
                  
                    <Grid item  xs={12} sm={12}  md={12} lg={12} xl={12}>
                      <Categories categories={categories}/>
                    </Grid>
                    
            
            </Grid>
            <div>
            <RequestForQuotation />
            </div>

           
      
        </div>
         
</>

    )
}
