import React, { useState, useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import auth from './../auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import cart from './../cart/cart-helper'
import logo from './../assets/images/kik.png';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height:'5px',
  
  },
  toolbr: {
    
    height:'33px',
    margin:"0px",
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  textColor:{
    // color: ACD523,
    // listStyle:'none'
    color:' #acd523',
    fontFamily:"Arial",
    fontWeight:"bolder",
    fontSize:31,
    listStyle:'none',
    '&:hover': {
       color: fade('#acd523', 0.25),
       },
       width:'400px',
       
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginBottom:'24px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  logincolor:{
    
    color:' #acd523',
    '&:hover': {
      color: fade('#acd523', 0.25),
      },
     
  },
  signcolor:{
    marginBottom:'24px',
  },
  searchIcon: {
    
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#ACD523',
   
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const isActive = (history, path) => {
  if (history.location.pathname == path)

  return { color: 'white'}
    else
        return { color: '#acd523'}
   
}

const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#DAFF31'}
  else
    return {color: '#ffffff'}

}
const Header = withRouter(({history}) =>{
  
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    // const handleProfileMenuOpen = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      > 
               {
                auth.isAuthenticated() && (<span>
                  {auth.isAuthenticated().user.seller && (
                  <Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
                  <MenuItem >
                  <Link to={"/user/" + auth.isAuthenticated().user._id}>
                  <IconButton color="inherit" style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>
                    <Badge  color="secondary">
                    <AccountCircle />
                    </Badge>
                  </IconButton>
                  </Link>
                  <p>Profile</p>
                </MenuItem>
                  <MenuItem onClick={() => {
                      auth.clearJWT(() => history.push('/'))
                    }}>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                    
                  >
                  <ExitToAppIcon />
                  </IconButton>
                  <p>Sign out</p>
                </MenuItem>
                     {/* <IconButton
                      edge="end"
                      aria-label="account of current user"
                      aria-controls={menuId}
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      color="inherit"
                    >
                      <AccountCircle />
                      
                    </IconButton> */}
                </span>)
              }
        

        {
            !auth.isAuthenticated() && (<span>
              <Link to="/user/signup" >
                <Button style={isActive(history, "/user/signup")}>Sign up
                </Button>
              </Link>
              <Link to="/auth/signin" >
                <Button style={isActive(history, "/auth/signin")}>Sign In
                </Button>
              </Link>
              <Link to="/business/register/new">
                <Button style={isActive(history, "/business/register/new")}>Connect to Kiriikou
                </Button>
              </Link>
            </span>)
          }
          

      </Menu>
    );
  
    return (  
      <div className={classes.grow}>
       <AppBar position="static">
          <Toolbar>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <div style={{'display':'flex'}}>
            <Typography className={classes.title} variant="h6" noWrap >
              <img src={logo} alt='Logo' height='45'  />
              <Link to='/' className={classes.textColor}>
              Kiriikou
              </Link>

              <Link to="/shops"><Button id="shp" sm="8"> Shops</Button></Link>
  <Button id="ord" ><span className="fa fa-shopping-cart fa-lg" id="cartcolour"></span> Place an order</Button>
                        
  
            </Typography>
            </div>
          
            <div className={classes.grow} />
            <div className={classes.sectionDesktop} className="  col-sm-4">
            {
            !auth.isAuthenticated() && (<span>
              <Link to="/user/signup" className={classes.logincolor}>
                <Button className={classes.signcolor} style={isActive(history, "/user/signup")}>Sign up
                </Button>
              </Link>
              <Link to="/auth/signin" className={classes.logincolor}>
                <Button className={classes.signcolor} style={isActive(history, "/auth/signin")}>Sign In
                </Button>
              </Link>
            </span>)
          }
          {
                auth.isAuthenticated() && (<span>
                  {auth.isAuthenticated().user.seller && (<Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}
                  
                  <Link to={"/user/" + auth.isAuthenticated().user._id}>
                    <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>{auth.isAuthenticated().user.name}</Button>
                  </Link>
                    <Button color="inherit" onClick={() => {
                      auth.clearJWT(() => history.push('/'))
                    }}>Sign out</Button>
                </span>)
              }
            {
                auth.isAuthenticated() &&  !auth.isAuthenticated().user.seller && (<span>

                    <Link to="/business/register/new">
                        <Button style={isActive(history, "/business/register/new")}>Connect to Kiriikou
                      </Button>
                    </Link>
                   
                </span>)
              } 
            </div>
          
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
     
   </div> );

})

export default Header;