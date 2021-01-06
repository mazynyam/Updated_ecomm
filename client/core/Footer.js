import React from 'react';
<<<<<<< HEAD
import {Link, withRouter} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import logo from './../assets/images/kik.png';
=======
<<<<<<< HEAD
import {Link, withRouter} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import logo from './../assets/images/kik.png';

const useStyles = makeStyles((theme) => ({
textColor:{
    // color: ACD523,
    // listStyle:'none'
    
    marginTop:60,

    color:' #acd523',
    fontFamily:"Arial",
    fontWeight:"bold",
    fontSize: 11,
    listStyle:'none',
    '&:hover': {
       color: fade('#acd523', 0.8),
       },
  },
  textfoot:{
   
    
    fontSize:11
},
textbar:{
marginTop:25,
marginLeft:50,
height:30,
},
textkou:{
    marginTop:22,
    marginLeft:40,
    },
}));
function Footer() {
    const classes = useStyles();
    return(
    <div className="footer">
        <div className="container-fluid">
            <div className="row justify-content-right ml-5 ">   
            <div className={classes.textkou}>
        <Link to='/' className={classes.textColor}>
              Kiriikou<img src={logo} alt='Logo' width='40' height='30'/>  <div className=" mt-0">Online Shop</div>
              </Link>
             
    </div>          
                <div className="ml-5"  className={classes.textbar} >
                {/* <div className="col-3 col-sm-5"> */}
                    {/* <h5>Our Address:</h5> */}
                    <address>
                   <h6>Our Address: <span  className={classes.textfoot}>121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon
		              GHANA<br /></span></h6>
		             
                    </address>
                    </div>
              
                    <div  className="text-left ml-5"  className={classes.textbar}>
                    <h6>Get in Touch: <span  className={classes.textfoot}> <i className="fa fa-phone fa-lg "></i>: +233 0245634890<br />
		              <i className="fa fa-fax fa-lg"></i>: +233 0987563456
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiriikou@gmail.com">
                         kiriikou@gmail.com</a></span></h6>
		             


                    
                    {/* <i className="fa fa-phone fa-lg "></i>: +233 0245634890<br />
		              <i className="fa fa-fax fa-lg"></i>: +233 0987563456<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiriikou@gmail.com">
                         kiriikou@gmail.com</a> */}
                       
                     </div>
          
        
           
                <div className="text-left ml-5"  className={classes.textbar}>
                <h6>Follow Us:
                <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook sm"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin sm"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter sm"></i></a>
                        <br/>
                        </h6>
                </div>
                <div className="text-left ml-5 mt-3" id="copybar"  className={classes.textbar} >
                    <p>&copy; Copyright { new Date().getUTCFullYear() } Kiriikou</p>
                </div>
                </div>
          
            {/* <div className="row justify-content-center"  id="copybar">             
                <div className="col-auto" id="copybar">
                    <p>&copy; Copyright { new Date().getUTCFullYear() } Kiriikou</p>
                </div>
            </div> */}
=======
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd

const useStyles = makeStyles((theme) => ({
textColor:{
    // color: ACD523,
    // listStyle:'none'
    
    marginTop:60,

    color:' #acd523',
    fontFamily:"Arial",
    fontWeight:"bold",
    fontSize: 11,
    listStyle:'none',
    '&:hover': {
       color: fade('#acd523', 0.8),
       },
  },
  textfoot:{
   
    
    fontSize:11
},
textbar:{
marginTop:25,
marginLeft:50,
height:30,
},
textkou:{
    marginTop:22,
    marginLeft:40,
    },
}));
function Footer() {
    const classes = useStyles();
    return(
    <div className="footer">
        <div className="container-fluid">
            <div className="row justify-content-right ml-5 ">   
            <div className={classes.textkou}>
                <Link to='/' className={classes.textColor}>
                    Kiriikou.com<img src={logo} alt='Logo' width='40' height='30'/>  <div className=" mt-0">B2B Company</div>
              </Link>         
            </div>          
                <div className="ml-5"  className={classes.textbar} >
                
                    <address>
                   <h6>Our Address: <span  className={classes.textfoot}>121, Clear Water Bay Road<br />
		              Clear Water Bay, Kowloon
		              GHANA<br /></span></h6>
		             
                    </address>
                    </div>
              
                    <div  className="text-left ml-5"  className={classes.textbar}>
                    <h6>Get in Touch: <span  className={classes.textfoot}> <i className="fa fa-phone fa-lg "></i>: +233 0245634890<br />
		              <i className="fa fa-fax fa-lg"></i>: +233 0987563456
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiriikou@gmail.com">
                         kiriikou@gmail.com</a></span></h6> 
                     </div> 
                <div className="text-left ml-5"  className={classes.textbar}>
                <h6>Follow Us:
                <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook sm"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin sm"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter sm"></i></a>
                        <br/>
                        </h6>
                </div>
                <div className="text-left ml-5 mt-3" id="copybar"  className={classes.textbar} >
                    <p>&copy; Copyright { new Date().getUTCFullYear() } Kiriikou.com</p>
                </div>
                </div>
          
            </div>
            </div>
<<<<<<< HEAD
=======
>>>>>>> ddfd71fab3f18afc87ba392e3cca9083b5078b31
        </div>
    </div>
>>>>>>> 041df96c85e649777993eda9178b080b44ad6fdd
    )
}


export default Footer;