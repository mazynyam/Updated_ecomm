import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Suggestions from './../product/Suggestions'
import {listLatest, listCategories} from './../product/api-product.js'
import Search from './../product/Search'
import Categories from './../product/Categories'
import  {SLIDE_INFO} from '../components/SlideConstant'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
<<<<<<< HEAD
import RequestForQuotation from './../components/RequestForQuotation'
=======
<<<<<<< HEAD
import Footer from './Footer'
=======
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd

>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
<<<<<<< HEAD
//     position:"fixed",
//     // width: '160px', /* Set the width of the sidebar */
 
  
//  overflowX: 'hidden', /* Disable horizontal scroll */
  
    
  
  
  },
  
  
 
}));
=======
  }
}))
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31


export default function Home(){
  const classes = useStyles()
  const [suggestionTitle, setSuggestionTitle] = useState("Latest Products")
  const [categories, setCategories] = useState([])
  const [suggestions, setSuggestions] = useState([])
  const [animating, setAnimating] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const content = SLIDE_INFO;
  const name = 'Home';
  
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

  // const Chat =() =>{
  //   var x = document.getElementById("myDIV");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //     document.getElementById("test").focus();

  //   }
  // }
    return (
<<<<<<< HEAD
      <>
       <div className={classes.root}>
=======
<<<<<<< HEAD
      <>

      <div className={classes.root}>
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd
        <Grid container spacing={1}>
        <Grid item xs={4} >
            <Search categories={categories}/>
           
          </Grid>
<<<<<<< HEAD
          <Grid item xs={2} sm={2}>
            
=======
          <Grid item xs={2} sm={2} spacing={1}>
            
       
        
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd
          <h6 id="moneycolour"><span className="fa fa-money fa-lg" id="sellcolour"></span> Make money on Kiriikou</h6>
          
          </Grid>
          <Grid item xs={2} sm={2}>
          <h6 id="trust"><span className="fa fa-shopping-bag fa-lg" id="trt"></span> Shop with trust</h6>
      
          
          </Grid>
          <Grid item xs={2} sm={2}>
          <h6 id="support"><span className="fa fa-clock-o fa-lg" id="supp"></span>24/7 Support</h6>
      
         
          </Grid>
          <Grid item xs={2} sm={2}>
          <h6 id="payment"><span className="fa fa-credit-card fa-lg" id="paynt"></span>Secure Payment</h6>
      
          
          </Grid>
<<<<<<< HEAD
          
          <Grid container spacing={2}>

=======
=======
      <div className={classes.root}>
        <Grid container spacing={2}>
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd
        <Grid item xs={8}>
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
<<<<<<< HEAD

          <Grid  item xs={4} sm={4}>
            <Suggestions  products={suggestions} title={suggestionTitle}/>
=======
<<<<<<< HEAD
          <Grid  item xs={4} sm={4}>
            <Suggestions  products={suggestions} title={suggestionTitle}/>
          </Grid>
          <Grid item xs={8} sm={8}>
          
            <Categories categories={categories}/>
          </Grid> 
  
        </Grid>
   
      </div>
      <div id="sitewrapper" >
      <Footer/>
  </div>
  </>
=======
          <Grid item xs={4} sm={4}>
            <Suggestions products={suggestions} title={suggestionTitle}/>
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd
          </Grid>
          <Grid item xs={8} sm={8}>
          
            <Categories categories={categories}/>
          </Grid> 
  
        </Grid>
         <RequestForQuotation />
      </Grid>
      </div>
<<<<<<< HEAD
      
      <div className="button">
              <div className="icon">
                  <button className="floating-btn" onClick={() => { setShowInfo(!showInfo)}} >
                      <i className="fas fa-comments 4x"></i>
                  </button>
              </div>
          </div>
      </>

=======
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd
    )
}
