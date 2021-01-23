import React from 'react';
import logo from './../assets/images/kik.png';
import loggo from './../assets/images/ekiri.jpg';
import {Link, withRouter} from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import ChatButton from './../components/ChatButton'
import Chat from './../components/Chat'

const useStyles = makeStyles((theme) => ({
hotext:{
    
      
        color:' #acd523',
        
        listStyle:'none',
        '&:hover': {
           color: fade('#acd523', 0.8),
           },
      },

}));
function Footer() {
    const classes = useStyles();
    return(
        <>
        <Chat />
    <div className="footer">
        <div className="container-fluid" style={{height:"50px"}}>
            <div className="row justify-content-right  ">   
            <div id="textkou">
                <Link to='/'className={classes.hotext} id="textColor">
                <img src={logo} alt='Logo' height='20'  /> <img src={loggo} alt='Logo' width='70' height='20' />  <div className=" mt-0">Online Shop</div>
                </Link>
             
            </div>   

                <div className="ml-5"  id="textbar" >
                
                    <address>
                   Our Address: <span  id="textfoot">121, <br />
		              Clear Water Bay, Kowloon
		              GHANA<br /></span>
		             
                    </address>
                    </div>
              
                    <div  className="text-left "  id="textbar">
                    Get in Touch: <span id="textfoot"> <i className="fa fa-phone fa-lg "></i>: +233 0245634890<br />
		              <i className="fa fa-fax fa-lg"></i>: +233 0987563456<br/>
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:kiriikou@gmail.com">
                         kiriikou@gmail.com <br/>
                       <br/></a></span>
                       

                     </div>
           
                <div className="text-left"  id="textbar">
                Follow Us:<span  id="textfoot">
                <a className="btn btn-social-icon btn-facebook " href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook fa-1x"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin fa-1x "></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter fa-1x"></i></a>
                        </span>
                        <br/>
                </div>
                <div className="text-left " id="copybar" >
                    <p>&copy; Copyright { new Date().getUTCFullYear() } Kiriikou</p>
                </div>
                </div>
                <div className="button">
                  <div className="myForm" >
                      <button className="floating-btn" id='myForm' onClick={()=>document.getElementById("myForm").style.display = "block"} >
                          <i className="fas fa-comments 4x"></i>
                      </button>
                  </div>
          </div>
        </div>
    </div>
 </>
            )
    }



export default Footer;