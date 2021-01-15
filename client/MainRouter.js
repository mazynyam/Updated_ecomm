import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import AdminPrivateRoute from './auth/AdminPrivateRoute'
import Header from './core/Menu'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import PlaceARequestForm from './request/PlaceARequestForm'
import Footer from './core/Footer'
import MyProducts from './product/MyProducts'
import Chat from './components/Chat'
import queryString from 'query-string'
import VerifyEmail from './components/VerifyEmail'

// Containers
// import TheLayout from './containers/TheLayout'
// Pages
import Login from './views/pages/login/Login'
import Register from './views/pages/register/Register'


const MainRouter = (props) => {
  
  return (
      <>
      <div>
     
        <Header/>
   
          
       
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={Users}/>
        <Route path="/user/signup" component={Signup}/>
        <Route path="/auth/signin" component={Signin}/>
        
        <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
        <Route path="/user/:userId" component={Profile}/>
        <Route path='/place-request/get-started' component={PlaceARequestForm} />

        <Route path="/cart" component={Cart}/>
        <Route path="/product/:productId" component={Product}/>
        <Route path="/shops/all" component={Shops}/>
        <Route path="/shops/:shopId" component={Shop}/>

        <Route path="/" component={Chat} />
        <Route path='/verify-email' component={VerifyEmail} />
        <Route path="/order/:orderId" component={Order}/>
        <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders}/>

        <PrivateRoute path="/seller/shops" component={MyShops}/>
        <PrivateRoute path="/business/register/new" component={NewShop}/>
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
        <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
        <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>

        <Route path="/seller/stripe/connect" component={StripeConnect}/>


          <Route path="/auth/admin/signin" name='Sign In' render={props => <Login {...props} /> }/>
          <Route path="/auth/admin/register" render={props => <Register {...props} /> } /> 
          {/* <Route path='/admin' render={props => <TheLayout {...props} />} /> */}
          
        </Switch>
    

    </div>
      <div id="sitewrapper" >
          <Footer/>
      </div>
    </>
    )


}

export default MainRouter
