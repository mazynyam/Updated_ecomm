import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './core/Home';
import Signin from './auth/Signin'
import Menu from './core/Menu'
import SignUp from '././user/SignUp'
import NewBusiness from '././business/NewBusiness';
// import MyBusiness from '././business/MyBusiness'
import PrivateRoute from './auth/PrivateRoute'

const MainRouter = ()=> {

    return (
      <div>
        <Menu />
      <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/auth/signin' component={Signin}/>
            <Route path='/user/signup' component={SignUp} />
            <Route path='/auth/business/signin' component={Signin} />
         
            {/* <PrivateRoute path='/business/seller/shops' component={MyBusiness} /> */}
            <PrivateRoute path='/business/register/new/shop' component={NewBusiness} />
            
            {/* <PrivateRoute path='/business/seller/shop/:businessId/:productId/edit' component={EditProduct} /> */}
      </Switch>
    </div>
    );
}
export default MainRouter;